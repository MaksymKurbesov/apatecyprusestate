import { getPlanByRegion } from "../helpers";
import { REFERRALS_PERCENTAGE_BY_LEVEL } from "../consts";

export const getTotalIncomeFromReferrals = (referrals, level) => {
  return Object.values(referrals).reduce((accum, referral) => {
    const totalDeposited = calculateTotalDeposit(referral.wallets);
    const percentFromTotalDeposited =
      (totalDeposited * REFERRALS_PERCENTAGE_BY_LEVEL[level]) / 100;

    return accum + percentFromTotalDeposited;
  }, 0);
};

export const getTotalReferrals = (referrals) => {
  return Object.values(referrals).reduce((accum, val) => {
    return accum + val.length;
  }, 0);
};

export const getTotalActiveReferrals = (referrals) => {
  return Object.values(referrals).reduce((accum, value) => {
    const activeReferrals = value.filter((item) => item.invested > 0).length;
    return accum + activeReferrals;
  }, 0);
};

export const getTotalActiveReferralsByLevel = (referrals) => {
  if (referrals.length === 0) {
    return 0;
  }

  let totalActiveReferrals = 0;

  referrals.forEach((referral) => {
    if (referral.invested > 0) {
      totalActiveReferrals++;
    }
  });

  return totalActiveReferrals;
};

export const calculateTotalDeposit = (userWallets) => {
  return Object.values(userWallets).reduce(
    (sum, wallet) => sum + wallet.deposited,
    0
  );
};

export const calculateIncomeInDay = (amount, region) => {
  if (!region) {
    return;
  }

  if (isNaN(amount)) {
    return 0;
  }

  const selectedPlan = getPlanByRegion(region);
  const percent = selectedPlan.inDay;
  const days = selectedPlan.days;

  if (selectedPlan.planNumber > 3) {
    return +((amount * percent) / 100 / days).toFixed(2);
  } else {
    return +((amount * percent) / 100).toFixed(3);
  }
};

export const calculateTotalIncome = (amount, region) => {
  if (!region) {
    return;
  }

  if (isNaN(amount)) {
    return 0;
  }

  const selectedPlan = getPlanByRegion(region);
  const percent = selectedPlan.inDay;
  const days = selectedPlan.days;

  if (selectedPlan.planNumber > 3) {
    return +((amount * percent) / 100).toFixed(2);
  } else {
    return +(((amount * percent) / 100) * days).toFixed(2);
  }
};

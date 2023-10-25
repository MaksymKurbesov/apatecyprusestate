import { getPlanByRegion } from "../helpers";

export const getTotalIncomeFromReferrals = (
  referrals,
  level,
  percentageByRank
) => {
  return Object.values(referrals).reduce((accum, referral) => {
    const totalDeposited = calculateTotalDeposit(referral.wallets);
    const percentFromTotalDeposited =
      (totalDeposited * percentageByRank[level]) / 100;

    return accum + percentFromTotalDeposited;
  }, 0);
};

export const getTotalReferrals = (referrals) => {
  return Object.values(referrals).reduce(
    (sum, usersArray) => sum + usersArray.length,
    0
  );
};

export const getTotalActiveReferrals = (referrals) => {
  return Object.values(referrals)
    .reduce((allUsers, usersArray) => allUsers.concat(usersArray), [])
    .filter((user) => user.invested > 0).length;
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

function calculateNextInterestDate(deposit) {
  const nextInterestDate = new Date(deposit.lastAccrual.seconds * 1000);

  if (deposit.planNumber < 4) {
    nextInterestDate.setDate(nextInterestDate.getDate() + 1); // Следующий день
  } else {
    nextInterestDate.setDate(nextInterestDate.getDate() + deposit.days); // Добавить весь срок депозита
  }

  return nextInterestDate;
}

export const getNearestAccrual = (deposits) => {
  let earliestInterestDate = null;
  let depositWithEarliestInterest = null;
  const activeDeposits = deposits.filter((item) => item.isActive);

  for (const deposit of activeDeposits) {
    const nextInterestDate = calculateNextInterestDate(deposit);

    if (!earliestInterestDate || nextInterestDate < earliestInterestDate) {
      earliestInterestDate = nextInterestDate;
      depositWithEarliestInterest = deposit;
    }
  }

  return depositWithEarliestInterest;
};

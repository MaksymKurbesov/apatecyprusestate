import TRC20Icon from "../assets/SVG/wallets/TRC20.svg";
import PMIcon from "../assets/SVG/wallets/perfect money.svg";
import BitcoinIcon from "../assets/SVG/wallets/bitcoin.svg";
import SolanaIcon from "../assets/SVG/wallets/solana.svg";
import PolkaIcon from "../assets/SVG/wallets/polkadot.svg";
import EthereumIcon from "../assets/SVG/wallets/ethereum.svg";
import BNBIcon from "../assets/SVG/wallets/BNB.svg";

export const ONE_DAY_IN_SECONDS = 86400;

export const REFERRALS_LEVEL = 5;

export const STATISTIC = [
  {
    count: 60,
    title: "Partners",
  },
  {
    count: 130,
    title: "Team members",
  },
  {
    count: 45,
    title: "ROI",
  },
  {
    count: 2.3,
    title: "Capital",
  },
];

export const TELEGRAM_URL = `https://api.telegram.org/bot${process.env.REACT_APP_BOT_TOKEN}/sendMessage`;
export const REFERRALS_PERCENTAGE_BY_LEVEL = {
  1: 5,
  2: 4,
  3: 3,
  4: 2,
  5: 1,
};

export const MENU_LIST = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/partner-program",
    title: "Partner Program",
  },
  {
    to: "/about-us",
    title: "About Us",
  },
  {
    to: "/our-contacts",
    title: "Our Contacts",
  },
  {
    to: "/faq",
    title: "FAQ",
  },
];

export const LABEL_COLORS = {
  ETH: "blue",
  USDT: "green",
  USD: "green",
  BTC: "yellow",
  SOL: "violet",
  BNB: "yellow",
  PM: "red",
  DOT: "pink",
  Выполнено: "green",
  Ожидание: "yellow",
  Отмена: "red",
  Success: "green",
  Waiting: "yellow",
  Cancel: "red",
  "Waiting for payment": "yellow",
  "Ожидание оплаты": "yellow",
};

export const WALLETS = [
  {
    icon: TRC20Icon,
    name: "TRC20 Tether",
    label: "USDT",
    placeholder: "TBia4uHnb3oSSZm5isP284cA7Np1v15Vhi",
  },
  {
    icon: PMIcon,
    name: "Perfect Money",
    label: "PM",
    placeholder: "U123456789",
  },
  {
    icon: BitcoinIcon,
    name: "Bitcoin",
    label: "BTC",
    placeholder: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5",
  },
  {
    icon: SolanaIcon,
    name: "Solana",
    label: "SOL",
    placeholder: "fGF4cGJB2eh5mSd1sKBBrZmx6ER1awjwL4gMsp1SjZg",
  },
  {
    icon: PolkaIcon,
    name: "PolkaDOT",
    label: "DOT",
    placeholder: "12qKuqNfo6JZxi7v1VYriyVRc631QD2DanU8gyf2LuTwYzYD",
  },
  {
    icon: EthereumIcon,
    name: "Ethereum",
    label: "ETH",
    placeholder: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  },
  {
    icon: BNBIcon,
    name: "BNB Smart Chain",
    label: "BNB",
    placeholder: "0xeb24cdB1DFd1f6a7B709D68FF31680388C970b21",
  },
];

export const PLANS = [
  {
    planNumber: 1,
    name: "Limassol",
    inDay: 1.2,
    days: 33,
    minDeposit: 100,
    maxDeposit: 999,
    accrualsEveryday: true,
  },
  {
    planNumber: 2,
    name: "Famagusta",
    inDay: 2.1,
    days: 26,
    minDeposit: 1000,
    maxDeposit: 6999,
    accrualsEveryday: true,
  },
  {
    planNumber: 3,
    name: "Larnaca",
    inDay: 3,
    days: 19,
    minDeposit: 7000,
    maxDeposit: 14999,
    accrualsEveryday: true,
  },
  {
    planNumber: 4,
    name: "Paphos",
    inDay: 55,
    days: 12,
    minDeposit: 15000,
    maxDeposit: 29999,
    accrualsEveryday: false,
  },
  {
    planNumber: 5,
    name: "Nicosia",
    inDay: 41,
    days: 7,
    minDeposit: 30000,
    maxDeposit: 49999,
    accrualsEveryday: false,
  },
  {
    planNumber: 6,
    name: "Individual",
    inDay: 2.3,
    days: 24,
    minDeposit: 50000,
    maxDeposit: "∞",
    accrualsEveryday: false,
  },
];

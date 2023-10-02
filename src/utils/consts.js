import TRC20Icon from "../assets/SVG/wallets/TRC20.svg";
import PMIcon from "../assets/SVG/wallets/perfect money.svg";
import BitcoinIcon from "../assets/SVG/wallets/bitcoin.svg";
import SolanaIcon from "../assets/SVG/wallets/solana.svg";
import PolkaIcon from "../assets/SVG/wallets/polkadot.svg";
import EthereumIcon from "../assets/SVG/wallets/ethereum.svg";
import BNBIcon from "../assets/SVG/wallets/BNB.svg";
import Plan1Image from "../assets/images/plans images/1.png";
import Plan2Image from "../assets/images/plans images/2.png";
import Plan3Image from "../assets/images/plans images/3.png";
import ProjectImage1 from "../assets/images/projects/limassol/vassiliou/1.webp";
import ProjectImage2 from "../assets/images/projects/limassol/vassiliou/2.webp";
import ProjectImage3 from "../assets/images/projects/limassol/vassiliou/3.webp";
import ProjectImage4 from "../assets/images/projects/limassol/vassiliou/4.webp";
import ProjectImage5 from "../assets/images/projects/limassol/vassiliou/5.webp";

export const ONE_DAY_IN_SECONDS = 86400;

export const REFERRALS_LEVEL = 5;

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
  "Waiting for payment": "yellow",
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
    planImage: Plan1Image,
    inDay: 1.2,
    days: 33,
    minDeposit: 100,
    maxDeposit: 999,
    accrualsEveryday: true,
  },
  {
    planNumber: 2,
    name: "Nicosia",
    planImage: Plan2Image,
    inDay: 2.1,
    days: 26,
    minDeposit: 1000,
    maxDeposit: 6999,
    accrualsEveryday: true,
  },
  {
    planNumber: 3,
    name: "Larnaca",
    planImage: Plan3Image,
    inDay: 3,
    days: 19,
    minDeposit: 7000,
    maxDeposit: 14999,
    accrualsEveryday: true,
  },
  {
    planNumber: 4,
    name: "Paphos",
    planImage: Plan1Image,
    inDay: 55,
    days: 12,
    minDeposit: 15000,
    maxDeposit: 29999,
    accrualsEveryday: false,
  },
  {
    planNumber: 5,
    name: "Famagusta",
    planImage: Plan2Image,
    inDay: 41,
    days: 7,
    minDeposit: 30000,
    maxDeposit: 49999,
    accrualsEveryday: false,
  },
  {
    planNumber: 6,
    name: "Individual",
    planImage: Plan3Image,
    inDay: 2.3,
    days: 24,
    minDeposit: 50000,
    maxDeposit: "∞ ",
    accrualsEveryday: false,
  },
];

export const PROJECTS = {
  Limassol: [
    {
      name: "VASSILIOU MAKEDONOS RESIDENCE",
      images: [
        ProjectImage1,
        ProjectImage2,
        ProjectImage3,
        ProjectImage4,
        ProjectImage5,
      ],
      pricePerSquare: 14770,
      type: "Жилой дом",
      area: 48,
      floors: 4,
      apartments: 20,
      constructionType: "Монолит",
      features: [
        "Парковка",
        "Детская площадка",
        "Возле школы",
        "Возле детсада",
        "Возле супермаркета",
        "Возле больницы",
      ],
    },
    {
      name: "RESIDENCE BIANCO",
      images: [
        ProjectImage1,
        ProjectImage2,
        ProjectImage3,
        ProjectImage4,
        ProjectImage5,
      ],
      pricePerSquare: 14770,
      type: "Жилой дом",
      area: 48,
      floors: 4,
      apartments: 20,
      constructionType: "Монолит",
      features: [
        "Парковка",
        "Детская площадка",
        "Возле школы",
        "Возле детсада",
        "Возле супермаркета",
        "Возле больницы",
      ],
    },
    {
      name: "KINNIS GRAND VALLEY RESIDENCE",
      images: [
        ProjectImage1,
        ProjectImage2,
        ProjectImage3,
        ProjectImage4,
        ProjectImage5,
      ],
      pricePerSquare: 14770,
      type: "Жилой дом",
      area: 48,
      floors: 4,
      apartments: 20,
      constructionType: "Монолит",
      features: [
        "Парковка",
        "Детская площадка",
        "Возле школы",
        "Возле детсада",
        "Возле супермаркета",
        "Возле больницы",
      ],
    },
    {
      name: "KING PHILIP RESIDENCE",
      images: [
        ProjectImage1,
        ProjectImage2,
        ProjectImage3,
        ProjectImage4,
        ProjectImage5,
      ],
      pricePerSquare: 14770,
      type: "Жилой дом",
      area: 48,
      floors: 4,
      apartments: 20,
      constructionType: "Монолит",
      features: [
        "Парковка",
        "Детская площадка",
        "Возле школы",
        "Возле детсада",
        "Возле супермаркета",
        "Возле больницы",
      ],
    },
    {
      name: "CITY TERRACE",
      images: [
        ProjectImage1,
        ProjectImage2,
        ProjectImage3,
        ProjectImage4,
        ProjectImage5,
      ],
      pricePerSquare: 14770,
      type: "Жилой дом",
      area: 48,
      floors: 4,
      apartments: 20,
      constructionType: "Монолит",
      features: [
        "Парковка",
        "Детская площадка",
        "Возле школы",
        "Возле детсада",
        "Возле супермаркета",
        "Возле больницы",
      ],
    },
  ],
};

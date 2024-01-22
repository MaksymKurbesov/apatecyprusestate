import TRC20Icon from '../assets/SVG/wallets/TRC20.svg'
import PMIcon from '../assets/SVG/wallets/perfect money.svg'
import BitcoinIcon from '../assets/SVG/wallets/bitcoin.svg'
import EthereumIcon from '../assets/SVG/wallets/ethereum.svg'
import DefaultStatus from '../assets/SVG/referral status/default.svg'
import AdvancedStatus from '../assets/SVG/referral status/advanced.svg'
import IronStatus from '../assets/SVG/referral status/iron.svg'
import BronzeStatus from '../assets/SVG/referral status/bronze.svg'
import SilverStatus from '../assets/SVG/referral status/silver.svg'
import GoldStatus from '../assets/SVG/referral status/gold.svg'
import PlatinumStatus from '../assets/SVG/referral status/platinum.svg'
import DiamondStatus from '../assets/SVG/referral status/diamond.svg'
import SapphireStatus from '../assets/SVG/referral status/sapphire.svg'
import { IRank, Ranks } from './PERCENTAGES_BY_RANK'
import { ReactComponent as PersonalArea } from '../assets/SVG/menu icons/PersonalArea.svg'
import { ReactComponent as CashIn } from '../assets/SVG/menu icons/CashIn.svg'
import { ReactComponent as MakeDeposit } from '../assets/SVG/menu icons/MakeDeposit.svg'
import { ReactComponent as Withdrawal } from '../assets/SVG/menu icons/Withdrawn.svg'
import { ReactComponent as Transactions } from '../assets/SVG/menu icons/Transactions.svg'
import { ReactComponent as Partners } from '../assets/SVG/menu icons/Partners.svg'
import { ReactComponent as Settings } from '../assets/SVG/menu icons/settings.svg'

export const ONE_DAY_IN_SECONDS = 86400
export const TELEGRAM_URL = `https://api.telegram.org/bot${process.env.REACT_APP_BOT_TOKEN}/sendMessage`

export const STATISTIC = [
  {
    count: 60,
    title: 'Partners'
  },
  {
    count: 130,
    title: 'Team members'
  },
  {
    count: 45,
    title: 'ROI'
  },
  {
    count: 1.1,
    title: 'Capital'
  }
]

export const MENU_ITEMS = [
  {
    title: 'Personal Area',
    icon: <PersonalArea />,
    path: 'personal-area'
  },
  {
    title: 'Cash In',
    icon: <CashIn />,
    path: 'cash-in'
  },
  {
    title: 'Make a deposit',
    icon: <MakeDeposit />,
    path: 'make-deposit'
  },
  {
    title: 'Withdrawal',
    icon: <Withdrawal />,
    path: 'withdrawal'
  },
  {
    title: 'Transactions',
    icon: <Transactions />,
    path: 'transactions'
  },
  {
    title: 'Referrals',
    icon: <Partners />,
    path: 'referrals'
  },
  {
    title: 'Settings',
    icon: <Settings />,
    path: 'settings'
  }
]

interface ISponsor {
  name: string
  icon: any
}

export interface ISponsors {
  [Ranks.NOVICE]: ISponsor
  [Ranks.IRON]: ISponsor
  [Ranks.BRONZE]: ISponsor
  [Ranks.SILVER]: ISponsor
  [Ranks.GOLD]: ISponsor
  [Ranks.PLATINUM]: ISponsor
  [Ranks.BRILLIANT]: ISponsor
  [Ranks.SAPPHIRE]: ISponsor
  [Ranks.DEFAULT]: ISponsor
}

export const SPONSOR_NAME_MAP: ISponsors = {
  [Ranks.DEFAULT]: {
    name: 'Начальный',
    icon: DefaultStatus
  },
  [Ranks.NOVICE]: {
    name: 'Продвинутый',
    icon: AdvancedStatus
  },
  [Ranks.IRON]: {
    name: 'Железный',
    icon: IronStatus
  },
  [Ranks.BRONZE]: {
    name: 'Бронзовый',
    icon: BronzeStatus
  },
  [Ranks.SILVER]: {
    name: 'Серебрянный',
    icon: SilverStatus
  },
  [Ranks.GOLD]: {
    name: 'Золотой',
    icon: GoldStatus
  },
  [Ranks.PLATINUM]: {
    name: 'Платиновый',
    icon: PlatinumStatus
  },
  [Ranks.BRILLIANT]: {
    name: 'Бриллиантовый',
    icon: DiamondStatus
  },
  [Ranks.SAPPHIRE]: {
    name: 'Сапфировый',
    icon: SapphireStatus
  }
}

export const MENU_LIST = [
  {
    to: '/',
    title: 'Home'
  },
  {
    to: '/partner-program',
    title: 'Partner Program'
  },
  {
    to: '/about-us',
    title: 'About Us'
  },
  {
    to: '/our-contacts',
    title: 'Our Contacts'
  },
  {
    to: '/faq',
    title: 'FAQ'
  }
]

interface ILabelColors {
  [key: string]: string
}

export const LABEL_COLORS: ILabelColors = {
  ETH: 'blue',
  USDT: 'green',
  USD: 'green',
  BTC: 'yellow',
  SOL: 'violet',
  BNB: 'yellow',
  PM: 'red',
  DOT: 'pink',
  Выполнено: 'green',
  Ожидание: 'yellow',
  Отмена: 'red',
  Success: 'green',
  Waiting: 'yellow',
  Cancel: 'red',
  'Waiting for payment': 'yellow',
  'Ожидание оплаты': 'yellow'
}

export const WALLETS = [
  {
    icon: TRC20Icon,
    name: 'TRC20 Tether',
    label: 'USDT',
    placeholder: 'TBia4uHnb3oSSZm5isP284cA7Np1v15Vhi',
    our_wallet_number: 'TW2FSbnmHnv1PVXbuoqqQELeQck1DuoWZg'
  },
  {
    icon: BitcoinIcon,
    name: 'Bitcoin',
    label: 'BTC',
    placeholder: '3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5',
    our_wallet_number: 'bc1qchrkev838v3m4vhraptckdp7ake0u264l5nafg'
  },
  {
    icon: EthereumIcon,
    name: 'Ethereum',
    label: 'ETH',
    placeholder: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
    our_wallet_number: '0x15AF1Af287110236E9c81A4308671997e1bB32e4'
  },
  {
    icon: PMIcon,
    name: 'Perfect Money',
    label: 'PM',
    placeholder: 'U123456789',
    our_wallet_number: 'U40108873'
  }
]

export const PLANS = [
  {
    planNumber: 1,
    name: 'Limassol',
    inDay: 1.2,
    days: 33,
    minDeposit: 100,
    maxDeposit: 999,
    accrualsEveryday: true
  },
  {
    planNumber: 2,
    name: 'Famagusta',
    inDay: 2.1,
    days: 26,
    minDeposit: 1000,
    maxDeposit: 6999,
    accrualsEveryday: true
  },
  {
    planNumber: 3,
    name: 'Larnaca',
    inDay: 3,
    days: 19,
    minDeposit: 7000,
    maxDeposit: 14999,
    accrualsEveryday: true
  },
  {
    planNumber: 4,
    name: 'Paphos',
    inDay: 55,
    days: 12,
    minDeposit: 15000,
    maxDeposit: 29999,
    accrualsEveryday: false
  },
  {
    planNumber: 5,
    name: 'Nicosia',
    inDay: 41,
    days: 7,
    minDeposit: 30000,
    maxDeposit: 49999,
    accrualsEveryday: false
  },
  {
    planNumber: 6,
    name: 'Individual',
    inDay: '∞',
    days: '∞',
    minDeposit: 50000,
    maxDeposit: '∞',
    accrualsEveryday: false
  }
]

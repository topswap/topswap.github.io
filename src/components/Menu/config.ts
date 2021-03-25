import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://topswap.github.io/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://top1st.github.io/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://top1st.github.io/syrup',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://top1st.github.io/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: 'https://top1st.github.io/nft',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    calloutClass: 'rainbow',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://top1st.github.io/teams',
      },
      {
        label: 'Task Center',
        href: 'https://top1st.github.io/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'https://top1st.github.io/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pancakeswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://pancakeswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://pancakeswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://pancakeswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://top1st.github.io/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.pancakeswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/top1st',
      },
      {
        label: 'Docs',
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com',
      },
    ],
  },
]

export default config

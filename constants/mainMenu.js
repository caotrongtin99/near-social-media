import BellIcon from '~/public/icons/bell.svg'
import HomeIcon from '~/public/icons/home.svg'
import HashIcon from '~/public/icons/hash.svg'
import MessageIcon from '~/public/icons/message-square.svg'
import TrendingIcon from '~/public/icons/trending-up.svg'
import WalletIcon from '~/public/icons/bx_wallet.svg'
import UserIcon from '~/public/icons/user.svg'
import MoreIcon from '~/public/icons/more-horizontal.svg'

export const mainMenuItems = [
  {
    name: 'Home',
    icon: <HomeIcon />
  },
  {
    name: 'Explore',
    icon: <HashIcon />
  },
  {
    name: 'Notification',
    icon: <BellIcon />
  },
  {
    name: 'Messages',
    icon: <MessageIcon />
  },
  {
    name: 'Topics',
    icon: <TrendingIcon />
  },
  {
    name: 'Bookmarks',
    icon: <TrendingIcon />
  },
  {
    name: 'Wallet',
    icon: <WalletIcon />
  },
  {
    name: 'Profile',
    icon: <UserIcon />
  },
  {
    name: 'More',
    icon: <MoreIcon />
  }
]
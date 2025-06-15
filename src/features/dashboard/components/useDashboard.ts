import {BotMessageSquare, Gauge, PieChart, Settings2} from '@/components/icons';
import {type LucideIcon} from '@/components/icons';

export type NavMenu = {
  title: string;
  url: string;
  icon: LucideIcon | string;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
};

const user = {
  name: 'Mahid Ahmod',
  email: 'mahid@gamil.com',
  avatar: '/Avatar.png',
};

const navMenu: NavMenu[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: Gauge,
  },
  {
    title: 'Agents',
    url: '/dashboard/agents',
    icon: BotMessageSquare,
  },
  {
    title: 'Analytics',
    url: '#',
    icon: PieChart,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings2,
    isActive: false,
    items: [
      {
        title: 'General',
        url: '#',
      },
      {
        title: 'Team',
        url: '#',
      },
      {
        title: 'Billing',
        url: '#',
      },
      {
        title: 'Limits',
        url: '#',
      },
    ],
  },
];

export default function useDashboard() {
  return {navMenu, user};
}

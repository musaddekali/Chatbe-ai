import {BotMessageSquare, Gauge, PieChart, Settings2} from '../icons';

export const sidebarData = {
  user: {
    name: 'Mahid Ahmod',
    email: 'mahid@gamil.com',
    avatar: '/Avatar.png',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '#',
      icon: Gauge,
    },
    {
      title: 'Agents',
      url: '#',
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
  ],
};

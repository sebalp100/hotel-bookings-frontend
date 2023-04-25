import {
  FaFacebook, FaTwitter, FaGooglePlus, FaVine, FaPinterest,
} from 'react-icons/fa';

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'rooms',
    label: 'Rooms',
    path: '/home',
  },
  {
    key: 'reserve',
    label: 'Reserve',
    path: '/reservation/new',
  },
  {
    key: 'my_reservations',
    label: 'My Reservations',
    path: '/reservations',
  },
  {
    key: 'add_room',
    label: 'Add Room',
    path: '/room/new',
  },
  {
    key: 'delete_room',
    label: 'Delete Room',
    path: '/rooms/delete',
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: 'twitter',
    label: 'Twitter',
    path: 'twitter.com',
    icon: <FaTwitter />,
  },
  {
    key: 'facebook',
    label: 'Facebook',
    path: 'facebook.com',
    icon: <FaFacebook />,
  },
  {
    key: 'google_plus',
    label: 'Google Plus',
    path: 'google.com',
    icon: <FaGooglePlus />,
  },
  {
    key: 'vine',
    label: 'Vine',
    path: 'vine.com',
    icon: <FaVine />,
  },
  {
    key: 'pinterest',
    label: 'Pinterest',
    path: 'pinterest.com',
    icon: <FaPinterest />,
  },
];

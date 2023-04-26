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
    label: 'Add a Room',
    path: '/room/new',
  },
  {
    key: 'delete_room',
    label: 'Delete a Room',
    path: '/rooms/delete',
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: 'twitter',
    label: 'Twitter',
    path: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    key: 'facebook',
    label: 'Facebook',
    path: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    key: 'google_plus',
    label: 'Google Plus',
    path: 'https://www.google.com',
    icon: <FaGooglePlus />,
  },
  {
    key: 'vine',
    label: 'Vine',
    path: 'https://www.vine.com',
    icon: <FaVine />,
  },
  {
    key: 'pinterest',
    label: 'Pinterest',
    path: 'https://www.pinterest.com',
    icon: <FaPinterest />,
  },
];

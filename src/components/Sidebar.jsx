import React from 'react';
import { MdHotel } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from '../lib/consts/navigation';
import SidebarLink from './SidebarLink';

const Sidebar = () => (
  <div className="bg-neutral-50 p-3 fixed h-screen flex flex-col text-neutral-900 hidden md:flex">
    <div className="flex items-center gap-2 px-1 py-3 pt-3 pb-9">
      <MdHotel fontSize={24} />
      <span className="text-neutral-900 text-lg">Hotel Booking</span>
    </div>
    <div className="flex-1 flex flex-col pt-20">
      {DASHBOARD_SIDEBAR_LINKS.map((item) => (
        <SidebarLink key={item.key} item={item} />
      ))}
    </div>
    <div className="flex flex-row p-2">
      {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
        <Link to={item.path} key={item.key} className="flex-1">
          <span>{item.icon}</span>
        </Link>
      ))}
    </div>
    <p className="p-2">@2023 Hotel Bookings</p>
  </div>
);

export default Sidebar;

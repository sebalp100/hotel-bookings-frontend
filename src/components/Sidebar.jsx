import React from 'react';
import { MdHotel } from 'react-icons/md';
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/consts/navigation';

const Sidebar = () => (
  <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
    <div className="flex items center gap-2 px-1 py-3">
      <MdHotel fontSize={24} />
      <span className="text-neutral-100 text-lg">Hotel Booking</span>
    </div>
    <div className="flex-1">
      {DASHBOARD_SIDEBAR_LINKS.map((item) => (
        <div key={item.key}>
          {item.label}
        </div>
      ))}
    </div>
    <div>bottom</div>
  </div>
);

export default Sidebar;

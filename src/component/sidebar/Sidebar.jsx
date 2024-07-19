import React, { useState } from 'react';
import ProfileIcon from '../../assets/Gifs/output-onlinegiftools.gif';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../redux/toggleSlice';
import { RxCross2 } from 'react-icons/rx';
import './Sidebar.css';

import { SidebarData } from '../../lib/Data';

function Sidebar({ toggleSidebar, isSidebarOpen }) {
  const toggleState = useSelector((state) => state.toggle.value);

  return (
    <div
      className={`sidebar flex justify-start items-start ${
        isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'
      } ${toggleState ? 'bg-white' : 'bg-black'}`}
    >
      <div className="sidebar-content w-11/12  font-russonOne">
        <div className="flex justify-between items-center gap-10">
          <div className=" flex items-start flex-col">
            <img src={ProfileIcon} alt="" className="w-10 h-10 rounded-full" />
            <h1 className='font-semibold text-[17px]'>Prachi Singh</h1>
          </div>
          <div className="w-15 h-15">
            <RxCross2
              size={28}
              onClick={toggleSidebar}
              className=" cursor-pointer"
            />
          </div>
        </div>

        <div className="flex justify-between items-center flex-col gap-6 mt-10">
          {SidebarData?.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-start items-left gap-3 w-full hover:text-red-300 cursor-pointer"
              >
                <h1>{item.icon}</h1>
                <h1 className='text-[15px] uppercase'>{item.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

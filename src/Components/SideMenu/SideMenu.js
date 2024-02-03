import React from "react";
import "./SideMenu.css";
import { NavLink } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoKeySharp } from "react-icons/io5";
const SideMenu = () => {
  return (
    <div className="sidemenu">
      {/* UserImage */}

      <div className="picture">
        <div className="image"></div>
        <div className="text"> welcome</div>
      </div>

      {/* Sidebar */}

      <div className="sidebar">
        <NavLink to="/dashboard" className="sidebartext">
          <AiFillDashboard className="icon" />
          Dashboard
        </NavLink>
        <NavLink to="/facilitylist" className="sidebartext">
          <FaClipboardList className="icon" /> Facility List
        </NavLink>
        <NavLink to="/doctorlist" className="sidebartext">
          {" "}
          <FaUserDoctor className="icon" /> Doctor List
        </NavLink>
        <NavLink to="/appointmentlist" className="sidebartext">
          {" "}
          <FaCalendarAlt className="icon" /> Appointment List
        </NavLink>
        <NavLink to="/changepassword" className="sidebartext">
          {" "}
          <RiLockPasswordFill className="icon" /> Change Password
        </NavLink>
        <NavLink to="/serverkey" className="sidebartext">
          <IoKeySharp className="icon" /> Server Key
        </NavLink>
      </div>
    </div>
  );
};

export default SideMenu;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../assets/udemy-logo.svg";
import { Link } from "react-router-dom";
import { RiHome5Line } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { PiExamFill } from "react-icons/pi";
import { RiBankLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa"; // Hamburger icon

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility
  const [activeLink, setActiveLink] = useState("/dashboard"); // State to track the active link

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  const handleSetActiveLink = (link) => {
    setActiveLink(link); // Set the active link
    setIsOpen(false); // Close sidebar on mobile after clicking a link
  };

  return (
    <div>
      {/* Hamburger Icon - visible on mobile */}
      <div className="lg:hidden p-4 z-50 fixed top-0 left-0">
        <FaBars onClick={toggleSidebar} className="text-black cursor-pointer" />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-60 h-screen bg-[#152259] text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col justify-between items-center py-3">
          {/* logo and navlink */}
          <div className="w-full py-3">
            {/* LOGO-DIV  */}
            <div className="flex justify-center items-center flex-col py-3 ">
              <img src={logo} alt="logo" />
              <p className="font-[600] pt-4">Udemy Inter. school</p>
            </div>
            {/* divider */}
            <div className="border-b my-3 w-full border-gray-300"></div>
            {/* navlink */}
            <div className="flex justify-center">
              <div className="flex flex-col justify-center font-semibold gap-6 my-12">
                <Link
                  to="/dashboard"
                  className={`${
                    activeLink === "/dashboard" ? "bg-blue-500" : ""
                  } hover:bg-blue-300 px-4 py-2 rounded-lg`}
                  onClick={() => handleSetActiveLink("/dashboard")}
                >
                  <RiHome5Line className="inline" />
                  <span className="pl-4 align-middle">Dashboard</span>
                </Link>
                <Link
                  to="/dashboard/teachers"
                  className={`${
                    activeLink === "/dashboard/teachers" ? "bg-blue-500" : ""
                  } hover:bg-blue-300 px-4 py-2 rounded-lg`}
                  onClick={() => handleSetActiveLink("/dashboard/teachers")}
                >
                  <FaChalkboardTeacher className="inline" />
                  <span className="pl-4 align-middle">Teachers</span>
                </Link>
                <Link
                  to="/dashboard/students"
                  className={`${
                    activeLink === "/dashboard/students" ? "bg-blue-500" : ""
                  } hover:bg-blue-300 px-4 py-2 rounded-lg`}
                  onClick={() => handleSetActiveLink("/dashboard/students")}
                >
                  <GiGraduateCap className="inline" />
                  <span className="pl-4 align-middle">Students/ classes</span>
                </Link>
                <Link
                  to="/dashboard/billing"
                  className={`${
                    activeLink === "/dashboard/billing" ? "bg-blue-500" : ""
                  } hover:bg-blue-300 px-4 py-2 rounded-lg`}
                  onClick={() => handleSetActiveLink("/dashboard/billing")}
                >
                  <FaMoneyBillTransfer className="inline" />
                  <span className="pl-4 align-middle">Billing</span>
                </Link>
                <Link
                  to="/dashboard/settings"
                  className={`${
                    activeLink === "/dashboard/settings" ? "bg-blue-500" : ""
                  } hover:bg-blue-300 px-4 py-2 rounded-lg`}
                  onClick={() => handleSetActiveLink("/dashboard/settings")}
                >
                  <IoSettingsOutline className="inline" />
                  <span className="pl-4 align-middle">Settings and Profile</span>
                </Link>
                <Link
                  to="/dashboard/exams"
                  className={`${
                    activeLink === "/dashboard/exams" ? "bg-blue-500" : ""
                  } hover:bg-blue-300 px-4 py-2 rounded-lg`}
                  onClick={() => handleSetActiveLink("/dashboard/exams")}
                >
                  <PiExamFill className="inline" />
                  <span className="pl-4 align-middle">Exams</span>
                </Link>
              </div>
            </div>
          </div>
          {/* features */}
          <div className="my-4 mb-[5.8rem]">
            <Link
              to="/dashboard/features"
              className={`flex items-center gap-4 ${
                activeLink === "/dashboard/features" ? "bg-blue-500" : ""
              } hover:bg-blue-300 px-4  rounded-lg`}
              onClick={() => handleSetActiveLink("/dashboard/features")}
            >
              <RiBankLine /> Features
              <span className="px-[7px] text-black font-semibold bg-[#B9D7F1] text-xs rounded-lg">
                NEW
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay for mobile - closes sidebar when clicked */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
        ></div>
      )}
    </div>
  );
}

export default Sidebar;

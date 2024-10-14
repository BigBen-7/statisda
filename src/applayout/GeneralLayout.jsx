/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import DashboardNav from "../component/DashboardNav";

function GeneralLayout() {
  return (
    <div className="w-full font-kumbh text-sm">
      <div className="flex">
        <Sidebar />
        <main className=" w-full lg:ml-60 " >
          <DashboardNav />
          <div className="py-3 px-3 mt-4">
          <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default GeneralLayout;

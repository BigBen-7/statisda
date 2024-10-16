/* eslint-disable no-unused-vars */
import React from "react";
import { TiUser } from "react-icons/ti";
import { GiGraduateCap } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { IoIosArrowUp } from "react-icons/io";

function Dashboard() {
  return (
    <div className="text-[#4F4F4F] mt-20">
      {/* DASHBOARD HEADER */}
      <div className="font-semibold px-6 lg:px-24 text-2xl lg:text-4xl mb-2">
        <h1>Welcome to your dashboard, Udemy school</h1>
      </div>

      {/* DASHBOARD OPTIONS */}
      <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center px-4 lg:px-0">
        <div className="flex flex-col w-full lg:w-auto">
          {/* SCHOOL EMAIL div */}
          <div className="py-[.25rem] mb-2">
            <p className="font-semibold text-lg lg:text-xl">
              Uyo/school/@teachable.com
            </p>
          </div>

          {/* Add Admins */}
          <div className="mb-8">
            <div className="flex gap-2">
              <TiUser className="inline bg-[#EFF3FA] p-[3px] rounded-lg text-2xl lg:text-3xl text-[#13296A]" />
              <div className="ml-4">
                <h4 className="font-semibold text-xl lg:text-2xl mb-2">
                  Add other admins
                </h4>
                <p className="max-w-md font-normal text-sm">
                  Create rich course content and coaching products for your
                  students. When you give them a pricing plan, they’ll appear on
                  your site!
                </p>
              </div>
            </div>
          </div>

          {/* Add Classes */}
          <div className="mb-8">
            <div className="flex gap-2">
              <SiGoogleclassroom className="inline bg-[#EFF3FA] p-[3px] rounded-lg text-2xl lg:text-3xl text-[#13296A]" />
              <div className="ml-4">
                <h4 className="font-semibold text-xl lg:text-2xl mb-2">
                  Add Classes
                </h4>
                <p className="max-w-md font-normal text-sm">
                  Create rich course content and coaching products for your
                  students. When you give them a pricing plan, they’ll appear on
                  your site!
                </p>
              </div>
            </div>
          </div>

          {/* Add Students */}
          <div className="">
            <div className="flex gap-2">
              <GiGraduateCap className="inline bg-[#EFF3FA] p-[3px] rounded-lg text-2xl lg:text-3xl text-[#13296A]" />
              <div className="ml-4">
                <h4 className="font-semibold text-xl lg:text-2xl mb-2">
                  Add Students
                </h4>
                <p className="max-w-md font-normal text-sm">
                  Create rich course content and coaching products for your
                  students. When you give them a pricing plan, they’ll appear on
                  your site!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SUPPORT DIV */}
        <div className="flex flex-col items-end lg:h-[350px] justify-end mt-8 lg:mt-0">
          <p className="bg-[#152259] text-[#FCFAFA] rounded-full px-2 py-2 flex items-center">
            <BiSupport className="inline text-lg lg:text-xl" />
            <span className="pl-1 pr-4 align-middle">Support</span>
            <IoIosArrowUp className="inline text-lg lg:text-xl" />
          </p>
        </div>
      </div>
    </FadeInWrapper>
  );
}

export default Dashboard;

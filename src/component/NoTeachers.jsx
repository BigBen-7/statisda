/* eslint-disable no-unused-vars */
import React from "react";
import { BiSupport } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";

function NoTeachers() {
  return (
    <div>
      <div className="bg-[#FCFAFA] mt-4 w-full py-16 ">
        <div className="flex flex-col align-bottom">
          <div className="text-[#4F4F4F] text-center">
            <h2 className="text-[28px] font-semibold">
              No Teachers at this time
            </h2>
            <p className="mt-2 font-medium">
              Teachers will appear here after they enroll in your school.
            </p>
          </div>
        </div>
        <div className="flex items-end h-[300px] justify-end px-8">
        <p className="bg-[#152259] text-[#FCFAFA] rounded-full px-4 py-4">
          <BiSupport className="inline" />
          <span className=" pl-1 pr-4 align-middle">Support</span>
          <IoIosArrowUp className="inline" />
        </p>
      </div>
      </div>
    </div>
  );
}

export default NoTeachers;

/* eslint-disable no-unused-vars */
import React from "react";
import { BiSupport } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";
import sleepingKoala from "../assets/sleeping-Koala.svg"

function NoStudent() {
  return (
    <div>
      <div className="bg-[#FCFAFA] mt-4 w-full ">

        <div className="flex flex-col items-center">
            <div className="mb-12">
                <img src={sleepingKoala} alt="sleeping Koala" />
            </div>
          <div className="text-[#4F4F4F] text-center max-w-[952px]: ">
            <h2 className="md:text-2xl font-semibold">
              No Students at this time
            </h2>
            <p className="mt-2 font-medium ">
              Students will appear here after they enroll in your school.
            </p>
          </div>
        </div>
        <div className="flex items-end py-[40px] justify-end px-8">
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

export default NoStudent;

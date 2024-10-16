/* eslint-disable no-unused-vars */
import React from 'react';
import { FaUsers, FaClock, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { RxCounterClockwiseClock } from 'react-icons/rx';
import { FiFileText } from 'react-icons/fi';
import CountDownTimer from '../component/CountDownTimer';
import { ImHourGlass } from 'react-icons/im';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { GiInfo } from 'react-icons/gi';
import FadeInWrapper from 'src/ui/FadeInWrapper';

const Exams = () => {
  // const timerValue = "120:59"; // Timer value

  return (
    <FadeInWrapper className="">
      <div className="p-2 md:p-8">
        {/* Header */}
        <div className="flex justify-between border mb-4 bg-white p-3 md:p-4 rounded-md shadow-custom  max-w-[100%]">
          <h1 className="text-lg md:text-2xl font-semibold text-gray-700 w-72">
            Exams Monitor
          </h1>
          <p className="text-[10px] md:text-sm max-w-md: text-gray-400 font-medium">
            <RxCounterClockwiseClock className="inline" />
            <span className="align-middle"> Last Update: 7 minutes ago</span>
          </p>
        </div>

        {/* Exam Details */}
        <div className="bg-white rounded-lg w-full h-full  shadow-lg p-3 md:p-4 mb-6 shadow-custom">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div className="flex flex-col gap-4 items-center md:flex-row">
              {/* Timer */}
              <div className="relative w-24 h-24">
                <svg
                  className="absolute top-0 left-0 rounded-full w-full h-full"
                  viewBox="0 0 36 36"
                >
                  <path
                    className="text-gray-200"
                    fill="none"
                    strokeWidth="3"
                    stroke="currentColor"
                    strokeDasharray="100, 100"
                    d="M18 1 a 17 17 0 1 1 0 34 a 17 17 0 1 1 0 -34"
                  />
                  <path
                    className="text-blue-500"
                    fill="none"
                    strokeWidth="3"
                    stroke="currentColor"
                    strokeDasharray="75, 100" // Adjust for remaining time
                    d="M18 1 a 17 17 0 1 1 0 34 a 17 17 0 1 1 0 -34"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <CountDownTimer />
                </div>
              </div>

              {/* Exams Details */}
              <div>
                <h2 className="text-sm md:text-2xl text-gray-700 font-semibold">
                  Exam:
                  <span className="text-lg text-gray-700 font-light">
                    unit 6 final exam
                  </span>
                </h2>
                <p className="text-gray-500">Course: English SS 3</p>
                <p className="text-gray-500">20 Questions: All in one exam</p>
              </div>

              {/* close of div holding timer and eam to */}
            </div>
            {/* Time and date of paper */}
            <div className="text-right mt-4 md:mt-0">
              <p className="text-gray-500 py-3 font-semibold">
                21 Oct 2020 9:00 AM ➜ 12:00 AM
              </p>
              <p className="text-gray-500 font-semibold mb-2">
                <span className="border border-gray-400 p-1 rounded">
                  {' '}
                  <RxCounterClockwiseClock className="inline" />
                  30 Min
                </span>
                <span className="ml-2 p-1 border border-gray-400">
                  <FiFileText className="inline" /> 50 Marks
                </span>
              </p>
              <p className="text-gray-500 font-semibold">
                Allowed Delay: 10 Minutes
              </p>
            </div>
          </div>
          {/* Student Statistics Cards  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mt-6">
            <div className="bg-white border border-gray-400 p-4 rounded-lg shadow text-center">
              <FaUsers className="text-blue-500 text-3xl mx-auto mb-2" />
              <p className="text-gray-500">Total Students</p>
              <p className="text-2xl font-bold">400</p>
            </div>
            <div className="bg-white border border-gray-400 p-4 rounded-lg shadow text-center">
              <div className="bg-blue-300 flex items-center justify-center mx-auto w-10 h-10 rounded-full text-sm">
                <HiOutlineLightBulb className="text-2xl" />
              </div>
              <p className="text-gray-500">Total Active Students</p>
              <p className="text-2xl font-bold">365</p>
            </div>
            <div className="bg-white border border-gray-400 p-4 rounded-lg shadow text-center">
              <div className="bg-red-200 flex items-center justify-center mx-auto w-10 h-10 rounded-full text-sm">
                <GiInfo className="text-2xl" />
              </div>
              <p className="text-gray-500">Total Absent Students</p>
              <p className="text-2xl font-bold">35</p>
            </div>
            <div className="bg-white border border-gray-400 p-4 rounded-lg shadow text-center">
              <FaCheckCircle className="text-green-500 text-3xl mx-auto mb-2" />
              <p className="text-gray-500">Total Finished Students</p>
              <p className="text-2xl font-bold">352</p>
            </div>
            <div className="bg-white border border-gray-400 p-4 rounded-lg shadow text-center">
              <div className="bg-slate-300 flex items-center justify-center mx-auto w-10 h-10 rounded-full text-sm">
                <ImHourGlass className="text-lg" />
              </div>
              <p className="text-gray-500">Total Pending Students</p>
              <p className="text-2xl font-bold">13</p>
            </div>
          </div>
          ;
        </div>

        {/* Students Table */}
        <div className="bg-white rounded-lg shadow p-4">
          {/* Filters */}
          {/* <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
          <input
            type="text"
            placeholder="Search name or email"
            className="border rounded-lg p-2 w-full md:w-auto"
          />
          <select className="border rounded-lg p-2 w-full md:w-auto">
            <option>Status: all</option>
            <option>Finished</option>
            <option>Active</option>
            <option>Pending</option>
          </select>
          <input
            type="date"
            className="border rounded-lg p-2 w-full md:w-auto"
          />
          <input
            type="date"
            className="border rounded-lg p-2 w-full md:w-auto"
          />
        </div> */}

          {/* Table */}
          {/* Students Table */}
          <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
            <div className="">
              <p className="flex flex-col font-bold text-gray-700 text-lg">
                <span>Students</span>
                <span className="font-semibold  text-gray-400">
                  Showing Students
                </span>
              </p>
            </div>
            {/* Filters */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
              <input
                type="text"
                placeholder="Search name or email"
                className="border rounded-lg p-2 w-full md:w-1/4"
              />
              <select className="border rounded-lg p-2 w-full md:w-1/4">
                <option>Status: all</option>
                <option>Finished</option>
                <option>Active</option>
                <option>Pending</option>
              </select>
              <input
                type="date"
                className="border rounded-lg p-2 w-full md:w-1/4"
              />
              <input
                type="date"
                className="border rounded-lg p-2 w-full md:w-1/4"
              />
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead className="bg-gray-100">
                  <tr className="border-b">
                    <th className="py-2 px-4">Student Name</th>
                    <th className="py-2 px-4">Email</th>
                    <th className="py-2 px-4">Status</th>
                    <th className="py-2 px-4">Start Time</th>
                    <th className="py-2 px-4">Submit Time</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Example Row */}
                  <tr className="border-b">
                    <td className="py-2 px-4 flex items-center gap-2">
                      <img
                        src="https://randomuser.me/api/portraits/men/10.jpg"
                        alt="Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      Conan Matusov
                    </td>
                    <td className="py-2 px-4">herbert_rippin@lang.name</td>
                    <td className="py-2 px-4">
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm">
                        Finished
                      </span>
                    </td>
                    <td className="py-2 px-4">09 Nov 2019, 9:00 AM</td>
                    <td className="py-2 px-4">09 Nov 2019, 9:00 AM</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 flex items-center gap-2">
                      <img
                        src="https://randomuser.me/api/portraits/men/11.jpg"
                        alt="Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      Shinohara Ryoma
                    </td>
                    <td className="py-2 px-4">herbert_rippin@lang.name</td>
                    <td className="py-2 px-4">
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm">
                        Active
                      </span>
                    </td>
                    <td className="py-2 px-4">09 Nov 2019, 9:00 AM</td>
                    <td className="py-2 px-4">-</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 flex items-center gap-2">
                      <img
                        src="https://randomuser.me/api/portraits/men/12.jpg"
                        alt="Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      Conan Matusov
                    </td>
                    <td className="py-2 px-4">herbert_rippin@lang.name</td>
                    <td className="py-2 px-4">
                      <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-sm">
                        Pending
                      </span>
                    </td>
                    <td className="py-2 px-4">-</td>
                    <td className="py-2 px-4">-</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </FadeInWrapper>
  );
};

export default Exams;

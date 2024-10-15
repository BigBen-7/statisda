/* eslint-disable react/prop-types */
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function TeachersList({ teachers }) {
  const [searchTeacher, setSearchTeacher] = useState("");

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTeacher.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchTeacher.toLowerCase())
  );

  return (
    <div className=" lg:px-8">
      {/* SEARCH INPUT */}
      <div className="flex justify-center items-center px-4 gap-4">
        <div className="relative mt-2 rounded-md ">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            />
          </div>
          <input
            type="text"
            value={searchTeacher}
            onChange={(e) => setSearchTeacher(e.target.value)}
            placeholder="Search for a Teacher by name or email"
            className="block w-80 lg:w-96 rounded-r-md   py-3 pl-10 text-gray-900 bg-[#fcfafa] border-none  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#509CDB] sm:text-sm sm:leading-6 "
          />
        </div>
      </div>
      {/* SEARCH INPUT END */}

      <div className="mt-8">
        <div className="overflow-x-auto w-full">
          <div className="w-full py-2 align-middle lg:px-8">
          <table className="w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Subject
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Class
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Email Address
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Gender
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {filteredTeachers.length > 0 ? (
                filteredTeachers.map((teacher) => (
                  <tr key={teacher.email} className="even:bg-[#EBF6FF80]">
                    <td className="whitespace-nowrap  text-xs font-medium text-gray-900 sm:pl-3">
                      <Link
                        to={`/dashboard/teachers/${teacher.id}`}
                        className="flex items-center gap-3 py-4 pl-4 pr-3"
                      >
                        <img src={teacher.profilePhoto} alt={teacher.name} />
                        {teacher.name}
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {teacher.subject}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {teacher.class}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {teacher.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {teacher.gender}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-4 text-sm text-gray-500"
                  >
                    No Teachers found matching the search query.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}

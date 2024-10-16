/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai"; 
import { GiGraduateCap } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import Avatar from "../ui/Avatar";

export default function StudentDetails({ student, onClose }) {
  // Return null if no student data is provided
  if (!student) {
    return null;
  }

  const { classmates = [] } = student; // Safeguard against undefined classmates

  return (
    <div className="fixed right-0 top-0 w-80 md:w-1/4 h-full flex flex-col  justify-center  bg-white border-l border-gray-300 shadow-lg p-6 overflow-y-auto transform transition-transform duration-500 ease-in-out mt-10">
      {/* Close Button */}
      <div className="flex justify-end">
        <button onClick={onClose} className="text-gray-600 hover:text-red-600">
            {console.log("clicked")}
          <AiOutlineClose size={24} />
        </button>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col gap-2 items-center mb-6 ">
          <p className="text-lg font-medium text-gray-700">{student.studentId}</p>
        <img
          src={student.profilePhoto}
          alt={student.name}
          className="rounded-full w-32 h-32 object-cover border border-gray-200 mb-4"
        />
        <h2 className="text-2xl font-bold text-center">{student.name}</h2>
        <p className="text-sm text-gray-500">{student.class} student</p>
      </div>

      {/* Contact Icons */}
      <div className="flex justify-center mb-6 space-x-4">
      <button className="p-2 text-xl bg-gray-100 rounded-md">
          <GiGraduateCap  />
        </button>
        <button className="p-2 text-xl bg-gray-100 rounded-md">
          <FiPhoneCall />
        </button>
        <button className="p-2 text-xl bg-gray-100 rounded-md">
          <HiOutlineMail />
        </button>
      </div>

      {/* About Section */}
      <div className="mb-6">
        <h3 className="font-bold text-lg text-gray-700">About</h3>
        <p className="max-w-md text-gray-500 font-medium p-[.25rem]">{student.about}</p>
        <p className="text-sm mt-1">Age: <strong className="text-gray-500">{student.age || "N/A"}</strong></p>
        <p className="text-sm">Gender: <strong className="text-gray-500">{student.gender}</strong></p>
      </div>

      {/* Classmates Section */}
      <div>
        <h3 className="font-bold text-lg text-gray-700">People from the same class</h3>
        <Avatar/>
        <div className="flex mt-2">
          {classmates.slice(0, 4).map((classmate) => (
            <img
              key={classmate.id}
              src={classmate.profilePhoto}
              alt={classmate.name}
              className="w-10 h-10 rounded-full border border-gray-300 mr-2"
            />
          ))}
          {classmates.length > 4 && (
            <p className="text-sm text-blue-500">+{classmates.length - 4} more</p>
          )}
        </div>
      </div>
    </div>
  );
}

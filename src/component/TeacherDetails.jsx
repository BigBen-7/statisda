import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";
import { PiGraduationCapLight } from "react-icons/pi";
import Avatar from "../ui/Avatar";
import schoolData from "../data/db.js"
import { FaLongArrowAltLeft } from "react-icons/fa";

const icons = [PiGraduationCapLight, FiPhoneCall, HiOutlineEnvelope];

const TeacherDetail = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    if (schoolData && schoolData.teachers) {
      setTeachers(schoolData.teachers);
    } else {
      alert("No teacher data found");
    }
  }, []);
  const { id } = useParams();
  const ID = Number(id);


  if (!ID) {
    return <div>Teacher not found</div>; // Handle case where teacher is not found
  }
  return (
    <div className="p-6">
      <Link to="/dashboard/teachers" ><FaLongArrowAltLeft/></Link>
  {teachers
    .filter((teacher) => teacher.id === ID)
    .map((teacherdetails) => (
      <div
        key={teacherdetails.id}
        className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-28"
      >
        {/* TEACHER CONTACT DETAILS */}
        <div className="flex flex-col items-center space-y-4 lg:space-y-8">
          <img
            src={teacherdetails.profilePhoto}
            alt={teacherdetails.name}
            className="w-32 sm:w-48 lg:w-72 rounded-full"
          />
          <h1 className="text-xl sm:text-2xl font-bold">{teacherdetails.name}</h1>
          <p className="text-sm sm:text-base">
            <strong>Subject:</strong> {teacherdetails.subject}
          </p>
          <div className="flex gap-4 sm:gap-6 lg:gap-8 text-xl sm:text-2xl lg:text-3xl">
            {icons.map((Icon, index) => (
              <div
                className="bg-[#EFF3FA] py-2 sm:py-3 px-2 sm:px-3 rounded-md"
                key={index}
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT TEACHER */}
        <div className="space-y-6 lg:space-y-12  lg:text-left">
          <p className="font-semibold text-base sm:text-lg lg:text-xl text-[#1A1A1A]">
            <strong>About:</strong>
          </p>
          <p className="max-w-md text-sm sm:text-base text-[#A7A7A7] font-medium">
            {teacherdetails.name} {teacherdetails.about}
          </p>
          <div className="flex  sm:flex-row justify-around w-full max-w-xs lg:max-w-72 gap-4">
            <p className="flex flex-col gap-2">
              <span className="text-[#1A1A1A]">Age</span>
              <span className="text-[#A7A7A7]">{teacherdetails.age}</span>
            </p>
            <p className="flex flex-col gap-2">
              <span className="text-[#1A1A1A]">
                <strong>Gender:</strong>
              </span>
              <span className="text-[#A7A7A7]">{teacherdetails.gender}</span>
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-3">
            <span className="font-semibold text-sm sm:text-base">
              Teachers from the same class
            </span>
            <div className="inline-flex items-center gap-2">
              <Avatar />
              <span className="text-[#73B0E2] font-medium">+12 more</span>
            </div>
          </div>
        </div>
      </div>
    ))}
</div>

  );
};

export default TeacherDetail;

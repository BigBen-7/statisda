/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";
import { PiGraduationCapLight } from "react-icons/pi";
import Avatar from "../ui/Avatar";
import schoolData from "../data/db.js"

const icons = [PiGraduationCapLight, FiPhoneCall, HiOutlineEnvelope];

const TeacherDetail = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    if (schoolData && schoolData.teachers) {
      setTeachers(schoolData.teachers);
    } else {
      console.error("No teacher data found");
    }
  }, []);
  console.log(teachers);

  const params = useParams();
  console.log(params);
  const { id } = useParams();
  const ID = Number(id);
  console.log(ID);

  if (!ID) {
    return <div>Teacher not found</div>; // Handle case where teacher is not found
  }
  const filtered = teachers.filter((teacher) => teacher.id === ID);
  console.log(filtered);
  return (
    <div className="p-6">
    {teachers
      .filter((teacher) => teacher.id === ID)
      .map((teacherdetails) => (
        <div
          key={teacherdetails.id}
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-28"
        >
          {/* TEACHER CONTACT DETAILS */}
          <div className="flex flex-col items-center space-y-8">
            <img
              src={teacherdetails.profilePhoto}
              alt={teacherdetails.name}
              className="w-48 md:w-60 lg:w-72 rounded-full"
            />
            <h1 className="text-xl md:text-2xl font-bold text-center lg:text-left">
              {teacherdetails.name}
            </h1>
            <p className="text-sm md:text-base text-center lg:text-left">
              <strong>Subject:</strong> {teacherdetails.subject}
            </p>
            <div className="flex gap-4 md:gap-6 lg:gap-8 text-2xl md:text-3xl">
              {icons.map((Icon, index) => (
                <div
                  className="bg-[#EFF3FA] py-2 px-2 md:py-3 md:px-3 rounded-md"
                  key={index}
                >
                  <Icon />
                </div>
              ))}
            </div>
          </div>
  
          {/* ABOUT TEACHER */}
          <div className="space-y-6 md:space-y-8 lg:space-y-12">
            <p className="font-semibold text-[0.9rem] md:text-[1rem] text-[#1A1A1A]">
              <strong>About:</strong>
            </p>
            <p className="text-sm md:text-base max-w-full md:max-w-lg text-[#A7A7A7] font-medium">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
              cillum dolor. Voluptate exercitation incididunt aliquip deserunt
              reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure.
              Laborum magna nulla duis ullamco cillum dolor. Voluptate
              exercitation incididunt aliquip deserunt reprehenderit elit
              laborum.
            </p>
            <div className="flex flex-wrap gap-4 w-full max-w-full">
              <p className="flex flex-col gap-2">
                <span className="text-[#1A1A1A]">Age</span>
                <span className="text-[#A7A7A7]">34</span>
              </p>
              <p className="flex flex-col gap-2">
                <span className="text-[#1A1A1A]">
                  <strong>Gender:</strong>
                </span>
                <span className="text-[#A7A7A7]">{teacherdetails.gender}</span>
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <span className="font-semibold text-base">Teachers from the same class</span>
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

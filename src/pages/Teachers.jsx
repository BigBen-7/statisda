/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import NoTeachers from "../component/NoTeachers";
import TeacherModal from "../component/TeacherModal";
import TeachersList from "../component/TeachersList";
import schoolData from "../data/db.js";

function Teachers() {
  const [open, setOpen] = useState(false);
  const [teachers, setTeachers] = useState(schoolData.teachers);

  useEffect(() => {
    console.log(schoolData); // Log the JSON data to ensure it's imported
    if (schoolData && schoolData.teachers) {
      setTeachers(schoolData.teachers);
    } else {
      console.error("No teacher data found");
    }
  }, []);

  return (
    <div className="mt-1">
      <div className="mx-auto max-w-7xl px-10 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center  py-2  lg:px-6">
          {/* Teachers Heading */}
          <div className="text-[#4F4F4F] font-sm">
            <h3 className="text-lg lg:text-xl">Teachers</h3>
          </div>

          {/* Export CSV and Add Teacher Button */}
          <div className="flex  items-center gap-4">
            {/* Export CSV */}
            <p className="hidden lg:block text-[#2671B1] font-semibold text-sm lg:text-base">
              Export CSV
            </p>

            {/* Add Teacher Button */}
            <button
              className="bg-[#509CDB] rounded-md px-2 md:px-6 lg:px-10 py-[5px] md:py-3 font-semibold text-white text-xs"
              onClick={() => setOpen(true)}
            >
              Add Teacher
            </button>
          </div>
        </div>

        <TeacherModal open={open} setOpen={setOpen} />

        {/* Render TeachersList if there are teachers, else show NoTeachers */}
        {teachers.length > 0 ? (
          <TeachersList teachers={teachers} />
        ) : (
          <NoTeachers />
        )}
      </div>
    </div>
  );
}

export default Teachers;

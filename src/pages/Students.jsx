import { useEffect, useState } from "react";
import NoStudent from "../component/NoStudent";
import StudentModal from "../component/StudentModal";
import StudentsList from "../component/StudentsList";
import schoolData from "../data/db.js";
import FadeInWrapper from "../../src/ui/FadeInWrapper";

function Students() {
  const [open, setOpen] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    if (schoolData && schoolData.students) {
      setStudents(schoolData.students);
    } else {
     alert("No Students data found");
    }
  }, []);

  // Function to add a new student
  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <FadeInWrapper className="">
      <div className="">
        <div className="">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="text-[#4F4F4F] font-medium">
              <h3>Students</h3>
            </div>

            <div className="inline-flex items-center gap-4">
              <p className="text-[#2671B1] font-semibold text-sm">Export CSV</p>
              <button
                className="bg-[#509CDB] rounded-md px-2 md:px-6 lg:px-10 py-[5px] md:py-3 font-semibold text-white text-xs"
                onClick={() => setOpen(true)}
              >
                Add Students
              </button>
            </div>
          </div>

          {/* Modal for adding students */}
          <StudentModal open={open} setOpen={setOpen} addStudent={addStudent} />

          {/* Show either the student list or the 'NoStudent' message */}
          {students.length === 0 ? (
            <NoStudent />
          ) : (
            <StudentsList students={students} />
          )}
        </div>
      </div>
    </FadeInWrapper>
  );
}

export default Students;

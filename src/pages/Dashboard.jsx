// import AttendanceChart from '../component/AttendanceChart'
import StatsCard from "../component/StatsCard";
import ExamSchedule from "../component/ExamSchedule";
import AttendanceChart from "../component/AttendanceChart";
import TaskList from "../component/TaskList";
import ClassSchedule from "../component/ClassSchedule";
import GenderPieChart from "../component/GenderPieChart";
import FadeInWrapper from "../ui/FadeInWrapper";

function Dashboard() {
  return (
    <FadeInWrapper className="">
      {/* <nav className="bg-white shadow ">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold">School Dashboard</div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-lg px-4 py-2"
            />
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </nav> */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        <div className="mt-6">
          <StatsCard />
          <AttendanceChart />
          <ExamSchedule />
          <TaskList />
        </div>
        <div className="mt-6 ">
          <ClassSchedule />
          <GenderPieChart />
        </div>
      </div>
    </FadeInWrapper>
  );
}

export default Dashboard;

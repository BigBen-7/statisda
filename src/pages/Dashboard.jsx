// import AttendanceChart from '../component/AttendanceChart'
import StatsCard from '../component/StatsCard';
import ExamSchedule from '../component/ExamSchedule';
import AttendanceChart from '../component/AttendanceChart';
import TaskList from '../component/TaskList';
import ClassSchedule from '../component/ClassSchedule';
import GenderPieChart from '../component/GenderPieChart';
import FadeInWrapper from '../../src/ui/FadeInWrapper';

function Dashboard() {
  return (
    <FadeInWrapper className="">
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
        
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

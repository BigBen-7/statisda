import { FaUserGraduate, FaChalkboardTeacher, FaUserTie } from 'react-icons/fa';

// Props for each Stat Card
const statsData = [
  { title: "Total Students", value: "3350", icon: <FaUserGraduate />, color: "bg-blue-100" },
  { title: "Total Instructors", value: "165", icon: <FaChalkboardTeacher />, color: "bg-green-100" },
  { title: "Total Employees", value: "410", icon: <FaUserTie />, color: "bg-yellow-100" }
];

const StatsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className={`flex items-center p-4 rounded-lg shadow ${stat.color} transition-transform transform hover:scale-105`}
        >
          <div className="w-12 h-12 rounded-full flex justify-center items-center text-2xl">
            {stat.icon}
          </div>
          <div className="ml-4">
            <p className="text-lg font-semibold text-gray-700">{stat.title}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;

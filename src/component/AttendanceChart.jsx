import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", present: 200, absent: 50 },
  { name: "Feb", present: 180, absent: 70 },
  { name: "Mar", present: 220, absent: 30 },
  { name: "Apr", present: 240, absent: 60 },
  { name: "May", present: 210, absent: 40 },
  { name: "Jun", present: 230, absent: 20 },
];

const AttendanceChart = () => {
  return (
    <div className="py-6 w-full ">
    <div className="bg-white border-[2px] border-gray-100 shadow-custom rounded-lg p-4">
      <h4 className="text-gray-700 font-semibold mb-4">Attendance</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="present" fill="#4A90E2" />
          <Bar dataKey="absent" fill="#FF0000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default AttendanceChart;

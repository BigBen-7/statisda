import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const AttendanceCard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Last 6 months");
  const [selectedClass, setSelectedClass] = useState("Class 10");

  // Simulate data for different classes and periods
  const classData = {
    "Class 10": [
      { name: "Jan", present: 200, absent: 50 },
      { name: "Feb", present: 220, absent: 60 },
      { name: "Mar", present: 250, absent: 20 },
      { name: "Apr", present: 230, absent: 50 },
      { name: "May", present: 250, absent: 30 },
      { name: "Jun", present: 180, absent: 70 },
    ],
    "Class 9": [
      { name: "Jan", present: 180, absent: 70 },
      { name: "Feb", present: 190, absent: 60 },
      { name: "Mar", present: 210, absent: 40 },
      { name: "Apr", present: 200, absent: 60 },
      { name: "May", present: 220, absent: 40 },
      { name: "Jun", present: 170, absent: 80 },
    ],
    "Class 8": [
      { name: "Jan", present: 160, absent: 90 },
      { name: "Feb", present: 170, absent: 80 },
      { name: "Mar", present: 200, absent: 50 },
      { name: "Apr", present: 190, absent: 70 },
      { name: "May", present: 210, absent: 60 },
      { name: "Jun", present: 150, absent: 100 },
    ],
  };

  // Filter data based on the selected period
  const getFilteredData = () => {
    let data = classData[selectedClass];

    switch (selectedPeriod) {
      case "Last 6 months":
        return data.slice(0, 6);
      case "Last 3 months":
        return data.slice(3, 6);
      case "Last 12 months":
        // Simulate 12-month data (this is just an example)
        return [
          ...data,
          { name: "Jul", present: 190, absent: 60 },
          { name: "Aug", present: 200, absent: 50 },
        ];
      default:
        return data;
    }
  };

  const filteredData = getFilteredData();

  return (
    <div className="py-6">
      <div className="bg-white border-[2px] border-gray-100 shadow-custom rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-gray-700 font-semibold">Attendance</h4>
          <div className="flex space-x-4">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="border border-gray-300 rounded-md p-2 text-gray-700 w-full md:w-auto"
              >
                <option>Last 6 months</option>
                <option>Last 12 months</option>
                <option>Last 3 months</option>
              </select>

              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="border border-gray-300 rounded-md p-2 text-gray-700 w-full md:w-auto"
              >
                <option>Class 10</option>
                <option>Class 9</option>
                <option>Class 8</option>
              </select>
            </div>cv 
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={filteredData} label={true}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Bar dataKey="present" fill="#1A73E8" name="Present" />
            <Bar dataKey="absent" fill="#A3A3FF" name="Absent" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceCard;

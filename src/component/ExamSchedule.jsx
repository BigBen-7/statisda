import { BsThreeDots } from "react-icons/bs";

const ExamSchedule = () => {
    const exams = [
      { subject: 'Math', class: 'Class 7', date: '6 April', time: '10:30 am' },
      { subject: 'Physics', class: 'Class 9', date: '12 April', time: '10:30 am' },
      { subject: 'Chemistry', class: 'Class 8', date: '10 April', time: '10:30 am' },
    ];
  
    return (
        <div className=" py-6">
      <div className="bg-white  border-[2px] border-gray-100  shadow-custom rounded-lg p-4 ">
        <h4 className="text-gray-700 font-semibold mb-4 flex items-center justify-between">
          <span className="font-bold text-black text-lg">Exam Schedule</span>
          <span>See All</span>
        </h4>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-950">
              <th className="py-2">Subject</th>
              <th>Classes</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 text-black font-bold">{exam.subject}</td>
                <td className="text-gray-400">{exam.class}</td>
                <td className="text-black font-bold">{exam.date}</td>
                <td className="text-gray-400">{exam.time}</td>
                <td><BsThreeDots/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    );
  };
  
  export default ExamSchedule;
  
import { FaLongArrowAltRight } from "react-icons/fa";

const ClassSchedule = () => {
  const classes = [
    { subject: 'Physics', chapter: 'Chapter 1', time: '09:10 PM - 10:10 PM' },
    { subject: 'Chemistry', chapter: 'Chapter 10', time: '09:10 PM - 10:10 PM' },
    { subject: 'Biology', chapter: 'Chapter 7', time: '09:10 PM - 10:10 PM' },
    { subject: 'Geology', chapter: 'Chapter 8', time: '09:10 PM - 10:10 PM' },
    { subject: 'History', chapter: 'Chapter 9', time: '09:10 PM - 10:10 PM' },
    { subject: 'Math', chapter: 'Chapter 5', time: '09:10 PM - 10:10 PM' },
  ];

  return (
    <div className="bg-white  border-[2px] border-gray-100  shadow-custom rounded-lg p-4">
      <h4 className="text-gray-700 font-semibold mb-4">Today Class Schedule</h4>
      <ul className="space-y-2">
        {classes.map((cls, index) => (
          <li key={index} className="flex  border-[2px] border-gray-100 p-3 rounded-lg pb-2">
            <div>
              <h5 className="font-semibold">{cls.subject}</h5>
              <p className="text-sm text-gray-500">{cls.chapter} <span ><FaLongArrowAltRight className="inline" /></span> <span className="text-gray-500 text-sm align-middle">{cls.time}</span></p>
            </div>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassSchedule;

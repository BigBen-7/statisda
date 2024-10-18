const TaskList = () => {
    const tasks = [
      { name: 'Eva Moree', subject: 'Chemistry', deadline: '4 May 10:15 PM', dailyTask: 'Chapter 10', status: 'Submitted' },
      { name: 'Angela Jolly', subject: 'Biology', deadline: '7 June 10:15 PM',  dailyTask: 'Chapter 3', status: 'Submitted' },
      { name: 'Ben Tom', subject: 'Math', deadline: '6 July 10:15 PM', dailyTask: 'Chapter 13', status: 'Pending' },
    ];
  
    return (
      <div className="bg-white  border-[2px] border-gray-100 shadow-custom rounded-lg p-4">
         <h4 className="text-gray-700 font-semibold mb-4 flex items-center justify-between">
          <span className="font-bold text-black text-lg">Task</span>
          <span>See All</span>
        </h4>
        {/* Add overflow-x-auto to make the table scrollable on smaller screens */}
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[600px]"> {/* Ensure a minimum width to maintain spacing */}
            <thead>
              <tr className="text-gray-500">
                <th className="py-2">Name</th>
                <th>Subject</th>
                <th>Deadline</th>
                <th>Daily Task</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2">{task.name}</td>
                  <td>{task.subject}</td>
                  <td>{task.deadline}</td>
                  <td>{task.dailyTask}</td>
                  <td>
                    <span
                      className={`px-3 rounded-full text-xs ${
                        task.status === 'Submitted'
                          ? 'bg-green-100 text-green-400'
                          : 'bg-orange-100 text-orange-300'
                      }`}
                    >
                      {task.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default TaskList;
  
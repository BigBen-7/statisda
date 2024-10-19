import { useLocation } from "react-router-dom";
// import cody from "../assets/codyF.svg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiMessageAltAdd } from "react-icons/bi";

function DashboardNav() {
  const location = useLocation();

  const checkLocation = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className="bg-[#FCFAFA] p-4 w-full  shadow-md">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section (Message) */}
        <div className="text-[#424242] text-center lg:text-left mb-4 lg:mb-0">
          {checkLocation("/dashboard") && (
            <nav className="bg-white shadow-md p-4 flex items-center justify-between">
              {/* Search Bar */}
              <div className="flex-grow mx-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* User Profile Section */}
              <div className="flex gap-2 items-center">
                <IoIosNotificationsOutline />
                <BiMessageAltAdd />
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium">Emma Georgina</p>
                </div>
              </div>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;

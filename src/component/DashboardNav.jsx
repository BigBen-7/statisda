import { useLocation } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";

function DashboardNav() {
  const location = useLocation();

  const checkLocation = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className="bg-[#FCFAFA] p-4 w-full sm:w-[100%] shadow-custom  fixed  shadow z-10  ">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section (Message) */}
        <div className="text-[#424242] text-center lg:text-left mb-4 lg:mb-0">
          {checkLocation("/dashboard") && (
            <p className="flex flex-col">
              <span>Learn how to launch faster</span>
              <span>
                Watch our webinar for tips from our experts and get a limited
                time offer.
              </span>
            </p>
          )}
        </div>

        {/* Right Section (Notification and Logout) */}
        <div className="flex items-center">
          <span className="pr-4 lg:pr-8">
            <IoIosNotificationsOutline className="text-xl" />
          </span>
          <button className="px-4 py-2 text-white font-semibold bg-[#509CDB] text-xs rounded-lg">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;

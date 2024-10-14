import dots from "../assets/dots.svg";
import cardImg1 from "../assets/slackimg1.png";
import cardImg2 from "../assets/slackimg2.png";
import cardImg3 from "../assets/slackimg3.png";
import calender from "../assets/calender.svg";
import comp1 from "../assets/company1.svg";
import comp2 from "../assets/company2.svg";
import comp3 from "../assets/company3.svg";
import comp4 from "../assets/company4.svg";
import mobile from "../assets/handPhone.svg";
import customer from "../assets/customer.svg";
import user from "../assets/user.svg";
import keyboard from "../assets/keyboard.jpg";
import Example from "./PricingCards";
import Footer from "./Footer";

const companies = [
  { src: comp1, alt: "company logo 1" },
  { src: comp2, alt: "company logo 2" },
  { src: comp3, alt: "company logo 3" },
  { src: comp2, alt: "company logo 2" },
  { src: comp4, alt: "company logo 4" },
  { src: comp3, alt: "company logo 3" },
];

const Features = () => {
  return (
    <section className="">
      <div className="mt-0 md:mt-10">
        <h1 className="font-[700] text-[1.89rem] px-8 text-center ">
          Trusted by company like
        </h1>
        <div className="flex justify-center items-center p-6 gap-8 sm:gap-6 md:gap-10 lg:gap-20 flex-wrap">
          {companies.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className={`w-[6%] sm:w-[30px] md:w-[40px] lg:w-[50px]`}
            />
          ))}
        </div>
      </div>
      {/* SLACK INTEGRATION CARD */}
      <div className="py-8 font-kumbh md:py-12 md:mt-16 flex flex-col lg:flex-row justify-center gap-12">
        {/* Left Side - Task Cards */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Task Card */}
            {[1, 2, 3, 4].map((task, index) => (
              <div
                key={index}
                className="border border-gray-200 shadow-md rounded-lg p-4 sm:p-6 space-y-3"
              >
                <div className="flex font-kumbh justify-between items-center">
                  <h3 className="font-bold text-[16px] sm:text-[18px] text-[#1E2024]">
                    Slack integration
                  </h3>
                  <img
                    src={dots}
                    alt="dots"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </div>
                <p className="text-[.75rem] sm:text-[.875rem] font-[400] text-[#BDBDBD]">
                  Statisda is a school management solution that offers a
                  personalized portal to each type of user.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[.7rem] sm:text-[.75rem] font-[500] text-[#D89925] bg-[#FFF9EB] rounded-full p-[4px]">
                    Development
                  </span>
                  <div className="flex items-center">
                    <img
                      src={cardImg1}
                      alt="avatar"
                      className="w-6 h-6 rounded-full -ml-2"
                    />
                    <img
                      src={cardImg2}
                      alt="avatar"
                      className="w-6 h-6 rounded-full -ml-2"
                    />
                    <img
                      src={cardImg3}
                      alt="avatar"
                      className="w-6 h-6 rounded-full -ml-2"
                    />
                  </div>
                </div>
                <hr className="w-full" />
                <div className="flex justify-between items-center text-gray-400 text-xs sm:text-sm">
                  <span>14</span>
                  <div className="flex items-center gap-2">
                    <img
                      src={calender}
                      alt="calendar-icon"
                      className="w-4 h-4"
                    />
                    <span>7 Feb 2022</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Create Task Form */}
        <div className="w-full lg:w-1/3 px-4 sm:px-6 lg:px-0 ">
          <div className="bg-white border border-gray-200  shadow-md rounded-lg py-12 sm:py-16 p-4 sm:p-6 lg:p-8 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-center lg:text-left">
              Create your task
            </h3>
            <p className="text-gray-400 text-[.875rem] font-[400] leading-[17.36px] text-center lg:text-left">
              Statisda is a school management solution that offers a
              personalized portal to each type of user.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Create your task"
                className="w-full h-[50px] sm:h-[60px] border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-600"
              />

              <input
                type="text"
                placeholder="Create your task"
                className="w-full h-[50px] sm:h-[60px] border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-600"
              />
            </form>

            <div className="w-full p-4 sm:p-6 bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 lg:text-left">
              <h3 className="text-center">
                {" "}
                Manage the task easily and clearly
              </h3>
              <p className="text-xs py-4">
                Statisda increases communication between administrators,
                teachers, and students. Each portal is personalized to fit the
                needs of each user, ensuring ease of access and management.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hand holding phone section  */}
      <div className="flex flex-col lg:flex-row items-center justify-center font-kumbh lg:gap-20 gap-12 px-4 py-16 lg:px-32">
        {/* Left Side */}
        <div className="lg:text-left max-w-lg">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-[600] leading-tight text-[#1E2024] mb-4">
            Effortlessly manage your team&apos;s workflow.
          </h2>
          <div className="text-[#667085] leading-relaxed text-[16px] sm:text-[18px] font-[400] mb-6">
            <p>
              Easily keep track of your team&apos;s progress and tasks with our
              intuitive platform. Streamline communication and task delegation,
              ensuring everyone stays on the same page.
            </p>
            <br />
            <p>
              Whether you&apos;re leading a small team or managing multiple
              departments, our solution simplifies task management and enhances
              collaboration.
            </p>
          </div>
          <div className="flex items-center justify-start gap-2">
            {/* Icon and Statistic */}
            <img
              src={user}
              alt="User Icon"
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <div>
              <span className="text-[24px] sm:text-[28px] md:text-[32px] font-[600] leading-tight text-[#1E2024]">
                80,000K
              </span>
              <p className="text-[12px] sm:text-[14px] font-[400] leading-relaxed text-[#BDBDBD]">
                Dedicated users.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center items-center w-full lg:w-auto">
          <img
            src={mobile}
            alt="Hand holding phone"
            className="w-64 lg:w-auto relative left-10 md:20"
          />
        </div>
      </div>

      {/* PRICING CARDS SECTION  */}
      <section>
        {/* PRICING CARDS */}
        <Example />
      </section>

      {/* CUSTOMER PRICE OPTION SECTION */}
      <section className="font-kumbh">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-2 lg:gap-80  items-center px-4 text-center lg:text-right py-12">
          <h3 className="text-[40px] leading-[49.61px] font-[600] max-w-md text-[#101828]">
            Interesting option from a customer
          </h3>
          <p className="text-[#667085] text-[1.25rem] text-center md:text-left font-[400] leading-[1.9744rem] max-w-md">
            Our client, InfinityByte, found great success with our Standard
            Plan. Learn how they optimized their team management with our
            affordable pricing structure.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-6 md:gap-8 lg:gap-28  bg-[#0B0641]  rounded-[.5rem] p-10">
          {/* Customer Image */}
          <div className="">
            <img
              src={customer}
              alt="Customer"
              className="rounded-lg object-cover shadow-lg w-full h-auto"
            />
          </div>

          {/* Pricing Section */}
          <div className=" flex flex-col items-start justify-center space-y-12">
            <span className="bg-white text-blue-600 px-3  p-[.6rem] rounded-[.5rem] text-[1rem] font-[600]">
              Standard
            </span>
            <p className="text-white text-[18px]  max-w-sm">
              A reliable plan for small teams to manage tasks efficiently.
            </p>
            <span className="text-gray-400 text-sm">
              <span className="text-[40px] text-white weight-[600] leading-[3.1006rem]">
                $15
              </span>
              /Month
            </span>
            <div className="mx-auto">
              <button
                type="button"
                className="mt-6 px-16 md:px-32 rounded-[.5625rem] bg-[#1777F7] text-white py-2 hover:bg-blue-600 transition-all"
              >
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="font-kumbh">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={keyboard}
                alt="Customer Product"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-left md:text-left space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-black">
                Interesting option from customer
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Explore a wide range of customer-driven options tailored to meet
                your unique needs. Each solution is designed with flexibility
                and ease of use, ensuring a seamless experience that keeps your
                business ahead.
              </p>
              <button className="px-6 py-2  bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                Choose
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <Footer />
    </section>
  );
};

export default Features;

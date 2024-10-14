import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/statisda-logo.svg";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Pricing", to: "/pricing" },
    { name: "Use Cases", to: "/use-cases" },
    { name: "FAQ", to: "/faq" },
    { name: "Company", to: "/company" },
  ];

  // Handler to prevent navigation
  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent the navigation from happening
    setIsOpen(false); // Optionally close the mobile menu
  };

  return (
    <nav className="font-kumbh ">
      <div className="w-full flex items-center justify-between px-5 py-4 md:px-4 mx-auto max-w-[1240px]">
        {/* <div className="container  mx-auto  flex justify-between items-center max-w-screen-xl"> */}
        <div className="font-bold text-xl">
          <Link to="/" onClick={handleLinkClick}>
            <img src={logo} alt="logo" className="h-8" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden  md:flex space-x-6 text-[14px] font-[400] leading-[14.0304px] text-[#fff]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={handleLinkClick}
              className="block mb-4"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <Link to="/signup">
            <Button
              label="Login"
              bgColor="bg-[#0A92DD]"
              textColor="text-white"
              hoverBgColor="bg-indigo-500"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sliding Menu */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-black bg-opacity-60 backdrop-blur-md text-white z-50 p-8 transform transition-transform duration-300 ease-in-out">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white focus:outline-none mb-4 "
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          {/* Mobile Menu Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={handleLinkClick}
              className="block mb-4"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/signup">
            <Button
              label="Login"
              bgColor="bg-[#0A92DD]"
              textColor="text-white"
              hoverBgColor="bg-indigo-500"
              onClick={() => setIsOpen(false)}
            />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

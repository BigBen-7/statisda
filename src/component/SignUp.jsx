import { Link, useNavigate } from "react-router-dom";
import {
  setSchoolDetails,
  setPassword,
  createAccount,
} from "@store/accountSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import FormInput from "../ui/FormInputs";
import Stepper from "./Stepper"; // Stepper is separated here
import { FaPlus } from "react-icons/fa";
import Loader from "../ui/Loader";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    schoolName: "",
    email: "",
    password: "",
    confirmPassword: "",
    teamEmails: "",
    schoolAddress: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const [errors, setErrors] = useState({}); // State to hold validation errors

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle form data change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Reset error on change
  };

  // Validate form fields and return errors object
  const validate = () => {
    let newErrors = {};
    if (currentStep === 1) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.schoolName)
        newErrors.schoolName = "School name is required";
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Enter a valid email";
    } else if (currentStep === 2) {
      if (!formData.password) newErrors.password = "Password is required";
      if (formData.password.length < 6)
        newErrors.password = "Password must be at least 6 characters";
      if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords must match";
    }
    return newErrors;
  };

  // Handle the next button click and validation for each step
  const handleNext = (e) => {
    e.preventDefault();
    const validationErrors = validate(); // Validate current step
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
    } else {
      if (currentStep === 1) {
        dispatch(
          setSchoolDetails({
            name: formData.name,
            schoolName: formData.schoolName,
            email: formData.email,
          })
        );

        setCurrentStep(2);
      } else if (currentStep === 2) {
        dispatch(
          setPassword({
            password: formData.password,
            confirmPassword: formData.confirmPassword,
          })
        );

        setCurrentStep(3);
      } else if (currentStep === 3) {
        setCurrentStep(4);
      } else if (currentStep === 4) {
        console.log(formData)
        setIsSubmitting(true);
        setTimeout(() => {
          dispatch(createAccount());
          navigate("/dashboard");
        }, 2000);

      }
    }
  };

  // Handle the previous button click
  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      {isLoading || isSubmitting ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : (
        <div className="flex justify-center flex-col gap-8 items-center h-screen font-kumbh px-4">
          {/* Page Header */}
          <div className="SIGNUP-HEADER">
            <h2 className="text-2xl md:text-4xl font-[600] text-[#4F4F4F] text-center">
              {currentStep === 1
                ? "Welcome, create your school account"
                : currentStep === 2
                ? "Choose your password"
                : currentStep === 3
                ? "Invite your team"
                : "Upload  documents"}
            </h2>
          </div>

          {/* Form Container */}
          <div className="bg-white shadow-custom p-4 md:p-8 w-full md:w-[512px]">
            {/* <div className="text-center">
              <p className="w-full md:w-[238px] mx-auto py-4 text-[#667085] leading-[1.5625rem] font-[500] font-inter ">
                {currentStep === 1
                  ? "It is our great pleasure to have you on board!"
                  : currentStep === 2
                  ? "Please create a secure password."
                  : currentStep === 3
                  ? "Let’s invite your team members!"
                  : "Almost there! Upload your documents."}
              </p>
            </div> */}

            {/* Form Steps */}
            <form onSubmit={handleNext} className="w-full md:w-[50%] mx-auto">
              {/* Step 1: Name, School Name, and Email */}
              {currentStep === 1 && (
                <>
                  <FormInput
                    type="text"
                    name="name"
                    placeholder="Enter the name Admin"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p> // Error message
                  )}

                  <FormInput
                    type="text"
                    name="schoolName"
                    placeholder="Enter the name of school"
                    value={formData.schoolName}
                    onChange={handleChange}
                  />
                  {errors.schoolName && (
                    <p className="text-red-500 text-sm">{errors.schoolName}</p> // Error message
                  )}

                  <FormInput
                    type="email"
                    name="email"
                    placeholder="Enter the school email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p> // Error message
                  )}
                </>
              )}

              {/* Step 2: Password and Confirm Password */}
              {currentStep === 2 && (
                <>
                  <label
                    htmlFor="password"
                    className="text-[#667085] text-base font-normal"
                  >
                    Choose Password
                  </label>
                  <FormInput
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p> // Error message
                  )}

                  <label
                    htmlFor="confirmPassword"
                    className="text-[#667085] text-base font-normal"
                  >
                    Confirm Password
                  </label>
                  <FormInput
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">
                      {errors.confirmPassword}
                    </p> // Error message
                  )}
                </>
              )}

              {/* Step 3: Invite Team (optional) */}
              {currentStep === 3 && (
                <>
                  <FormInput
                    type="text"
                    name="teamEmails"
                    placeholder="Invite team members (comma separated emails)"
                    value={formData.teamEmails}
                    onChange={handleChange}
                  />
                  <FormInput
                    type="text"
                    name="schoolAddress"
                    placeholder="Enter School Address"
                    value={formData.schoolAddress}
                    onChange={handleChange}
                  />
                </>
              )}

              {/* Step 4: Upload Documents */}
              {currentStep === 4 && (
                <div className="flex flex-col items-center justify-center ">
                  <h3 className="text-lg mb-2 ">Upload your documents</h3>
                  <div
                    className="border-2 border-dashed border-gray-400 rounded-md p-5 px-10 flex flex-col items-center justify-center cursor-pointer"
                    onClick={() =>
                      document.getElementById("file-input").click()
                    } // Trigger the hidden input on click
                  >
                    <input
                      type="file"
                      id="file-input"
                      name="uploadDetails"
                      className="hidden" // Hide the input
                      multiple // Allows multiple file uploads
                    />
                    <span className="bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center ">
                      <FaPlus className="inline" />
                    </span>
                    <div className="text-center">
                      <span className="text-gray-600">Drag and drop here</span>
                      <br />
                      <span className="text-gray-500">No size limit</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Previous and Next Buttons */}
              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="p-2 w-full md:w-auto bg-gray-300 text-black rounded-tl-md rounded-bl-md "
                  >
                    Previous
                  </button>
                )}
                <button
                  type="submit"
                  className="p-2 w-full  bg-blue-500 text-white rounded-tr-md rounded-br-md"
                >
                  {currentStep === 4 ? "Submit" : "Next"}
                </button>
              </div>

              {/* Already have an account */}
              <p className="font-medium text-[#667085] text-sm py-3">
                Already have an account?{" "}
                <Link to="/signin" className="font-bold text-blue-500">
                  Sign in
                </Link>
              </p>
            </form>
          </div>

          {/* Stepper Component (hidden on mobile) */}
          <div className="hidden md:block">
            <Stepper currentStep={currentStep} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;

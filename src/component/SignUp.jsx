import { useSignupForm } from "../hooks/useSignupForm";
import Loader from "../ui/Loader";
import Stepper from "./Stepper";
import SignupFormSteps from "./SignupFormSteps";
import { Link } from "react-router-dom";

const Signup = () => {
  const { formData, currentStep, isLoading, isSubmitting, errors, handleChange, handleNext, handlePrevious } = useSignupForm();

  if (isLoading || isSubmitting) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex justify-center flex-col gap-8 items-center h-screen font-kumbh px-4">
      {/* Page Header */}
      <div className="SIGNUP-HEADER">
        <h2 className="text-2xl md:text-4xl font-[600] text-[#4F4F4F] text-center">
          {currentStep === 1 ? "Welcome, create your school account" : currentStep === 2 ? "Choose your password" : currentStep === 3 ? "Invite your team" : "Upload your school's documents"}
        </h2>
      </div>

      {/* Form Container */}
      <div className="bg-white shadow-lg p-4 md:p-8 w-full md:w-[512px]">
        <SignupFormSteps currentStep={currentStep} formData={formData} errors={errors} handleChange={handleChange} />

        {/* Previous and Next Buttons */}
        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <button type="button" onClick={handlePrevious} className="p-2 w-full md:w-auto bg-gray-300 text-black rounded-tl-md rounded-bl-md">
              Previous
            </button>
          )}
          <button type="submit" onClick={handleNext} className="p-2 w-full bg-blue-500 text-white rounded-tr-md rounded-br-md">
            {currentStep === 4 ? "Submit" : "Next"}
          </button>
        </div>
         {/* Link to the signin page if the user have an account */}
         <p className="font-medium text-center text-[#667085] text-sm py-3">
            Already have an account?
            <Link to="/signin" className="text-blue-500">
              Sign In
            </Link>
          </p>
      </div>

      {/* Stepper Component */}
      <div className="hidden md:block">
        <Stepper currentStep={currentStep} />
      </div>
    </div>
  );
};

export default Signup;

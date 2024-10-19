/* eslint-disable react/prop-types */
import FormInput from "../ui/FormInputs";
import { FaPlus } from "react-icons/fa";

const SignupFormSteps = ({ currentStep, formData, errors, handleChange }) => {
  switch (currentStep) { 
    case 1:
      return ( 
        <>
          <FormInput type="text" name="name" placeholder="Enter the name Admin" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          <FormInput type="text" name="schoolName" placeholder="Enter the name of school" value={formData.schoolName} onChange= {handleChange} />
          {errors.schoolName && <p className="text-red-500 text-sm">{errors.schoolName}</p>}
          <FormInput type="email" name="email" placeholder="Enter the school email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </>
      );
    case 2:
      return (
        <>
          <FormInput type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          <FormInput type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </>
      );
    case 3:
      return (
        <>
          <FormInput type="email" name="teamEmails" placeholder="Invite team members (comma separated emails)" value={formData.teamEmails} onChange={handleChange} />
          <FormInput type="text" name="schoolAddress" placeholder="Enter School Address" value={formData.schoolAddress} onChange={handleChange} />
        </>
      );
    case 4:
      return (
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg mb-2 ">Upload your documents</h3>
          <div className="border-2 border-dashed border-gray-400 rounded-md p-5 px-10 flex flex-col items-center justify-center cursor-pointer" onClick={() => document.getElementById("file-input").click()}>
            <input type="file" id="file-input" name="uploadDetails" className="hidden" multiple />
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
      );
    default:
      return null;
  }
};

export default SignupFormSteps;

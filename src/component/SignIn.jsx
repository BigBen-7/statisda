import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../ui/FormInputs";

const SignIn = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    password: "",
    
  });
  const [errors, setErrors] = useState({})
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Reset error on change
  };
  return (
    <div className="flex justify-center flex-col gap-8 items-center h-screen font-kumbh">
      <h2 className="text-2xl font-semibold">SignIn</h2>
      <form className="bg-white shadow-lg p-8 w-[512px]">
        {/* Add your input fields for SignIn */}
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
        <Link to='/dashboard' type="submit" className="p-2 w-full mt-8 bg-blue-500 text-white rounded">
          Log In
        </Link>
      <p  className="font-medium text-center text-[#667085] text-sm py-3">
        Don&apos;t have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
      </p>
      </form>
    </div>
  );
};

export default SignIn;

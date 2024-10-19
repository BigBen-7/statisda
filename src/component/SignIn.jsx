import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@store/accountSlice"; // Import the login action from Redux

import FormInput from "../ui/FormInputs";
import Loader from "../ui/Loader";

const SignIn = () => {
  // State for handling form inputs (email, password)
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const { user, error } = useSelector((state) => state.accountAuth); // Access user and error from the Redux state
  const [ isLoading, setIsLoading ] = useState(false);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs before submitting
    const validationErrors = {};
    if (!formData.email) validationErrors.email = "Email is required";
    if (!formData.password) validationErrors.password = "Password is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Dispatch the login action
    dispatch(login({ email: formData.email, password: formData.password }));

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    if (user) {
      navigate("/dashboard"); // Navigate to the dashboard route when the user is authenticated
    }
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, [isLoading, setIsLoading]);

  // // Effect to navigate after a successful login
  // useEffect(() => {
  //   if (user) {
  //     navigate("/dashboard"); // Navigate to the dashboard route when the user is authenticated
  //   }
  // }, [user, navigate]);

  return (
    <>
    {isLoading && <Loader/>}
    <div className="flex justify-center flex-col gap-8 items-center h-screen font-kumbh">
      <h2 className="text-2xl font-semibold">Sign In</h2>

      {/* Login form */}
      <form
        className="bg-white shadow-custom p-8 w-[512px]"
        onSubmit={handleSubmit}
      >
        {/* Input fields for email and password */}
        <>
          <FormInput
            type="email"
            name="email"
            placeholder="Enter the school email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p> // Show email validation error
          )}

          <FormInput
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p> // Show password validation error
          )}
        </>

        {/* If there is a login error, display it */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Submit button for logging in */}
        <button
          type="submit"
          className="p-2 w-full mt-8 bg-blue-500 text-white rounded"
        >
          Log In
        </button>

        {/* Link to the signup page if the user doesn't have an account */}
        <p className="font-medium text-center text-[#667085] text-sm py-3">
          Don&apos;t have an account?
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
    </>
  );
};

export default SignIn;

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSchoolDetails, setPassword, createAccount } from "@store/accountSlice";
import { useNavigate } from "react-router-dom";

export const useSignupForm = () => {
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
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle form data change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validate form fields
  const validate = () => {
    let newErrors = {};
    if (currentStep === 1) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.schoolName) newErrors.schoolName = "School name is required";
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email";
    } else if (currentStep === 2) {
      if (!formData.password) newErrors.password = "Password is required";
      if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords must match";
    }
    return newErrors;
  };

  // Handle next step
  const handleNext = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      if (currentStep === 1) {
        // Dispatch with correct parameters
        dispatch(setSchoolDetails(formData.name, formData.schoolName, formData.email));
        setCurrentStep(2);
      } else if (currentStep === 2) {
        dispatch(setPassword(formData.password, formData.confirmPassword));
        setCurrentStep(3);
      } else if (currentStep === 3) {
        setCurrentStep(4);
      } else if (currentStep === 4) {
        setIsSubmitting(true);
        setTimeout(() => {
          dispatch(createAccount());
          navigate("/dashboard"); // Redirect after successful creation
          setIsSubmitting(false); // Reset submitting state
        }, 2000);
      }
    }
  };
  

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return {
    formData,
    currentStep,
    isLoading,
    isSubmitting,
    errors,
    handleChange,
    handleNext,
    handlePrevious,
  };
};

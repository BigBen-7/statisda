import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // To store the logged-in user's data
  error: null, // For login error messages
  schoolDetails: {
    name: "",
    schoolName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
};

const accountSlice = createSlice({
  name: "accountAuth",
  initialState,
  reducers: {
    setSchoolDetails: {
      prepare(name, schoolName, email) {
        return {
          payload: { name, schoolName, email },
        };
      },
      reducer(state, action) {
        state.schoolDetails.name = action.payload.name;
        state.schoolDetails.schoolName = action.payload.schoolName;
        state.schoolDetails.email = action.payload.email;
      },
    },
    setPassword: {
      prepare(password, confirmPassword) {
        return {
          payload: { password, confirmPassword },
        };
      },
      reducer(state, action) {
        state.schoolDetails.password = action.payload.password;
        state.schoolDetails.confirmPassword = action.payload.confirmPassword;
      },
    },
    createAccount(state) {
      const userData = {
        name: state.schoolDetails.name,
        schoolName: state.schoolDetails.schoolName,
        email: state.schoolDetails.email,
        password: state.schoolDetails.password,
      };
      
      // Save user details to localStorage
      localStorage.setItem("userData", JSON.stringify(userData));

      // Update the user in Redux state
      state.user = userData;

      // Clear the form data from Redux state after saving
      state.schoolDetails = {
        name: "",
        schoolName: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    },

    login(state, action) {
      const storedUser = JSON.parse(localStorage.getItem('userData'));
      const { email, password } = action.payload;
    
    
      // Validate stored user and credentials match
      if (
        storedUser &&
        storedUser.email === email &&
        storedUser.password === password
      ) {
        // If credentials match, log the user in
        state.user = storedUser;
        state.error = null;
      } else {
        // If credentials don't match, set an error
        state.user = null;
        state.error = "Invalid email or password";
      }
    },

    logout(state) {
      // Clear user from state and localStorage on logout
      state.user = null;
      localStorage.removeItem("userData");
    },
  },
});

export const { setSchoolDetails, setPassword, createAccount, login, logout } =
  accountSlice.actions;

export default accountSlice.reducer;

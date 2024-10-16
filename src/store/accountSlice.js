import { createSlice } from '@reduxjs/toolkit';
import { auth } from '.././utils/Firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

const initialState = {
  pageCount: 1,
  schoolDetails: {
    name: '',
    schoolName: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
  loginDetails: {
    email: '',
    password: '',
  },
  // New state properties for handling loading and errors
  isLoading: false,
  error: null,
  user: null,
};

const accountSlice = createSlice({
  name: 'accountAuth',
  initialState,
  reducers: {
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
    setSchoolDetails: {
      prepare(name, schoolName, email) {
        return {
          payload: {
            name,
            schoolName,
            email,
          },
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
          payload: {
            password,
            confirmPassword,
          },
        };
      },
      reducer(state, action) {
        state.schoolDetails.password = action.payload.password;
        state.schoolDetails.confirmPassword = action.payload.confirmPassword;
      },
    },
    // These new reducers will manage loading and error state
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

// Async actions for account creation and login
export const createAccount = () => async (dispatch, getState) => {
  const { schoolDetails } = getState().accountAuth;
  
  dispatch(accountSlice.actions.setLoading(true));
  try {
    const userCredential = await createUserWithEmailAndPassword(
      schoolDetails.email,
      schoolDetails.password,
      auth
    );
    // On success, dispatch setUser with the user data
    dispatch(accountSlice.actions.setUser(userCredential.user));
    // Clear out sensitive fields
    dispatch(accountSlice.actions.setPassword('', ''));
    dispatch(accountSlice.actions.setSchoolDetails('', '', ''));
    dispatch(accountSlice.actions.setError(null)); // Clear any previous errors
  } catch (error) {
    dispatch(accountSlice.actions.setError(error.message)); // Handle error
  }
  dispatch(accountSlice.actions.setLoading(false));
};

export const loginAccount = () => async (dispatch, getState) => {
  const { loginDetails } = getState().accountAuth;
  
  dispatch(accountSlice.actions.setLoading(true));
  try {
    const userCredential = await signInWithEmailAndPassword(
      loginDetails.email,
      loginDetails.password,
      auth
    );
    // On success, dispatch setUser with the user data
    dispatch(accountSlice.actions.setUser(userCredential.user));
    // Clear out sensitive fields
    dispatch(accountSlice.actions.setError(null)); // Clear any previous errors
  } catch (error) {
    dispatch(accountSlice.actions.setError(error.message)); // Handle error
  }
  dispatch(accountSlice.actions.setLoading(false));
};

export const { setPageCount, setSchoolDetails, setPassword, setLoading, setError, setUser } =
  accountSlice.actions;

export default accountSlice.reducer;

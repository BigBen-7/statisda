import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageCount: 1,
  schoolDetails: {
    name:'',
    schoolName: '',
    email: '',
    password: '',
    confirmPassword: '',
  },


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
        (state.schoolDetails.name = action.payload.name);
        (state.schoolDetails.schoolName = action.payload.schoolName),
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
        (state.schoolDetails.password = action.payload.password),
          (state.schoolDetails.confirmPassword = action.payload.confirmPassword);
      },
    },
    createAccount(state) {
      state.schoolDetails.password = '';
      state.schoolDetails.confirmPassword = '';
      state.schoolDetails.schoolName = '';
      state.schoolDetails.name = '';
      state.schoolDetails.email = '';
    },
  },
});

export const { setPageCount, setSchoolDetails, setPassword, createAccount } =
  accountSlice.actions;

export default accountSlice.reducer;

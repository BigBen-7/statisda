import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './accountSlice.js';


const store = configureStore({
  reducer: {
    accountAuth: accountReducer,
    
  },
});

export default store;

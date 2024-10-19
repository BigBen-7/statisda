import { LOGIN, LOGOUT } from './actions';

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload, // Store the full user object (email, ]token, etc.)
        isAuthenticated: true,         // Mark the user as authenticated
      };
      case LOGOUT:
        return {
          ...state,
          user: null,                    // Reset user information
          isAuthenticated: false,        // Mark the user as logged out
        };
  
    default:
      return state;
  }
};

// Add this function to initialize the state from localStorage
export const initializeAuthState = () => {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    try {
      const user = JSON.parse(storedUser);
      return { user, isAuthenticated: true };
    } catch (error) {
      console.error('Error parsing stored user data:', error);
      localStorage.removeItem('user');
    }
  }
  return initialState;
};

export default authReducer;
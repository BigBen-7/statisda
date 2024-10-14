/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      kumbh:["Kumbh Sans", "sans-serif"],
      inter:["Inter", "sans-serif"]
    },
    boxShadow: {
      'custom': '0 4px 10px rgba(0, 0, 0, 0.3)',
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
};

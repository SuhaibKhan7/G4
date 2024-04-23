import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", 
  content: [  
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],

  theme: {
    extend: {},
  },

  plugins: [
    require('flowbite/plugin')
  ]
};

// "../node_modules/flowbite/dist/flowbite.min.js",
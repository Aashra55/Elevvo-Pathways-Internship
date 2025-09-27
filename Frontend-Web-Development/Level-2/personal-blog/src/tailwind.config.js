/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
        colors: {
        primary: "#0077b6",   
        dark: "#1a1a1a",      
        light: "#f5f5f5",     
      },
    },
  },
  plugins: [],
}

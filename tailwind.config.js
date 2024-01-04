/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth:{
        '20': '20px',
      },
      colors: {
        'kevin-blue': '#10182b',
        'kevin-blue-secound': '#213259',
      },
      
    },
  },
  plugins: [],
}

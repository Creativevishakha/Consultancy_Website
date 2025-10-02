/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5f6FFF',
        // secondary: '#F9C23C',
        // tertiary: '#212121',
      },
      // fontFamily: {
      //   sans: ['Inter', 'sans-serif'],
      // },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(200px,1fr))'
      
    }
  },
  },
  plugins: [],
}
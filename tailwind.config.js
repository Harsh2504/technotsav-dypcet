/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}', // Adjust based on your project structure
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1E40AF', // Example custom color
          secondary: '#9333EA',
          accent: '#F59E0B',
          neutral: '#374151',
          base: '#F3F4F6',
        },
        backgroundImage: {
          'vertical-cool': 'linear-gradient(to bottom, #2c4072, #3a5c9c, #4d78c7, #6d9ce6, #a0c0ff)',
        },
      },
   
    },
    plugins: [],
  };
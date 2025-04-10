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
      },
    },
    plugins: [],
  };
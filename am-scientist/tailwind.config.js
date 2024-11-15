/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-in': 'slide-in 0.7s ease-in-out',
        'slide-out': 'slide-out 0.7s ease-in-out',
      },
      keyframes: {
        'slide-in': {
          '0%': {
            transform: 'translateX(1000px)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'slide-out': {
          '0%': {
            transform: 'translateX(0px)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(1000px)',
            opacity: '1',
          },
        },
      },
      screens: {
        'SmL': '426px',
        'Jmd': '675px',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};



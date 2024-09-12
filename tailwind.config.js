// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(27, 27, 27)', // Correct RGB format
        foreground: 'rgb(225, 225, 225)',
        muted: 'rgb(115, 115, 115)',
        accent: 'rgb(254, 254, 91)', // Correct RGB format
      },
      boxShadow: {
        'glass-inset': 'inset 0 0 5px rgba(0, 0, 0, 0.5)',
        'glass-sm': '0 0 5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};

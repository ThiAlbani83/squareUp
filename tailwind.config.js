/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray10": "#1A1A1A",
        "gray15": "#262626",
        "gray20": "#333333",
        "gray40": "#656567",
        "gray60": "#98989A",
        "gray90": "#E6E6E6",
        "green50": "#9EFF00",
        "green80": "#D8FF99",
      },
      fontFamily: {
        'barlow': 'Barlow, sans-serif',
      }
    },
  },
  plugins: [],
};

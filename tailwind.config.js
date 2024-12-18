/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1180px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        tanBgColor: "var(--tanBgColor)",
      },
    },
  },
  plugins: [],
};

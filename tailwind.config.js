/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          roboto: ['"Roboto"', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        opensans: ['"Open Sans"', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        },
      },
    },
  },
  plugins: [],
}

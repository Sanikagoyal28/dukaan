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
        sideNavColor: "#1E2640",
        opaque: "#FFFFFF95",
        opaque2: "#FFFFFF10",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      phone: "400px",
      small:'500px',
      sm: "640px",
      md: "768px",
      medium: "950px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};

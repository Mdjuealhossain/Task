/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        helvetica: ["Helvetica", "Arial", "sans-serif"],
        proxima: ["Proxima Nova", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      spacing: {
        "footer-top": "3.75rem",
        128: "28.313rem",
      },
    },
    colors: {
      default: "#F9FBFF",
      paper: "#FFFFFF",
      dark: "#474848",
      blue: "#253053",
      orange: "#FF9458",
      divider: "#D8D8D8",
      Bdivider: "#D8D8D8",
      disable: "#EFF5F5",
      checkbox: "#8E94A6",
      "regal-orange": " #FF5E29",
      "regal-blue": "#4665FF",
      "dark-white": "#E3E3E3",
      "dark-light": "#EFF3F3",
    },
    fontSize: {
      sm: [
        "0.75rem", //12px
        {
          lineHeight: "1.125rem",
          letterSpacing: "-0.01em", //14px
          fontWeight: "400",
        },
      ],
      base: [
        "0.875rem",
        {
          lineHeight: "1.313rem",
          letterSpacing: "-0.01em", //14px
          fontWeight: "400",
        },
      ],
      lg: [
        "1rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0em", //16px
          fontWeight: "500",
        },
      ],
      xl: [
        "1.125rem",
        {
          lineHeight: "1.688rem",
          letterSpacing: "-0.01em", //18px
          fontWeight: "500",
        },
      ],
      "2xl": [
        "1.25rem",
        {
          lineHeight: "1.875rem",
          letterSpacing: "-0.01em", //20px
          fontWeight: "500",
        },
      ],
      "3xl": [
        "1.75rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.01em", //28px
          fontWeight: "500",
        },
      ],
    },
    borderRadius: {
      md: "0.250rem",
      lg: ".5rem",
      xl: "1rem",
    },
  },
  plugins: [],
};

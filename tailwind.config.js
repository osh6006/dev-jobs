/** @type {import('tailwindcss').Config} */
module.exports = {
  // 페이지 안에있는 폴더들과 파일의 확장자명을 적용하겠다.
  content: [
    "./pages/**/*.{jsx,js,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: { main: ["'Jua','Kumbh Sans', sans-serif"] },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121721",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      warning: "#ff3e38",
      bermuda: "#78dcca",
      violet: "#5964E0",
      light_violet: "#939BF4",
      light_grey: "#F4F6F8",
      very_dark_blue: "#19202D",
      gray: "#9DAEC2",
      dark_grey: "#6E8098",
      link: "#5B8930",
    },
    fontSize: {
      h1: ["28px", "34px"],
      h2: ["24px", "29px"],
      h3: ["20px", "24px"],
      h4: ["14px", "18px"],
      body: ["16px", "26px"],
    },
    screens: {
      mobile: "375px",
      // => @media (min-width: 640px) { ... }

      tablet: "768px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};

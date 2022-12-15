/** @type {import('tailwindcss').Config} */
module.exports = {
  // 페이지 안에있는 폴더들과 파일의 확장자명을 적용하겠다.
  content: [
    "./pages/**/*.{jsx,js,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

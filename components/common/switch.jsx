import Sun from "../../public/assets/desktop/icon-sun.svg";
import Moon from "../../public/assets/desktop/icon-moon.svg";

const Switch = ({ isDark, setIsDark }) => {
  const toggleDark = () => {
    setIsDark((prev) => !prev);
    window.localStorage.setItem("isDark", JSON.stringify(!isDark));
  };
  return (
    <div className="flex items-center space-x-2">
      <Sun />
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          value=""
          className="peer sr-only"
          onChange={toggleDark}
          checked={isDark ? true : false}
        />
        <div className="dark:border-gray-600 peer h-6 w-11 rounded-full bg-white after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-white after:bg-violet after:transition-all after:content-[''] peer-checked:bg-white peer-checked:after:translate-x-full peer-checked:after:border-violet peer-focus:outline-none "></div>
      </label>
      <Moon />
    </div>
  );
};

export default Switch;

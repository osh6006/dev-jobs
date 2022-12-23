import { useEffect, useState } from "react";
import Navbar from "../components/common/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(null);
  useEffect(() => {
    console.log(JSON.parse(window.localStorage.getItem("isDark")));
    if (JSON.parse(window.localStorage.getItem("isDark"))) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [isDark]);
  return (
    <div className={isDark ? "dark" : ""}>
      <div className="relative flex h-full justify-center overflow-y-auto bg-light_grey dark:bg-midnight">
        <div className="h-full bg-light_grey dark:bg-midnight mobile:w-full tablet:w-full desktop:w-[1440px]">
          {/* Navbar */}
          <Navbar isDark={isDark} setIsDark={setIsDark} />
          {/* Main Contents */}
          <Component {...pageProps} />
          {/* footer */}
        </div>
      </div>
    </div>
  );
}

export default MyApp;

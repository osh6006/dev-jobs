import { useState } from "react";
import Navbar from "../components/common/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className={isDark ? "dark" : ""}>
      <div className="relative flex h-full justify-center overflow-y-auto bg-light_grey dark:bg-midnight">
        <div className="h-full bg-light_grey dark:bg-midnight mobile:w-full tablet:w-full desktop:w-[1440px]">
          {/* Navbar */}
          <Navbar />
          {/* Main Contents */}
          <Component {...pageProps} />
          {/* footer */}
        </div>
      </div>
    </div>
  );
}

export default MyApp;

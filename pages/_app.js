import { useEffect, useState } from "react";
import Navbar from "../components/common/navbar";
import "../styles/globals.css";
import { SWRConfig } from "swr";
import Layout from "components/common/layout";
import { UserContext } from "libs/client/Context";
import useUser from "libs/client/useUser";

function MyApp({ Component, pageProps }) {
  const user = useUser();
  const [isDark, setIsDark] = useState(null);

  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem("isDark"))) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [isDark]);
  return (
    <SWRConfig
      value={{
        fetcher: (url) => fetch(url).then((response) => response.json()),
      }}
    >
      <div className={isDark ? "dark  h-screen" : "h-screen"}>
        <div className="flex h-full justify-center overflow-y-auto bg-light_grey dark:bg-midnight">
          <div className="h-full bg-light_grey dark:bg-midnight mobile:w-full tablet:w-full desktop:w-[1440px]">
            <UserContext.Provider value={user}>
              {/* Navbar */}
              <Navbar isDark={isDark} setIsDark={setIsDark} />
              {/* Main Contents */}
              <Layout>
                <Component {...pageProps} />
              </Layout>
              {/* footer */}
            </UserContext.Provider>
          </div>
        </div>
      </div>
    </SWRConfig>
  );
}

export default MyApp;

import Navbar from "../components/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex h-screen justify-center overflow-y-auto bg-light_grey">
      <div className="h-full bg-light_grey dark:bg-midnight mobile:w-full tablet:w-full desktop:w-[1440px]">
        {/* Navbar */}
        <Navbar />
        {/* Main Contents */}
        <Component {...pageProps} />
        {/* footer */}
      </div>
    </div>
  );
}

export default MyApp;

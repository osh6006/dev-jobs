import Navbar from "../components/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className=" flex h-screen w-full justify-center bg-light_grey">
      <div className="bg-light_grey dark:bg-midnight mobile:w-[375px] tablet:w-[768px] desktop:w-[1440px]">
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

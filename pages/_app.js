import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full bg-purple">
      {/* Navbar */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

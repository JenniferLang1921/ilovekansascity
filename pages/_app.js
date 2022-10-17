import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import "../styles/globals.css";


import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} />
      <Meta />

      <Navbar />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

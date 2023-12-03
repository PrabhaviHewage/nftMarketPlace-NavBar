import "../app/globals.css";

//INTRNAL IMPORT
import { NavBar, Footer, HeroSection } from "../components/componentsindex";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default MyApp;
import React from "react";

//INTERNAL IMPORT
import Style from "../app/index.module.css";
import { HeroSection } from "../components/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
    </div>
  );
};

export default Home;
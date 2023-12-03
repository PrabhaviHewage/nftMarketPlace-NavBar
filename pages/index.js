import React from "react";

//INTERNAL IMPORT
import Style from "../app/index.module.css";
import { HeroSection, Service } from "../components/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
    </div>
  );
};

export default Home;
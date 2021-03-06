import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import Contact from "../Contact";


const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeSimpleSteps/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
            <Contact/>
        </>
    );
};

export default Home;
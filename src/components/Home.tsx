import React, { useState, useEffect } from "react";
import { useSpring, useTransition, animated } from "react-spring";
import { LG_SCREEN_SIZE } from "../constants";
import HomeBanner from "./HomeBanner";
import ChooseYourChampion from "./ChooseYourChampion";
import useWindowDimensions from "../windowDimensions";
import ChampionStyle from "./ChampionStyle";

const Home: React.FC<{}> = () => {
    return (
        <div className="homeContainer">
            <HomeBanner />
            <ChooseYourChampion />
            <ChampionStyle />
        </div>
    );
};

export default Home;

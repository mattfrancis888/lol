import React, { useState, useEffect } from "react";
import { useSpring, useTransition, animated } from "react-spring";
import HomeBanner from "./HomeBanner";
const Home: React.FC<{}> = () => {
    const [progress, setProgress] = useState({
        percentage: 25,
        storiesArrayIndex: 0,
    });

    const fill = useSpring({
        from: {
            transform: "translate3d(0%,0%,0px)",
        },
        to: {
            transform: `translate3d(${progress.percentage}%,0%,0px)`,
            //transform: `translate3d(25%,0%,0px)`,
        },

        config: {
            duration: 1000,
        },
    });

    return (
        <div className="homeContainer">
            <HomeBanner />
            <div className="chooseChampionContainer">
                <div className="chooseChampionTextWrap">
                    <h1>
                        Choose Your
                        <span className="championBold">Champion</span>
                    </h1>
                    <p>
                        Whether you like to dive straight into the fray, support
                        your teammates, or something in between, there’s a spot
                        for you on the Rift.
                    </p>
                    <div className="championRoleAndSpotlightWrap">
                        <div className="roleContainer">
                            <div className="progressBar"></div>
                            <animated.div
                                className="dot"
                                style={fill}
                            ></animated.div>
                            <div
                                onClick={() => {
                                    setProgress({
                                        percentage: 25,
                                        storiesArrayIndex: 0,
                                    });
                                }}
                                className="progressControl"
                            >
                                <h1>Support</h1>
                            </div>
                            <div
                                onClick={() => {
                                    setProgress({
                                        percentage: 50,
                                        storiesArrayIndex: 0,
                                    });
                                }}
                                className="progressControl"
                            >
                                <h1>Tank</h1>
                            </div>
                        </div>

                        <div className="championSpotlightContainer">
                            <img
                                src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/en-us/production/en-us/static/support-d63ae08baf517425864ddc020a5871d5.png"
                                alt=""
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

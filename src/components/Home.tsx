import React, { useState, useEffect } from "react";
import { useSpring, useTransition, animated } from "react-spring";

const Home: React.FC<{}> = () => {
    useEffect(() => {}, []);
    const borderAnimation = useSpring({
        from: {
            border: "1px solid white",
        },
        to: {
            border: "1px solid blue",
        },

        config: {
            duration: 2000,
            // mass: 1,
            // tension: 250,
            // friction: 30,
        },
    });
    return (
        <div className="homeContainer">
            <div className="homeBannerContainer">
                <div className="vidHomeBanner">
                    <video
                        className="blurredVid"
                        autoPlay={true}
                        playsInline={false}
                        muted={true}
                        loop={true}
                        // style={style}
                    >
                        <source
                            src=" https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/en-us/production/en-us/static/hero-blurred-7572101a2ce5e003b66483b7fe5c5d36.webm"
                            type="video/mp4"
                        />
                    </video>
                    <div className="surfaceVidContainer">
                        <video
                            className="surfaceVid"
                            autoPlay={true}
                            playsInline={false}
                            muted={true}
                            loop={true}
                            // style={style}
                        >
                            <source
                                src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/en-us/production/en-us/static/hero-0632cbf2872c5cc0dffa93d2ae8a29e8.webm"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                    <img
                        className="homeBannerLogo"
                        src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/en-us/production/en-us/static/logo-800-47024e2aeaaa8651c172ba883264dd43.png"
                        alt="logo"
                    />
                </div>
            </div>
            {/* <animated.div className="style__Container-sc-1uho5c3-0 gvLtET hex test"></animated.div>
             */}
            <div className="box glowing"></div>
        </div>
    );
};

export default Home;

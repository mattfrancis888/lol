import React, { useState, useEffect } from "react";
import { useSpring, useTransition, animated } from "react-spring";

const Home: React.FC<{}> = () => {
    //Box border fill: https://codepen.io/devilishalchemist/pen/oXjYKB
    useEffect(() => {}, []);
    const top = useSpring({
        from: {
            width: "0%",
        },
        to: {
            width: "100%",
        },

        config: {
            duration: 1000,
            // mass: 1,
            // tension: 250,
            // friction: 30,
        },
    });

    const right = useSpring({
        from: {
            height: "0%",
        },
        to: {
            height: "100%",
        },

        delay: 1000,
        config: {
            duration: 1000,
            // mass: 1,
            // tension: 250,
            // friction: 30,
        },
    });

    const bottom = useSpring({
        from: {
            transform: "scaleX(0)",
        },
        to: {
            transform: "scaleX(1)",
        },
        delay: 2000,
        config: {
            duration: 1000,
            // mass: 1,
            // tension: 250,
            // friction: 30,
        },
    });

    const left = useSpring({
        from: {
            transform: "scaleY(0)",
        },
        to: {
            transform: "scaleY(1)",
        },
        delay: 3000,
        config: {
            duration: 1000,
            // mass: 1,
            // tension: 250,
            // friction: 30,
        },
    });
    return (
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
                {/* <div className="box glowing videoBorder"></div> */}
                <div className="videoBorder">
                    <animated.span className="top" style={top}></animated.span>
                    <animated.span
                        className="right"
                        style={right}
                    ></animated.span>
                    <animated.span
                        className="bottom"
                        style={bottom}
                    ></animated.span>
                    <animated.span
                        className="left"
                        style={left}
                    ></animated.span>
                </div>

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
                    <img
                        className="homeBannerLogo"
                        src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/en-us/production/en-us/static/logo-800-47024e2aeaaa8651c172ba883264dd43.png"
                        alt="logo"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;

import React, { useState, useEffect } from "react";
import { useSpring, useTransition, animated } from "react-spring";
import { LG_SCREEN_SIZE } from "../constants";

import useWindowDimensions from "../windowDimensions";
const championSpotlight = [
    {
        name: "Thresh",
        role: "Support",
        image: "",
        svg: (
            <svg className="iconRole" viewBox="0 0 100 100">
                <path d="M90.4 2.11c0 27.3-25.4 36.63-25.4 36.63L60.94 61a8.39 8.39 0 00-.48 2.39 6.95 6.95 0 0013.89 0 6.7 6.7 0 00-5.75-6.7c6.71-11.5 16.29-6 16.29-6 1.43-1.44 2.63-2.88 3.83-4.07l-7.19-2.88h9.34a38.5 38.5 0 005.75-11.25L87 28.69h10.3a33 33 0 00-6.9-26.58M35.32 38.74S9.93 29.41 9.93 2.11c0 0-9.82 10.77-7.42 26.1h10.3L3.23 32a41.09 41.09 0 004.07 8.9h11l-8.61 3.59a39.83 39.83 0 005.27 6s9.58-5.51 16.29 6a6.7 6.7 0 00-5.75 6.7 6.95 6.95 0 1013.41-2.39zM45.14 22.7l2.63-6.7h4.79l2.63 6.94-5 13.89zm-1-16l-7 16 10.15 25.38v23.71l-5 16 5 10H53l5-10-5-16V48.08L63.1 22.7l-7-16z"></path>
            </svg>
        ),
        spotlightImage:
            "https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/en-us/production/en-us/static/support-d63ae08baf517425864ddc020a5871d5.png",
    },
    {
        name: "Akali",
        role: "Assasins",
        image: "",
        svg: (
            <svg className="iconRole" viewBox="0 0 100 100">
                <path d="M56.59 73.71l1.67-2.88c5.75-9.34 5.51-16 3.83-20.59a39.78 39.78 0 01-9.1 16 2 2 0 01-1.43.48H48.2a2.17 2.17 0 01-1.67-.72 39.78 39.78 0 01-9.1-16c-1.68 4.55-1.68 11.26 3.83 20.59l1.68 2.88-3.36 5.75 10.06 17.72L59.7 79.22z"></path>
                <path d="M73.11 38.74c-3.35-4.31-6-10-6-18.91 0-4.07-3.59-8.15-7.66-12-4.79-4.31-5.75-5.74-9.58-5.74s-4.79 1.43-9.34 5.74c-4.07 3.83-7.66 7.91-7.66 12 0 8.86-2.88 14.6-6 18.68L12.76 52.87 2.23 45.69v12.93S2.47 84 39.58 97.89c0 0-14.13-7.18-16.28-31.13-.24-1.67-.24-9.1-.24-10.29A119.77 119.77 0 0036.71 74c-.72-1.2-1.44-2.64-2.16-3.83-5-10.54-4.07-18.2-1.67-23.47a22.77 22.77 0 017.42-8.86l9.58 9.58 9.58-9.58a22.77 22.77 0 017.42 8.86c2.4 5.27 3.59 12.93-1.43 23.23-.72 1.38-1.45 2.58-2.16 4.07a119.77 119.77 0 0013.65-17.53c0 1.19 0 8.62-.24 10.29-2.39 23.95-16.28 31.13-16.28 31.13C97.53 84 97.77 58.62 97.77 58.62V45.69l-10.53 7.18z"></path>
            </svg>
        ),
        spotlightImage:
            "https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/en-us/production/en-us/static/assassin-d64d3ffdda15e1eed637aefe6a2c7fee.png",
    },
    {
        role: "Fighters",
        name: "Yasuo",
        image: "",
        svg: (
            <svg className="iconRole" viewBox="0 0 100 100">
                <path d="M67.84 56.35v5.5c8.62-8.62 14.37 0 14.37 0C112.14 40.78 90.35 2 90.35 2s-.72 17.24-15.08 27.77v16.52c-.24 4.79-3.84 7.9-7.43 10.06M17.79 62.09s4.07-6.46 10.78-2.63L20.91 48.2l6.7-16c-17.24-10.54-18-29.93-18-29.93S-12.14 41 17.79 62.09M26.89 83.89l5.51-18.68-.24-.48L19.23 77.9A17.78 17.78 0 017.5 83.17H3l-1 2.39 12 11.5zM92.27 83.89a16.24 16.24 0 01-11.74-5.27L68.8 66.88l3.83 17.72L85.8 98l12-11.49-1-2.4zM55.87 42.7c0 .24-.24.48-.24.71h.72c5.75.48 7.66 2.64 9.1 7.67a9.35 9.35 0 002.39-1.92c1-1 1.68-1.67 1.68-2.63V28.09a2 2 0 00-1.68-1.92l-31.37-5.74H36a2.39 2.39 0 00-2.39 2.39v6.71l24.9 3.35z"></path>
                <path d="M60.18 54c-1.2-5.27-1.44-4.55-5.75-4.79L40.78 48v-3.87h5.51A4.09 4.09 0 0050.36 41l1-3.35L32.4 35l-5 12.22 11.74 17-5.54 18.47L49.88 98l16.53-15.07s-6.23-28.5-6.23-29M49.88 2.23l-4.79 10.29 4.79 3.83 4.79-3.83zM62.1 9.41l1.43 6h6l2.87-11zM30.25 15.4h6l.24-.72 1.2-5.27-10.3-5z"></path>
            </svg>
        ),
        spotlightImage:
            "https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/en-us/production/en-us/static/fighter-7a08920b696ecdb673edeeae1d3c616e.png",
    },
    {
        role: "Marksmen",
        name: "Jinx",
        image: "",
        svg: (
            <svg className="iconRole" viewBox="0 0 100 100">
                <path d="M28.69 27.25h6.94l1.92-6.94-13.41-7.91zM71.31 27.25l4.55-14.85-13.41 7.91 1.92 6.94zM71.31 35.39c-1.43 0-12.21-3.83-12.21-3.83L50 42.34l-9.1-10.78s-10.54 3.83-12.21 3.83c-7.67 0-4.79-7.18-4.79-7.18S4.26 48.32 2.11 64.13c0 0 5.74-8.86 24.42-13.17a26.22 26.22 0 0013.89 12.93c-.72-3.11-1.44-6.71-2.15-10.06a22.36 22.36 0 01-3.84-4.31c.72 0 7.19-.72 8.15-.72.71 2.64 4.55 28.74 4.55 28.74l-7 10.3v10L50 93.82l9.82 4.07V87.6l-7-10.3s3.84-26.1 4.55-28.74c.72 0 7.19.72 8.15.72a16.52 16.52 0 01-3.84 4.31 98.08 98.08 0 00-2.15 10.06 25.33 25.33 0 0013.94-12.93c18.68 4.55 24.42 13.17 24.42 13.17C95.74 48.32 76.1 28 76.1 28s2.88 7.42-4.79 7.42"></path>
                <path d="M50 2.11l-7.66 21.31h.24L50 33.24l7.42-9.82h.24z"></path>
            </svg>
        ),
        spotlightImage:
            "https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/en-us/production/en-us/static/marksman-b339ed8fd7e04ff2c3fca022c5d299fb.png",
    },
];

const Home: React.FC<{}> = () => {
    const [isRoleHover, setIsRoleHover] = useState({
        percentage: 0,
    });

    const [progress, setProgress] = useState({
        percentage: 0,
        stopAutoplay: false,
    });
    useEffect(() => {
        let fillTimeOut: any;
        if (!progress.stopAutoplay) {
            fillTimeOut = setTimeout(() => {
                if (progress.percentage < 75)
                    setProgress({
                        percentage: progress.percentage + 25,
                        stopAutoplay: false,
                    });
                else
                    setProgress({
                        percentage: 0,
                        stopAutoplay: false,
                    });
            }, 1000);
        }
        return () => {
            clearTimeout(fillTimeOut);
        };
    }, [progress]);

    const fill = useSpring({
        from: {
            transform: "translate3d(0%,0%,0px)",
        },
        to: {
            transform: `translate3d(${progress.percentage}%,0%,0px)`,

            //transform: `translate3d(0px,0%,0px)`,
        },

        config: {
            duration: 1000,
        },
    });

    const iconGrow = useTransition(isRoleHover.percentage, {
        from: {
            transform: "translate3d(0px,0px,0px) scale(1) ",
        },

        enter: {
            transform: "translate3d(0px,-10px,0px) scale(1.1)",
        },

        config: {
            duration: 250,
        },
    });

    const changeColor = useTransition(isRoleHover.percentage, {
        from: {
            color: "grey",
        },

        enter: {
            color: "black",
        },

        config: {
            duration: 250,
        },
    });

    const iconGrowClick = useTransition(progress.percentage, {
        from: {
            transform: "translate3d(0px,-10px,0px) scale(1.1) ",
        },

        enter: {
            transform: "translate3d(0px,-10px,0px) scale(1.1)",
        },

        config: {
            duration: 250,
        },
    });

    const showSelectedIcon = useTransition(progress.percentage, {
        from: {
            opacity: 0,
        },

        enter: {
            opacity: 1,
        },

        leave: {
            opacity: 0,
        },

        config: {
            duration: 250,
        },
    });

    const circle = useTransition(progress.percentage, {
        //This is used with progress in home.scss -
        // re renders the SVG path whenever progress.percentage
        //changes
    });
    const { width } = useWindowDimensions();
    const whiteLoadingBox = useTransition(progress.percentage, {
        from: {
            transform: "rotate(45deg) translate3d(0px, 33rem, 0px)",
        },

        enter: {
            transform: "rotate(45deg) translate3d(0px, -38rem, 0px)",
        },

        config: {
            mass: 1,
            tension: width > LG_SCREEN_SIZE ? 150 : 80,
            friction: 50,
        },
    });

    return (
        <div className="chooseChampionContainer">
            <div className="chooseChampionTextWrap">
                <h1 className="chooseChampionText">
                    Choose Your
                    <span className="championBold">Champion</span>
                </h1>
                <p className="chooseChampionDescText">
                    Whether you like to dive straight into the fray, support
                    your teammates, or something in between, there’s a spot for
                    you on the Rift.
                </p>
                <div className="championRoleAndSpotlightWrap">
                    <div className="roleContainer">
                        {/* <div className="progressBarIntro"></div> */}
                        <div className="progressBar"></div>
                        <animated.div
                            className="dot"
                            style={fill}
                        ></animated.div>
                        {championSpotlight.map((champion, index) => {
                            return (
                                <div
                                    key={index}
                                    className="progressControl"
                                    onClick={() => {
                                        setProgress({
                                            percentage: index * 25,
                                            stopAutoplay: true,
                                        });
                                    }}
                                    onMouseEnter={() => {
                                        if (progress.percentage !== index * 25)
                                            setIsRoleHover({
                                                percentage: index * 25,
                                            });
                                    }}
                                    onMouseLeave={() => {
                                        if (progress.percentage !== index * 25)
                                            setIsRoleHover({
                                                percentage: -100,
                                            });
                                    }}
                                >
                                    <div className="championIconAndRoleWrap">
                                        {showSelectedIcon((animation, item) => {
                                            return (
                                                item === index * 25 && (
                                                    <animated.svg
                                                        className="iconSelectedRole"
                                                        viewBox="0 0 100 100"
                                                        style={animation}
                                                    >
                                                        <path d="M59.84 7.78L50 17.63l-4.43-4.43-5.41-5.42a46.63 46.63 0 1019.68 0zm-12 12L50 22l2.2-2.19 4.67-4.67a38.86 38.86 0 11-13.74 0zM50 96.89a43.52 43.52 0 01-10.82-85.68l2.59 2.59a40.42 40.42 0 1016.46 0l2.59-2.59A43.52 43.52 0 0150 96.89z"></path>
                                                        <path d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"></path>
                                                    </animated.svg>
                                                )
                                            );
                                        })}

                                        {/* Icon dissapears when user clicks on icon */}
                                        {iconGrow((animation, item) => {
                                            return (
                                                index * 25 !==
                                                    progress.percentage && (
                                                    <animated.div
                                                        className="iconRoleWrap"
                                                        style={
                                                            item === index * 25
                                                                ? animation
                                                                : {}
                                                        }
                                                    >
                                                        {champion.svg}
                                                    </animated.div>
                                                )
                                            );
                                        })}
                                        {/*Icon appears when user clicks on icon -replacing the dissapeared icon above */}
                                        {iconGrowClick((animation, item) => {
                                            return (
                                                item === index * 25 && (
                                                    <animated.div
                                                        className="iconRoleWrap"
                                                        style={animation}
                                                    >
                                                        {champion.svg}
                                                    </animated.div>
                                                )
                                            );
                                        })}

                                        {changeColor((animation, item) => {
                                            return (
                                                <animated.h1
                                                    style={
                                                        item === index * 25
                                                            ? animation
                                                            : {}
                                                    }
                                                    className="roleText"
                                                >
                                                    {champion.role}
                                                </animated.h1>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="championSpotlightContainer">
                        {/*https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705 */}

                        <div className="spotlightCircleSvg">
                            <svg
                                viewBox="0 0 36 36"
                                className="circular-chart blue"
                            >
                                <path
                                    className="circle-bg"
                                    d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                {circle((animation, item) => {
                                    return (
                                        <path
                                            className="circle"
                                            stroke-dasharray="100, 100"
                                            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                    );
                                })}
                            </svg>
                        </div>
                        {whiteLoadingBox((animation, item) => {
                            return (
                                <animated.div
                                    className="whiteBox"
                                    style={animation}
                                ></animated.div>
                            );
                        })}
                        {championSpotlight.map((champion, index) => {
                            //The <img> below uses classnames to decide wheter to show or hide the image
                            // instead of react spring because react-spring would re-render the image
                            //and cause a new network call.
                            return (
                                <React.Fragment>
                                    <img
                                        className={
                                            progress.percentage === index * 25
                                                ? "showImage"
                                                : "hideImage"
                                        }
                                        key={index}
                                        src={champion.spotlightImage}
                                        alt=""
                                    ></img>
                                    {/* {progress.percentage === index * 25 && (
                                        <h1 className="championSpotlightName">
                                            {champion.name}
                                        </h1>
                                    )} */}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

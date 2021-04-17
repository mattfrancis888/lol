import React, { useState, useEffect, useRef } from "react";
import { useSpring, useTransition, animated, to } from "react-spring";
import { Parallax } from "react-parallax";
import useOnScreen from "../useOnScreen";
//https://codesandbox.io/s/affectionate-bogdan-o3933?fontsize=14&hidenavigation=1&theme=dark&file=/src/index.js:161-326
// You can use this `calc` method to increase the impact
// of the effect by playing around with the values and units.
const calc = (o: any) => `translateY(${o * 0.1}px)`;

const Home: React.FC<{}> = () => {
    const ref = useRef<any>();

    const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

    const handleScroll = () => {
        const posY = ref.current.getBoundingClientRect().top;
        const offset = window.pageYOffset - posY;
        set({ offset });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <React.Fragment>
            <div className="bgWrap">
                <animated.img
                    ref={ref}
                    style={{
                        transform: offset.to(calc),
                    }}
                    className="mountain"
                    src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/en-us/production/en-us/static/championstyle_02-95fa98258784f905be83831947a1f07c.png"
                    alt=""
                />

                <img
                    className="tree"
                    src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/en-us/production/en-us/static/championstyle_01-dc617921291c69586acbebec745b4191.png"
                    alt=""
                />
            </div>
        </React.Fragment>
    );
};

export default Home;

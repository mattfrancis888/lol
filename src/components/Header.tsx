import React, { useState, useEffect } from "react";
import useWindowDimensions from "../windowDimensions";
import Modal from "./Modal";
import { LG_SCREEN_SIZE, MED_SCREEN_SIZE } from "../constants";
import { useSpring, useTransition, animated } from "react-spring";
import { GiHamburgerMenu } from "react-icons/gi";
import LolSvg from "./LoLSvg";
const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const [showModalPresentation, setShowModalPresentation] = useState(false);
    const { width } = useWindowDimensions();

    useEffect(() => {
        if (showModal && width >= MED_SCREEN_SIZE) {
            setShowModal(false);
        }
    }, [showModal, width]);

    const modalOnCancel = () => {
        setShowModal(false);
    };

    const renderModalContent = () => {
        return (
            <div>
                <div className="modalLogoWrap">
                    <LolSvg />
                </div>
                <div className="modalTextWrap">
                    <h1>How To Play</h1>
                    <h1>Champions</h1>
                </div>
            </div>
        );
    };

    const modalAnimation = useSpring({
        transform: showModal
            ? `translate3d(0px,0px,0px)`
            : `translate3d(-500%,0px,0px)`,

        config: {
            mass: 1,
            tension: 250,
            friction: 30,
        },
    });
    const modalBg = useSpring({
        backgroundColor: showModal ? `rgba(0,0,0,0.5)` : `rgba(0,0,0,0.0)`,
        pointerEvents: showModal ? `all` : `none`,
        config: {
            // duration: 250,
            mass: 1,
            tension: 250,
            friction: 30,
        },
    });

    //Modal for smaller screens when hamburger is clicked
    const renderModal = () => {
        return (
            <Modal
                animation={modalAnimation}
                fade={modalBg}
                content={renderModalContent()}
                onDismiss={modalOnCancel}
            />
        );
    };

    return (
        <nav>
            {renderModal()}
            <span className="headerLogo"></span>
            {width >= MED_SCREEN_SIZE && (
                <div className="headerTextsWrap">
                    <h1>How To Play</h1>
                    <h1>Champion</h1>
                </div>
            )}

            {width < MED_SCREEN_SIZE && (
                <GiHamburgerMenu
                    className="burger"
                    onClick={() => setShowModal(true)}
                />
            )}
        </nav>
    );
};

export default Header;

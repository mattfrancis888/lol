import React, { useState, useEffect } from "react";
import useWindowDimensions from "../windowDimensions";
import Modal from "./Modal";
import { LG_SCREEN_SIZE, MED_SCREEN_SIZE } from "../constants";
import { GiHamburgerMenu } from "react-icons/gi";
import LolSvg from "./LoLSvg";
const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const [showModalPresentation, setShowModalPresentation] = useState(false);
    const { width } = useWindowDimensions();

    // useEffect(() => {
    //     if (showModal && width >= MED_SCREEN_SIZE) {
    //         setShowModal(false);
    //     }
    // }, [showModal, width]);

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

    //Modal for smaller screens when hamburger is clicked
    const renderModal = () => {
        return (
            <Modal
                // animation={modalAnimation}
                // fade={modalBg}
                content={renderModalContent()}
                onDismiss={modalOnCancel}
            />
        );
    };

    return (
        <nav>
            {showModal && renderModal()}
            <span className="headerLogo"></span>
            {width >= MED_SCREEN_SIZE && (
                <div className="headerTextsWrap">
                    <h1>How To Play</h1>
                    <h1>Champion</h1>
                </div>
            )}
            <GiHamburgerMenu
                className="burger"
                onClick={() => setShowModal(true)}
            />
        </nav>
    );
};

export default Header;

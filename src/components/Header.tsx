import React, { useState, useEffect } from "react";

const Header = () => {
    return (
        <nav>
            <span className="headerLogo"></span>
            <div className="headerTextsWrap">
                <h1>How To Play</h1>
                <h1>Champion</h1>
            </div>
        </nav>
    );
};

export default Header;

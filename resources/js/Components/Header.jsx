import React from "react";

const Header = () => {
    return (
        <header
            id="header"
            className="header fixed-top d-flex align-items-center"
        >
            <div className="d-flex align-items-center justify-content-between">
                <a href="" className="logo d-flex align-items-center">
                    <span className="d-none d-lg-block">MNHS</span>
                </a>
                <i className="bi bi-list toggle-sidebar-btn"></i>
            </div>
        </header>
    );
};

export default Header;

import React from "react";
import NavbarContainer from "./container/common/NavbarContainer";

const Frame = ({ children }) => {
    return (
        <>
            {/* <TopbarContainer /> */}
            <NavbarContainer />
            {children}
            {/* <FooterContainer />
            <CopyrightContainer /> */}
            {/* <BackToTopButton /> */}
        </>
    );
};

const BackToTopButton = () => {
    return (
        <a
            href="#"
            className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
        >
            <i className="bi bi-arrow-up"></i>
        </a>
    );
};
export default Frame;

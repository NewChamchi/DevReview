import React from "react";
import Frame from "../Frame";
import NotFoundErrorContainer from "../container/404error/NotFoundErrorContainer";
import NotFoundErrorHeaderContainer from "../container/404error/NotFoundErrorHeaderContainer";

const NotFoundError = () => {
    return (
        <>
            <Frame>
                <NotFoundErrorHeaderContainer />
                <NotFoundErrorContainer />
            </Frame>
        </>
    );
};

export default NotFoundError;

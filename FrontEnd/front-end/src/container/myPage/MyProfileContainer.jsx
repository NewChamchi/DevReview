import React, { useEffect } from "react";
import MyProfileComponent from "../../component/myPage/MyProfileComponent";
const MyProfileContainer = () => {
    useEffect(() => {}, []);
    const propDatas = {};
    return <MyProfileComponent {...propDatas} />;
};

export default MyProfileContainer;

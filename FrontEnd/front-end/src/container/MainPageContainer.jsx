import React, { useEffect } from "react";
import MainPageComponent from "../component/MainPageComponent";
import { useNavigate } from "react-router-dom";
const MainPageContainer = () => {
    const navigate = useNavigate();

    const onNavigateQuestionList = () => {
        navigate("/QuestionList");
    };

    const onNavigateGroupList = () => {
        navigate("/GroupList");
    };
    useEffect(() => {}, []);
    const propDatas = { onNavigateQuestionList, onNavigateGroupList };
    return <MainPageComponent {...propDatas} />;
};

export default MainPageContainer;

import React, { useEffect } from "react";
import MainPageComponent from "../component/MainPageComponent";
import { useNavigate } from "react-router-dom";
const MainPageContainer = () => {
    const navigate = useNavigate();

    const onNavigateQuestionList = () => {
        navigate("/QuestionList");
    };
    useEffect(() => {}, []);
    const propDatas = { onNavigateQuestionList };
    return <MainPageComponent {...propDatas} />;
};

export default MainPageContainer;

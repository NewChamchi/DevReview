import React, { useEffect, useState } from "react";
import MyQuestionPageComponent from "../../component/myPage/MyQuestionPageComponent";

const questionDummyData = [
    {
        title: "React에서 상태 관리를 어떻게 하는가?",
        date: "2023-05-01 12:00",
        views: 120,
    },
    {
        title: "JavaScript 비동기 처리 방식에 대해 설명해주세요.",
        date: "2023-05-01 14:00",
        views: 250,
    },
    {
        title: "웹 개발에서 성능 최적화를 위한 방법은 무엇인가요?",
        date: "2023-05-02 09:00",
        views: 87,
    },
    {
        title: "Vue와 React의 차이점은 무엇인가요?",
        date: "2023-05-02 11:30",
        views: 168,
    },
    {
        title: "REST API와 GraphQL의 차이점은?",
        date: "2023-05-03 10:00",
        views: 93,
    },
    {
        title: "웹사이트에서 사용자 인증을 구현하는 방법은?",
        date: "2023-05-03 16:30",
        views: 45,
    },
    {
        title: "CSS Flexbox와 Grid의 사용 상황과 차이점은?",
        date: "2023-05-04 10:30",
        views: 130,
    },
    {
        title: "프론트엔드에서 배포를 위한 가장 좋은 방법은 무엇인가요?",
        date: "2023-05-04 14:00",
        views: 67,
    },
];

const MyQuestionPageContainer = () => {
    const [myQuestionListData, setMyQuestionListData] =
        useState(questionDummyData);
    const questionListPageCount = 5;
    useEffect(() => {}, []);
    const propDatas = { myQuestionListData, questionListPageCount };
    return <MyQuestionPageComponent {...propDatas} />;
};

export default MyQuestionPageContainer;

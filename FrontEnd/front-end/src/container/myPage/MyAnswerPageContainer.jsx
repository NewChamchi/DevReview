import React, { useEffect, useState } from "react";
import MyAnswerPageComponent from "../../component/myPage/MyAnswerPageComponent";

const answerDummyData = [
    {
        title: "React에서 상태 관리를 어떻게 하는가?에 대한 답변 1입니다.",
        date: "2023-05-01 13:00",
        views: 75,
    },
    {
        title: "JavaScript 비동기 처리 방식에 대해 설명해주세요.에 대한 답변 2입니다.",
        date: "2023-05-01 15:30",
        views: 210,
    },
    {
        title: "웹 개발에서 성능 최적화를 위한 방법은 무엇인가요?에 대한 답변 3입니다.",
        date: "2023-05-02 10:30",
        views: 62,
    },
    {
        title: "Vue와 React의 차이점은 무엇인가요?에 대한 답변 4입니다.",
        date: "2023-05-02 12:30",
        views: 134,
    },
    {
        title: "REST API와 GraphQL의 차이점은?에 대한 답변 5입니다.",
        date: "2023-05-03 11:00",
        views: 82,
    },
    {
        title: "웹사이트에서 사용자 인증을 구현하는 방법은?에 대한 답변 6입니다.",
        date: "2023-05-03 17:30",
        views: 38,
    },
    {
        title: "CSS Flexbox와 Grid의 사용 상황과 차이점은?에 대한 답변 7입니다.",
        date: "2023-05-04 10:30",
        views: 95,
    },
    {
        title: "프론트엔드에서 배포를 위한 가장 좋은 방법은 무엇인가요?에 대한 답변 8입니다.",
        date: "2023-05-04 14:00",
        views: 67,
    },
];

const MyAnswerPageContainer = () => {
    const [myAnswerListData, setMyAnswerListData] = useState(answerDummyData);
    const answerListPageCount = 5;
    useEffect(() => {}, []);
    const propDatas = { myAnswerListData, answerListPageCount };
    return <MyAnswerPageComponent {...propDatas} />;
};

export default MyAnswerPageContainer;

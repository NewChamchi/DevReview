import React, { useEffect, useState } from "react";
import QuestionListPageComponent from "../../component/board/QuestionListPageComponent";
import { useNavigate } from "react-router-dom";
const QuestionListDummyData = [
    {
        no: 1,
        title: "자바스크립트에서 배열을 어떻게 정렬하나요?",
        author: "John",
        date: "2023-04-23",
        tags: ["Javascript", "Array", "Sorting"],
        views: 23,
    },
    {
        no: 2,
        title: "Python에서 리스트를 어떻게 정렬하나요?",
        author: "Jane",
        date: "2023-04-24",
        tags: ["Python", "List", "Sorting"],
        views: 17,
    },
    {
        no: 3,
        title: "React에서 상태 관리를 어떻게 해야 하나요?",
        author: "Emma",
        date: "2023-04-22",
        tags: ["React", "State Management"],
        views: 35,
    },
    {
        no: 4,
        title: "웹 개발을 시작할 때 어떤 언어를 배워야 하나요?",
        author: "Michael",
        date: "2023-04-21",
        tags: ["Web Development", "Beginner"],
        views: 45,
    },
    {
        no: 5,
        title: "CSS에서 Flexbox와 Grid의 차이점은 무엇인가요?",
        author: "Sophia",
        date: "2023-04-20",
        tags: ["CSS", "Flexbox", "Grid"],
        views: 29,
    },
    {
        no: 6,
        title: "Node.js에서 Express 프레임워크를 사용하는 이유는 무엇인가요?",
        author: "William",
        date: "2023-04-19",
        tags: ["Node.js", "Express", "Framework"],
        views: 41,
    },
    {
        no: 7,
        title: "Vue와 React 중 어떤 프레임워크를 선택해야 할까요?",
        author: "Olivia",
        date: "2023-04-18",
        tags: ["Vue", "React", "Framework", "Comparison"],
        views: 55,
    },
    {
        no: 8,
        title: "웹 애플리케이션의 보안을 위해 어떤 조치를 취해야 하나요?",
        author: "James",
        date: "2023-04-17",
        tags: ["Web Security", "Web Application"],
        views: 38,
    },
];

const QuestionListPageContainer = () => {
    const navigation = useNavigate();
    const [questionListData, setQuestionListData] = useState(
        QuestionListDummyData
    );
    const [questionListPageCount, setQuestionListPageCount] = useState(6);

    const onWriteNewQuestion = () => {
        navigation("/questionCreate");
    };
    useEffect(() => {}, []);
    const propDatas = {
        questionListData,
        questionListPageCount,
        onWriteNewQuestion,
    };
    return <QuestionListPageComponent {...propDatas} />;
};

export default QuestionListPageContainer;

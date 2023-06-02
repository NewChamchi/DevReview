import React, { useEffect, useState } from "react";
import GroupPostListPageComponent from "../../../component/group/post/GroupPostListPageComponent";
import { useNavigate } from "react-router-dom";

const groupPostListDummyData = {
    pageCount: 5,
    currentPage: 1,
    groupArray: [
        {
            no: 1,
            title: "자바스크립트에서 배열을 어떻게 정렬하나요?",
            author: "John",
            date: "2023-04-23 10:15",
        },
        {
            no: 2,
            title: "Python에서 리스트를 어떻게 정렬하나요?",
            author: "Jane",
            date: "2023-04-24 11:30",
        },
        {
            no: 3,
            title: "React에서 상태 관리를 어떻게 해야 하나요?",
            author: "Emma",
            date: "2023-04-22 09:45",
        },
        {
            no: 4,
            title: "웹 개발을 시작할 때 어떤 언어를 배워야 하나요?",
            author: "Michael",
            date: "2023-04-21 15:00",
        },
        {
            no: 5,
            title: "CSS에서 Flexbox와 Grid의 차이점은 무엇인가요?",
            author: "Sophia",
            date: "2023-04-20 13:20",
        },
        {
            no: 6,
            title: "Node.js에서 Express 프레임워크를 사용하는 이유는 무엇인가요?",
            author: "William",
            date: "2023-04-19 12:05",
        },
        {
            no: 7,
            title: "Vue와 React 중 어떤 프레임워크를 선택해야 할까요?",
            author: "Olivia",
            date: "2023-04-18 10:50",
        },
        {
            no: 8,
            title: "웹 애플리케이션의 보안을 위해 어떤 조치를 취해야 하나요?",
            author: "James",
            date: "2023-04-17 14:30",
        },
    ],
};
const GroupPostListPageContainer = () => {
    const navigate = useNavigate();
    const [groupPostListData, setGroupPostListData] = useState({});

    const portData = async () => {
        try {
            // const response = await axios.get(
            //     "http://localhost:8080/groupPostList");
            // if (response.status !== 200) {
            //     console.error(`Error: ${response.status}`);
            //     return;
            // }
            // const data = response.data;
            setGroupPostListData(groupPostListDummyData);
        } catch (e) {
            console.log(e);
        }
    };
    const onWriteNewGroupPost = () => {
        navigate("/groupCreatePost");
    };
    useEffect(() => {
        const fetchData = async () => {
            await portData();
        };
        fetchData();
    }, []);
    const propDatas = { groupPostListData, onWriteNewGroupPost };
    return <GroupPostListPageComponent {...propDatas} />;
};

export default GroupPostListPageContainer;

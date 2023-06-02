import React, { useEffect, useState } from "react";
import GroupManagePageComponent from "../../../component/group/admin/GroupManagePageComponent";
import { useNavigate, useParams } from "react-router-dom";
const groupManageDummyData = {
    id: 1,
    groupName: "프론트엔드 개발자 모임",
    groupDescription:
        "프론트엔드 개발자들이 모여서 자유롭게 의견을 나누는 공간입니다.",

    groupNoticeTitle: "공지사항",
    groupNoticeContent:
        "프론트엔드 개발자 모임에 오신 것을 환영합니다. \n비방, 욕설, 광고 등은 자제해주세요.\n감사합니다.",

    chatRooms: [
        {
            id: 1,
            name: "일반",
            type: "normal",
            members: ["John Doe", "Jane Smith", "Alice Johnson"],
        },
        {
            id: 2,
            name: "Java 공부",
            type: "normal",
            members: ["John Doe", "Bob Parker"],
        },
        {
            id: 3,
            name: "리액트 공부",
            type: "normal",
            members: ["Alice Johnson", "Charlie Davis"],
        },
        {
            id: 4,
            name: "강의",
            type: "screen",
            members: ["Jane Smith", "Charlie Davis", "Bob Parker"],
        },
        {
            id: 5,
            name: "잡담",
            type: "microphone",
            members: ["John Doe", "Jane Smith", "Alice Johnson"],
        },
        {
            id: 1,
            name: "일반",
            type: "normal",
            members: ["John Doe", "Jane Smith", "Alice Johnson"],
        },
        {
            id: 2,
            name: "Java 공부",
            type: "normal",
            members: ["John Doe", "Bob Parker"],
        },
        {
            id: 3,
            name: "리액트 공부",
            type: "normal",
            members: ["Alice Johnson", "Charlie Davis"],
        },
        {
            id: 4,
            name: "강의",
            type: "screen",
            members: ["Jane Smith", "Charlie Davis", "Bob Parker"],
        },
        {
            id: 5,
            name: "잡담",
            type: "microphone",
            members: ["John Doe", "Jane Smith", "Alice Johnson"],
        },
    ],
};

const GroupManagePageContainer = () => {
    const navigate = useNavigate();
    const [groupName, setGroupName] = useState("");
    const [groupDescription, setGroupDescription] = useState("");
    const [groupNoticeTitle, setGroupNoticeTitle] = useState("");
    const [groupNoticeContent, setGroupNoticeContent] = useState("");
    const [chatRooms, setChatRooms] = useState([]);
    const param = useParams();
    const portData = async () => {
        try {
            // param.id를 활용해서 관련된 post 데이터를 가져온다.
            // api 써야함
            setGroupName(groupManageDummyData.groupName);
            setGroupDescription(groupManageDummyData.groupDescription);
            setChatRooms(groupManageDummyData.chatRooms);
            setGroupNoticeTitle(groupManageDummyData.groupNoticeTitle);
            setGroupNoticeContent(groupManageDummyData.groupNoticeContent);
        } catch (error) {
            console.error(error);
        }
    };

    const onUpdateGroup = async () => {
        try {
            // 데이터 post api 작성해야함
            alert("그룹 정보가 수정되었습니다.");
            window.history.back();
        } catch (error) {
            console.error(error);
        }
    };

    const onDeleteGroup = async () => {
        try {
            // 데이터 delete api 작성해야함
            alert("그룹이 삭제되었습니다.");
            navigate("/groupList");
        } catch (error) {
            console.error(error);
        }
    };

    const onExileMember = () => {
        navigate(`/groupExile/${param.id}`);
    };
    useEffect(() => {
        const fetchData = async () => {
            await portData();
        };
        fetchData();
    }, []);
    const propDatas = {
        groupName,
        groupDescription,
        groupNoticeTitle,
        groupNoticeContent,
        chatRooms,
        setGroupName,
        setGroupDescription,
        setGroupNoticeTitle,
        setGroupNoticeContent,
        setChatRooms,
        onUpdateGroup,
        onDeleteGroup,
        onExileMember,
    };
    return <GroupManagePageComponent {...propDatas} />;
};

export default GroupManagePageContainer;

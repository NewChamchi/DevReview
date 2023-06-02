import React, { useEffect, useState } from "react";
import GroupListPageComponent from "../../component/group/GroupListPageComponent";
import { useRecoilValue } from "recoil";
import { rc_user_informationAtom } from "../../recoil/atoms";
import { useNavigate } from "react-router-dom";

const groupListDummyData = {
    pageCount: 5,
    currentPage: 1,
    groupArray: [
        {
            id: 1,
            name: "알고리즘 스터디",
            description:
                "알고리즘에 대해 깊게 배우고, 문제를 해결하는 스터디입니다.",
            members: [
                { id: 1, name: "이정민" },
                { id: 2, name: "김유진" },
                { id: 3, name: "박지호" },
                { id: 4, name: "이현수" },
                { id: 5, name: "이지수" },
            ],
            posts: [
                {
                    id: 1,
                    title: "다익스트라 알고리즘에 대한 논의",
                    author: "이정민",
                },
                {
                    id: 2,
                    title: "BFS vs DFS, 언제 무엇을 사용해야할까?",
                    author: "김유진",
                },
                {
                    id: 3,
                    title: "빅오 표기법 쉽게 이해하기",
                    author: "박지호",
                },
            ],
        },
        {
            id: 2,
            name: "웹 개발 모임",
            description:
                "웹 개발에 관한 실용적인 지식을 공유하고 프로젝트를 함께 진행합니다.",
            members: [
                { id: 6, name: "김현수" },
                { id: 7, name: "이승훈" },
                { id: 8, name: "박혜진" },
                { id: 9, name: "이서진" },
                { id: 10, name: "정수민" },
            ],
            posts: [
                {
                    id: 4,
                    title: "React와 Vue, 어떤 프레임워크가 나을까?",
                    author: "김현수",
                },
                {
                    id: 5,
                    title: "웹팩 설정 가이드",
                    author: "이승훈",
                },
                {
                    id: 6,
                    title: "Next.js의 장점에 대해 알아보자",
                    author: "박혜진",
                },
            ],
        },
        {
            id: 3,
            name: "데이터 분석 모임",
            description:
                "데이터 분석에 대한 이론과 실제를 공부하는 모임입니다.",
            members: [
                { id: 11, name: "김나영" },
                { id: 12, name: "이승원" },
                { id: 13, name: "박정훈" },
                { id: 14, name: "이현우" },
                { id: 15, name: "이지민" },
            ],
            posts: [
                {
                    id: 7,
                    title: "R vs Python, 어떤 언어를 선택해야 할까?",
                    author: "김나영",
                },
                {
                    id: 8,
                    title: "Pandas 기본 사용법",
                    author: "이승원",
                },
                {
                    id: 9,
                    title: "데이터 시각화 도구 Matplotlib 가이드",
                    author: "박정훈",
                },
            ],
        },
        {
            id: 4,
            name: "인공지능 모임",
            description:
                "인공지능의 기본 원리를 배우고 최신 연구 동향을 공유하는 모임입니다.",
            members: [
                { id: 16, name: "박서현" },
                { id: 17, name: "김현우" },
                { id: 18, name: "이준석" },
                { id: 19, name: "최은지" },
                { id: 20, name: "김재현" },
            ],
            posts: [
                {
                    id: 10,
                    title: "딥러닝과 머신러닝의 차이점",
                    author: "박서현",
                },
                {
                    id: 11,
                    title: "인공지능의 이해를 위한 기본 개념",
                    author: "김현우",
                },
                {
                    id: 12,
                    title: "TensorFlow 2.0 기초",
                    author: "이준석",
                },
            ],
        },
        {
            id: 5,
            name: "시스템 프로그래밍 모임",
            description:
                "시스템 프로그래밍에 대해 이해하고, 실력을 키우는 스터디입니다.",
            members: [
                { id: 21, name: "이진호" },
                { id: 22, name: "박진수" },
                { id: 23, name: "이예진" },
                { id: 24, name: "김민지" },
                { id: 25, name: "박서연" },
            ],
            posts: [
                {
                    id: 13,
                    title: "운영체제의 역할이란?",
                    author: "이진호",
                },
                {
                    id: 14,
                    title: "프로세스 vs 스레드",
                    author: "박진수",
                },
                {
                    id: 15,
                    title: "메모리 관리 기법",
                    author: "이예진",
                },
            ],
        },
        {
            id: 6,
            name: "데이터베이스 스터디",
            description: "데이터베이스 설계와 쿼리 작성을 배우는 스터디입니다.",
            members: [
                { id: 26, name: "정소영" },
                { id: 27, name: "김동현" },
                { id: 28, name: "이성민" },
                { id: 29, name: "김지영" },
                { id: 30, name: "박성민" },
            ],
            posts: [
                {
                    id: 16,
                    title: "SQL vs NoSQL, 어떤 것을 선택해야 할까?",
                    author: "정소영",
                },
                {
                    id: 17,
                    title: "데이터베이스 인덱스의 중요성",
                    author: "김동현",
                },
                {
                    id: 18,
                    title: "ORM과 쿼리 작성법",
                    author: "이성민",
                },
            ],
        },
        {
            id: 7,
            name: "네트워크 공부모임",
            description:
                "네트워크 원리를 배우고, 최신 기술 트렌드를 파악하는 모임입니다.",
            members: [
                { id: 31, name: "최현우" },
                { id: 32, name: "정지영" },
                { id: 33, name: "이하영" },
                { id: 34, name: "김민수" },
                { id: 35, name: "박소영" },
            ],
            posts: [
                {
                    id: 19,
                    title: "TCP/IP 프로토콜 스택 이해하기",
                    author: "최현우",
                },
                {
                    id: 20,
                    title: "HTTP vs HTTPS",
                    author: "정지영",
                },
                {
                    id: 21,
                    title: "네트워크 보안 기본 지식",
                    author: "이하영",
                },
            ],
        },
        {
            id: 8,
            name: "블록체인 기술 모임",
            description:
                "블록체인 기술에 대해 배우고, 실제 애플리케이션을 만드는 모임입니다.",
            members: [
                { id: 36, name: "김하늘" },
                { id: 37, name: "박지민" },
                { id: 38, name: "이지연" },
                { id: 39, name: "최민호" },
                { id: 40, name: "김윤지" },
            ],
            posts: [
                {
                    id: 22,
                    title: "블록체인의 기본 원리 이해하기",
                    author: "김하늘",
                },
                {
                    id: 23,
                    title: "비트코인과 이더리움의 차이점",
                    author: "박지민",
                },
                {
                    id: 24,
                    title: "스마트 컨트랙트 개발 방법",
                    author: "이지연",
                },
            ],
        },
    ],
};
const GroupListPageContainer = () => {
    const navigate = useNavigate();
    const [groupListData, setGroupListData] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showMemberList, setShowMemberList] = useState(false);
    const [showPostList, setShowPostList] = useState(false);
    const [modalGroupDataId, setModalGroupDataId] = useState(null);
    // const myId = 1; // 로그인한 사용자의 임시 아이디
    const { id: myId } = useRecoilValue(rc_user_informationAtom);

    const portData = async () => {
        try {
            // const response = await axios.get("http://localhost:8080/group");
            // if (response.status !== 200) {
            //     console.error(`Error: ${response.status}`);
            //     return;
            // }
            // const data = response.data;
            setGroupListData(groupListDummyData);
        } catch (error) {
            console.error(error);
        }
    };
    const onOpenModal = (groupId) => {
        setModalGroupDataId(groupId);
        setIsModalOpen(true);
    };

    const onCloseModal = () => {
        setModalGroupDataId(null);
        setIsModalOpen(false);
        setShowMemberList(false);
        setShowPostList(false);
    };

    const onJoinGroup = (groupId, userId) => {
        window.confirm("모임 가입 신청을 하시겠습니까?");
        // 모임 가입 로직 처리
        console.log("Group joined!");
    };

    const onLeaveGroup = (groupId, userId) => {
        window.confirm("모임 탈퇴를 하시겠습니까?");
        // 모임 탈퇴 로직 처리
        console.log("Group left!");
    };

    const onGetIntoGroup = (groupId) => {
        // 모임 진입 로직
        console.log("Get into group!");
    };

    const onCreateNewGroup = () => {
        navigate("/groupCreate");
    };
    useEffect(() => {
        const fetchData = async () => {
            await portData();
        };
        fetchData();
    }, []);

    const propDatas = {
        groupListData,
        isModalOpen,
        showMemberList,
        showPostList,
        modalGroupDataId,
        myId,
        setGroupListData,
        setIsModalOpen,
        setShowMemberList,
        setShowPostList,
        setModalGroupDataId,
        onOpenModal,
        onCloseModal,
        onJoinGroup,
        onLeaveGroup,
        onGetIntoGroup,
        onCreateNewGroup,
    };
    return <GroupListPageComponent {...propDatas} />;
};

export default GroupListPageContainer;

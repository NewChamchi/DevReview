import React, { useEffect, useState } from "react";
import GroupPostPageComponent from "../../../component/group/post/GroupPostPageComponent";
import { useRecoilValue } from "recoil";
import { rc_user_informationAtom } from "../../../recoil/atoms";
import { useNavigate } from "react-router-dom";
const groupPostDummyData = {
    id: 1,
    title: "자바스크립트에서 배열을 정렬하는 법",
    author: "John",
    date: "2023-04-23 10:15",
    content:
        "배열을 정렬하는 것은 프로그래밍에서 중요한 개념 중 하나입니다. <br />JavaScript에서는 Array 객체의 sort 메소드를 사용하여 배열을 정렬할 수 있습니다. 이 메소드는 기본적으로 문자열 유니코드 포인트에 따라 배열을 정렬합니다. 따라서 숫자 배열을 정렬하려면 비교 함수를 제공해야 합니다.<br />이 비교 함수는 두 인수를 받아 첫 번째 인수가 두 번째 인수보다 작으면 음수, 같으면 0, 크면 양수를 반환합니다. 이렇게 하면 숫자를 기대한 대로 정렬할 수 있습니다.<br />이외에도 배열에 객체가 있고 이를 특정 속성에 따라 정렬하려는 경우, 비교 함수를 사용하여 해당 속성에 대한 비교를 수행할 수 있습니다.",
};
const GroupPostPageContainer = () => {
    const navigate = useNavigate();
    const [groupPostData, setGroupPostData] = useState({});
    const { name: myName } = useRecoilValue(rc_user_informationAtom);
    const portData = async () => {
        try {
            // const response = await axios.get("/api/group/post");
            // if (response.status !== 200) {
            //     console.error(`Error: ${response.status}`);
            //     return;
            // }
            // const data = response.data;
            setGroupPostData(groupPostDummyData);
        } catch (error) {
            console.error(error);
        }
    };
    const onEditPost = (postId) => {
        console.log("postId: ", postId);
    };
    const onDeletePost = (groupId) => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            // 삭제하는 api 호출
            window.history.back();
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            await portData();
            console.log("myName: ", myName);
        };
        fetchData();
    }, []);

    const propDatas = {
        myName,
        groupPostData,
        setGroupPostData,
        onEditPost,
        onDeletePost,
    };
    return <GroupPostPageComponent {...propDatas} />;
};

export default GroupPostPageContainer;

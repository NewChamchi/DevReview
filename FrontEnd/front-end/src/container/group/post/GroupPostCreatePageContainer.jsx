import React, { useEffect } from "react";
import GroupPostCreatePageComponent from "../../../component/group/post/GroupPostCreatePageComponent";
const GroupPostCreatePageContainer = () => {
    useEffect(() => {}, []);

    const modules = {
        toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            ["link", "image"],
            ["clean"],
        ],
    };
    const propDatas = {
        modules,
    };
    return <GroupPostCreatePageComponent {...propDatas} />;
};

export default GroupPostCreatePageContainer;

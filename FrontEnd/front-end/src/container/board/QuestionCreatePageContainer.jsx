import React, { useEffect, useState } from "react";
import QuestionCreatePageComponent from "../../component/board/QuestionCreatePageComponent";
import { useNavigate } from "react-router-dom";
const QuestionCreatePageContainer = () => {
    const navigate = useNavigate();
    // Quill Editor를 위한 설정
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

    const [tags, setTags] = useState([]); // 태그를 저장할 상태 변수 추가
    const [inputValue, setInputValue] = useState(""); // 입력 값 저장 상태 변수 추가

    const [isChatGPTUsing, setIsChatGPTUsing] = useState(false);

    const onEditorChange = (content) => {
        setValue(content);
    };

    const onTagChange = (e) => {
        setInputValue(e.target.value);
    };

    const onTagEnter = () => {
        if (inputValue.trim() !== "") {
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    };

    const onTagDelete = (index) => {
        // 선택한 인덱스의 태그를 제거한 새 배열을 생성합니다.
        const newTags = tags.filter((_, i) => i !== index);

        // 태그 배열을 업데이트합니다.
        setTags(newTags);
    };

    const onCompleteWriting = () => {
        // 여기에 질문 작성을 처리하는 로직을 추가하세요.
        navigate("/questionList");
    };
    useEffect(() => {
        console.log("isChatGPTUsing :", isChatGPTUsing);
    }, [isChatGPTUsing]);
    const propDatas = {
        modules,
        tags,
        inputValue,
        isChatGPTUsing,
        setIsChatGPTUsing,
        onEditorChange,
        onTagChange,
        onTagEnter,
        onTagDelete,
        onCompleteWriting,
    };
    return <QuestionCreatePageComponent {...propDatas} />;
};

export default QuestionCreatePageContainer;

//params 추가
import React, { useEffect, useState } from "react";
import QuestionUpdatePageComponent from "../../component/board/QuestionUpdatePageComponent";
import { useParams } from "react-router-dom";
const questionDummyData = {
    title: "React에서 상태 관리 라이브러리 사용 방법",
    author: "Jane Smith",
    date: "2023-05-03",
    tags: ["React", "Redux", "MobX"],
    content: `
      <p>안녕하세요! React 프로젝트를 진행하면서 상태 관리 라이브러리를 사용하려고 합니다.</p>
      <p>Redux와 MobX 중 어떤 것을 사용하는 것이 좋을까요? 각 라이브러리의 장단점에 대해 알려주시면 감사하겠습니다.</p>
      <p>또한, 선택한 라이브러리를 React 프로젝트에 통합하는 방법에 대해서도 조언을 구하고 싶습니다.</p>
      <p>감사합니다!</p>
    `,
};
const QuestionUpdatePageContainer = () => {
    // http의 url에서 param을 가져오기 위해 useParams() 사용
    const { id } = useParams();

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

    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        // questionDummyData 로드
        setTitle(questionDummyData.title);
        setValue(questionDummyData.content);
        setTags(questionDummyData.tags);
    }, []);

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    };

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
        const newTags = tags.filter((_, i) => i !== index);
        setTags(newTags);
    };

    const onSave = () => {
        // 여기에 질문 수정을 처리하는 로직을 추가하세요.
        // 예를 들면, API 호출이나 상태 업데이트 등이 포함될 수 있습니다.
        console.log("질문이 수정되었습니다.");
        console.log("제목:", title);
        console.log("내용:", value);
        console.log("태그:", tags);
    };

    const propDatas = {
        title,
        modules,
        value,
        tags,
        inputValue,
        onTitleChange,
        onEditorChange,
        onTagChange,
        onTagEnter,
        onTagDelete,
        onSave,
    };

    return <QuestionUpdatePageComponent {...propDatas} />;
};

export default QuestionUpdatePageContainer;

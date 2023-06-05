import React, { useEffect, useState } from "react";
import QuestionCreatePageComponent from "../../component/board/QuestionCreatePageComponent";
import { useNavigate } from "react-router-dom";
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
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
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const sendingPost = `제목 : ${title}\n내용 : ${content}`;

    const onTitleChange = (e) => {
        setTitle(e.target.value);
        console.log(title);
    } 

    const onEditorChange = (content) => {
        setContent(content);
        console.log(content);
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
        //여기에 질문 작성을 처리하는 로직을 추가하세요.
        axios({
            method: "POST",
            url: "/api/question/create",
            data: {
                "title": title,
                "content": content,
                "author": "kim",
                "tags": tags
            }
        })
        .then(res=>{
            console.log(res.data)
            return res.data.responseData.redirect;
        })
        .catch(function (err) {
            if (err.response) {
                console.log(err);
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.header);
            }
        });

        const chat = async (sendingPost) => {
            console.log(sendingPost);
            const configuration = new Configuration({
                apiKey: import.meta.env.VITE_OPENAI_API_KEY,
            });
            const openai = new OpenAIApi(configuration);
            try {
                const response = await openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: sendingPost,
                    max_tokens: 4000,
                    n: 1,
                    stop: null,
                    temperature: 0,
                });
                console.log('chatGPT 응답: ' + response.data.choices[0].text);
                return response.data.choices[0].text;
            } catch (error) {
                console.log('Error: ' + error.message);
                return error.message;
            }
        }
   
        if (isChatGPTUsing) { chat(sendingPost) };

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
        onTitleChange,
        onEditorChange,
        onTagChange,
        onTagEnter,
        onTagDelete,
        onCompleteWriting,
    };
    return <QuestionCreatePageComponent {...propDatas} />;
};

export default QuestionCreatePageContainer;

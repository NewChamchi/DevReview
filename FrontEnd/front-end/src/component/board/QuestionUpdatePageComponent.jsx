import React from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

const QuestionUpdatePageComponent = (props) => {
    const {
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
    } = props;

    return (
        <QuestionUpdatePageComponentBlock>
            <h2 style={{ marginBottom: "40px" }}>질문 수정</h2>
            <input
                type="text"
                value={title}
                onChange={onTitleChange}
                placeholder="제목을 입력하세요."
                style={{ marginBottom: "10px", width: "50%" }}
            />
            <ReactQuill
                value={value}
                onChange={onEditorChange}
                modules={modules}
                style={{ height: "500px" }}
            />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "50px",
                }}
            >
                <div className="input-container" style={{ width: "70%" }}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={onTagChange}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                onTagEnter();
                            }
                        }}
                        placeholder="태그 입력 (쉼표로 구분)"
                        style={{ marginRight: "8px" }}
                    />
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                            <span
                                className="delete-tag"
                                onClick={() => {
                                    onTagDelete(index);
                                }}
                                style={{
                                    fontSize: "10px",
                                }}
                            >
                                ❌
                            </span>
                        </span>
                    ))}
                </div>
                <button onClick={onSave}>저장</button>
            </div>
        </QuestionUpdatePageComponentBlock>
    );
};

const QuestionUpdatePageComponentBlock = styled.div`
    width: 50%;
    max-width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 115px;

    .input-container {
        display: flex;
        align-items: center;
    }
    input {
        padding: 5px 10px;
    }

    .tag {
        background-color: #007bff;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        margin-right: 4px;
        display: inline-block;
    }

    .delete-tag {
        cursor: pointer;
        margin-left: 4px;
    }
    // React Quill Editor에 대한 스타일
    .ql-editor .ql-syntax {
        background-color: #f8f8f8;
        border-radius: 4px;
        padding: 5px;
        white-space: pre-wrap;
        font-family: "Source Code Pro", monospace;
    }

    button {
        background-color: #4caf50;
        border: none;
        color: white;
        padding: 8px 16px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 0 2px;
        cursor: pointer;
        border-radius: 4px;
        transition-duration: 0.4s;
    }

    button:hover {
        background-color: #45a049;
    }
`;

export default QuestionUpdatePageComponent;

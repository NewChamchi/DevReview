import React from "react";
import ReactQuill from "react-quill";
import styled from "styled-components";

const GroupPostCreatePageComponent = (props) => {
    const { modules } = props;

    return (
        <GroupPostCreatePageComponentBlock>
            <h2 style={{ marginBottom: "40px" }}>게시글 작성</h2>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                }}
            >
                <input
                    type="text"
                    placeholder="제목을 입력하세요."
                    style={{ marginRight: "10px", width: "50%" }}
                />
            </div>
            <ReactQuill modules={modules} style={{ height: "500px" }} />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "50px",
                }}
            >
                <button
                    onClick={() => {
                        // 업로드 로직 구현 (따로 이벤트 함수 빼두는 게 좋음. 지금은 임시 처리)
                        window.history.back();
                    }}
                >
                    업로드
                </button>
            </div>
        </GroupPostCreatePageComponentBlock>
    );
};

const GroupPostCreatePageComponentBlock = styled.div`
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
export default GroupPostCreatePageComponent;

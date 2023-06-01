import React from "react";
import styled from "styled-components";

const GroupPostPageComponent = (props) => {
    const {} = props;
    return (
        <GroupPostPageComponentBlock>
            <div className="post-container question">
                <div className="post-header">
                    <h2>
                        <span className="post-indicator">Q</span>{" "}
                        {"자바스크립트에서 배열을 정렬하는 법"}
                    </h2>
                    <div className="post-info">
                        <span>{"John"}</span> |{" "}
                        <span>{"2023-04-23 10:15"}</span>
                    </div>
                </div>

                <div
                    className="post-content"
                    dangerouslySetInnerHTML={{
                        __html: "배열을 정렬하는 것은 프로그래밍에서 중요한 개념 중 하나입니다. <br />JavaScript에서는 Array 객체의 sort 메소드를 사용하여 배열을 정렬할 수 있습니다. 이 메소드는 기본적으로 문자열 유니코드 포인트에 따라 배열을 정렬합니다. 따라서 숫자 배열을 정렬하려면 비교 함수를 제공해야 합니다.<br />이 비교 함수는 두 인수를 받아 첫 번째 인수가 두 번째 인수보다 작으면 음수, 같으면 0, 크면 양수를 반환합니다. 이렇게 하면 숫자를 기대한 대로 정렬할 수 있습니다.<br />이외에도 배열에 객체가 있고 이를 특정 속성에 따라 정렬하려는 경우, 비교 함수를 사용하여 해당 속성에 대한 비교를 수행할 수 있습니다.",
                    }}
                />
                <div className="post-actions">
                    <button className="edit-button">수정</button>
                    <button className="delete-button">삭제</button>
                </div>
            </div>
        </GroupPostPageComponentBlock>
    );
};

const GroupPostPageComponentBlock = styled.div`
    width: 80%;
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 115px;

    .post-container {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 20px;
        text-align: left;
        background-color: #ffffff;
        margin-bottom: 50px;
    }

    .post-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        border-bottom: 1px solid #ccc; // 경계선 추가
        padding-bottom: 15px; // 제목과 경계선 간의 간격 추가
    }

    .post-indicator {
        font-size: 24px;
        color: #1976d2;
        margin-right: 10px;
    }

    .post-info {
        font-size: 14px;
        color: #777;
        margin-top: 40px;
    }

    .post-tags {
        display: inline-block;
        margin-right: 10px;
    }

    .tag {
        background-color: #007bff;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        margin-right: 4px;
        display: inline-block;
        font-size: 14px;
    }

    .post-content {
        margin-top: 40px;
    }

    .post-actions {
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
    }

    .edit-button,
    .delete-button {
        background-color: #1976d2;
        border: none;
        color: white;
        padding: 5px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        margin: 0 2px;
        cursor: pointer;
        border-radius: 4px;
        transition-duration: 0.4s;
    }

    .delete-button {
        background-color: #f44336;
    }

    .edit-button:hover {
        background-color: #115293;
    }

    .delete-button:hover {
        background-color: #d32f2f;
    }

    .add-answer-button {
        width: 100%;
        background-color: #1976d2;
        border: none;
        color: white;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 18px;
        margin: 0 2px;
        cursor: pointer;
        border-radius: 4px;
        transition-duration: 0.4s;
        margin-bottom: 50px;
        position: relative;
        right: 0;
    }

    .add-answer-button:hover {
        background-color: #115293;
    }

    .answer-editor {
        margin-bottom: 50px;
        text-align: center;
    }

    .answer-editor .submit-answer {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
    // React Quill Editor에 대한 스타일
    .ql-editor .ql-syntax {
        background-color: #f8f8f8;
        border-radius: 4px;
        padding: 5px;
        white-space: pre-wrap;
        font-family: "Source Code Pro", monospace;
    }
    .submit-answer button {
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
        margin-top: 50px;
    }

    .submit-answer button:hover {
        background-color: #45a049;
    }

    .comment-input-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 10px;
        background-color: #f8f9fa;
    }

    .comment-input {
        width: 100%;
        height: 100px;
        padding: 10px;
        margin-bottom: 10px;
        border: none;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        font-size: 16px;
        resize: vertical;
    }

    .comment-input:focus {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0, 0, 0, 0.24);
    }

    .comment-submit-button {
        height: 40px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 0 15px;
        cursor: pointer;
        font-size: 16px;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .comment-submit-button:hover {
        background-color: #0056b3;
    }

    .comments-section {
        margin-top: 30px;
    }

    .comment {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin-top: 20px;
        background-color: #f8f9fa;
    }

    .comment-header {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #777;
        border-bottom: 1px solid #ccc;
        padding-bottom: 5px;
    }

    .comment-content {
        margin-top: 10px;
    }
`;
export default GroupPostPageComponent;

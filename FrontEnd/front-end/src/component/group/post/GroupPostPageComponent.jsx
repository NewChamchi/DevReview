import React from "react";
import styled from "styled-components";

const GroupPostPageComponent = (props) => {
    const {
        myName,
        groupPostData,
        setGroupPostData,
        onEditPost,
        onDeletePost,
    } = props;
    return (
        <GroupPostPageComponentBlock>
            <div className="post-container">
                <div className="post-header">
                    <h2>
                        <span className="post-indicator">Q</span>{" "}
                        {groupPostData.title}
                    </h2>
                    <div className="post-info">
                        <span>{groupPostData.author}</span> |{" "}
                        <span>{groupPostData.date}</span>
                    </div>
                </div>

                <div
                    className="post-content"
                    dangerouslySetInnerHTML={{
                        __html: groupPostData.content,
                    }}
                />
                <div className="post-actions">
                    {myName === groupPostData.author && (
                        <>
                            <button
                                className="edit-button"
                                onClick={() => onEditPost(groupPostData.id)}
                            >
                                수정
                            </button>
                            <button
                                className="delete-button"
                                onClick={() => onDeletePost()}
                            >
                                삭제
                            </button>
                        </>
                    )}
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

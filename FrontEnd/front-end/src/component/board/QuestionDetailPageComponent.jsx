import React from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuestionDetailPageComponent = (props) => {
    const {
        questionData,
        answerData,
        modules,
        showAnswerEditor,
        setShowAnswerEditor,
        onQuestionDelete,
        onAnswerDelete,
        onToggleAnswerEditor,
    } = props;

    return (
        <QuestionDetailPageComponentBlock>
            <div className="post-container question">
                <div className="post-header">
                    <h2>
                        <span className="post-indicator">Q</span>{" "}
                        {questionData.title}
                    </h2>
                    <div className="post-info">
                        <div className="post-tags">
                            {questionData.tags.map((tag, index) => (
                                <span key={index} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <span>{questionData.author}</span> |{" "}
                        <span>{questionData.date}</span>
                    </div>
                </div>

                <div
                    className="post-content"
                    dangerouslySetInnerHTML={{ __html: questionData.content }}
                />
                <div className="post-actions">
                    <button className="edit-button">수정</button>
                    <button
                        className="delete-button"
                        onClick={onQuestionDelete}
                    >
                        삭제
                    </button>
                </div>
            </div>
            <button
                className="add-answer-button"
                onClick={onToggleAnswerEditor}
            >
                답변 달기
            </button>
            {showAnswerEditor && (
                <div className="answer-editor">
                    <ReactQuill
                        style={{ height: "300px", marginBottom: "20px" }}
                        modules={modules}
                    />
                    <div className="submit-answer">
                        <button>등록</button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setShowAnswerEditor(false);
                            }}
                        >
                            취소
                        </button>
                    </div>
                </div>
            )}
            {answerData.map((answer, index) => (
                <div key={index} className="post-container answer">
                    <div className="post-header">
                        <h2>
                            <span className="post-indicator">A</span> 답변{" "}
                            {index + 1}
                        </h2>
                        <div className="post-info">
                            <span>{answer.author}</span> |{" "}
                            <span>{answer.date}</span>
                        </div>
                    </div>
                    <div
                        className="post-content"
                        dangerouslySetInnerHTML={{ __html: answer.content }}
                    />
                    <div className="post-actions">
                        <button className="edit-button">수정</button>
                        <button
                            className="delete-button"
                            onClick={(index) => {
                                onAnswerDelete(index);
                            }}
                        >
                            삭제
                        </button>
                    </div>
                </div>
            ))}
        </QuestionDetailPageComponentBlock>
    );
};

const QuestionDetailPageComponentBlock = styled.div`
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
`;

export default QuestionDetailPageComponent;

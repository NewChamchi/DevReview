import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const QuestionListPageComponent = (props) => {
    const { questionListData, questionListPageCount, onWriteNewQuestion } =
        props;
    return (
        <QuestionListPageComponentBlock>
            <div className="search-container">
                <input
                    className="search-input"
                    type="text"
                    placeholder="질문 및 답변, 모임 검색"
                />
                <button className="search-button">검색</button>
            </div>
            <h2>질문 목록</h2>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일시</th>
                        <th>태그</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {questionListData.map((data) => (
                        <tr key={data.no}>
                            <td>{data.no}</td>
                            <td>
                                <NavLink
                                    to={`/questionDetail/${data.no}`}
                                    activeClassName="active"
                                >
                                    {data.title}
                                </NavLink>
                            </td>
                            <td>{data.author}</td>
                            <td>{data.date}</td>
                            <td className="tag-container">
                                {data.tags.map((tag, index) => (
                                    <div key={index} className="tag">
                                        {tag}
                                    </div>
                                ))}
                            </td>
                            <td>{data.views}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                {Array.from({ length: questionListPageCount }, (_, i) => (
                    <span key={i} className="page-item">
                        {i + 1}
                    </span>
                ))}
            </div>
            <button className="write-button" onClick={onWriteNewQuestion}>
                새 질문 작성
            </button>
        </QuestionListPageComponentBlock>
    );
};

const QuestionListPageComponentBlock = styled.div`
    width: 80%;
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 115px;
    .search-container {
        display: flex;
        justify-content: flex-end;
        margin-right: 50px;
        margin-bottom: 25px;
    }
    .search-input {
        width: 250px;
        padding: 5px 10px;
        margin-right: 25px;
    }
    .search-button {
        padding: 5px 10px;
        margin-left: 5px;
        background-color: #1976d2;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s;
    }
    .search-button:hover {
        background-color: #115293;
    }
    h2 {
        margin-bottom: 30px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        text-align: left;
    }

    th,
    td {
        padding: 10px;
        border-bottom: 1px solid #ccc;
    }

    th {
        background-color: #f5f5f5;
        color: #333;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    a:hover {
        color: #1976d2;
        cursor: pointer;
    }

    .tag-container {
        display: flex;
        flex-wrap: wrap;
    }

    .tag {
        display: inline-block;
        padding: 3px 6px;
        background-color: #1976d2;
        color: white;
        border-radius: 4px;
        margin: 2px;
        font-size: 12px;
    }
    .pagination {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .page-item {
        margin: 0 5px;
        cursor: pointer;
        &:hover {
            color: #007bff;
        }
    }

    .write-button {
        margin-top: 30px;
        width: 200px;
        padding: 8px 16px;
        font-weight: bold;
        align-self: flex-end;
        cursor: pointer;

        background-color: #1976d2;
        color: white;
        border: none;
        border-radius: 4px;
        transition: background-color 0.2s;
        &:hover {
            background-color: #0056b3;
        }
    }
`;

export default QuestionListPageComponent;

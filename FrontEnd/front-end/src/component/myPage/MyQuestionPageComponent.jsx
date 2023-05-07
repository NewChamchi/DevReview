import React from "react";
import styled from "styled-components";

const MyQuestionPageComponent = (props) => {
    const { myQuestionListData, questionListPageCount } = props;

    return (
        <MyQuestionListPageComponentBlock>
            <h2>내가 작성한 질문 목록</h2>
            <table>
                <thead>
                    <tr>
                        <th>선택</th>
                        <th>제목</th>
                        <th>작성일시</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {myQuestionListData.map((data) => (
                        <tr key={data.no}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <a href={`/question/${data.no}`}>
                                    {data.title}
                                </a>
                            </td>
                            <td>{data.date}</td>
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
            <button className="delete-button">선택한 질문 삭제</button>
        </MyQuestionListPageComponentBlock>
    );
};

const MyQuestionListPageComponentBlock = styled.div`
    width: 80%;
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 115px;
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

    .delete-button {
        margin-top: 30px;
        width: 200px;
        padding: 8px 16px;
        font-weight: bold;
        align-self: flex-end;
        cursor: pointer;

        background-color: #f44336;
        color: white;
        border: none;
        border-radius: 4px;
        transition: background-color 0.2s;
        &:hover {
            background-color: #d32f2f;
        }
    }
`;

export default MyQuestionPageComponent;

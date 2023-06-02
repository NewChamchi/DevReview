import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const GroupPostListPageComponent = (props) => {
    const { groupPostListData, onWriteNewGroupPost } = props;

    return (
        <GroupPostListPageComponentBlock>
            <div className="search-container">
                <input
                    className="search-input"
                    type="text"
                    placeholder="질문 및 답변, 모임 검색"
                />
                <button className="search-button">검색</button>
            </div>
            <h2>모임 내 게시글 목록</h2>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일시</th>
                    </tr>
                </thead>
                <tbody>
                    {groupPostListData.groupArray?.map((data) => (
                        <tr key={data.no}>
                            <td>{data.no}</td>
                            <td>
                                <NavLink
                                    to={`/groupPost/${data.no}`}
                                    activeClassName="active"
                                >
                                    {data.title}
                                </NavLink>
                            </td>
                            <td>{data.author}</td>
                            <td>{data.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                {Array.from({ length: groupPostListData.pageCount }, (_, i) => (
                    <span
                        key={i}
                        className={`page-item ${
                            groupPostListData.currentPage === i + 1
                                ? "page-item-active"
                                : ""
                        }`}
                    >
                        {i + 1}
                    </span>
                ))}
            </div>
            <button className="write-button" onClick={onWriteNewGroupPost}>
                게시글 작성
            </button>
        </GroupPostListPageComponentBlock>
    );
};

const GroupPostListPageComponentBlock = styled.div`
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

    .pagination {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .page-item {
        margin: 0 5px;
        font-size: 25px;
        cursor: pointer;
        &:hover {
            color: #007bff;
        }
    }

    .page-item-active {
        color: #007bff;
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
export default GroupPostListPageComponent;

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const GroupPostListPageComponent = (props) => {
    const {} = props;
    const groupPostListDummyData = [
        {
            no: 1,
            title: "자바스크립트에서 배열을 어떻게 정렬하나요?",
            author: "John",
            date: "2023-04-23 10:15",
        },
        {
            no: 2,
            title: "Python에서 리스트를 어떻게 정렬하나요?",
            author: "Jane",
            date: "2023-04-24 11:30",
        },
        {
            no: 3,
            title: "React에서 상태 관리를 어떻게 해야 하나요?",
            author: "Emma",
            date: "2023-04-22 09:45",
        },
        {
            no: 4,
            title: "웹 개발을 시작할 때 어떤 언어를 배워야 하나요?",
            author: "Michael",
            date: "2023-04-21 15:00",
        },
        {
            no: 5,
            title: "CSS에서 Flexbox와 Grid의 차이점은 무엇인가요?",
            author: "Sophia",
            date: "2023-04-20 13:20",
        },
        {
            no: 6,
            title: "Node.js에서 Express 프레임워크를 사용하는 이유는 무엇인가요?",
            author: "William",
            date: "2023-04-19 12:05",
        },
        {
            no: 7,
            title: "Vue와 React 중 어떤 프레임워크를 선택해야 할까요?",
            author: "Olivia",
            date: "2023-04-18 10:50",
        },
        {
            no: 8,
            title: "웹 애플리케이션의 보안을 위해 어떤 조치를 취해야 하나요?",
            author: "James",
            date: "2023-04-17 14:30",
        },
    ];

    const questionListPageCount = 5;
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
                    {groupPostListDummyData.map((data) => (
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
                {Array.from({ length: questionListPageCount }, (_, i) => (
                    <span key={i} className="page-item">
                        {i + 1}
                    </span>
                ))}
            </div>
            <button className="write-button">게시글 작성</button>
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

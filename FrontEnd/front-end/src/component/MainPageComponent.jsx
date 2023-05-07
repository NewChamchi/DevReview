import React from "react";
import styled from "styled-components";

const MainPageComponent = (props) => {
    const { onNavigateQuestionList } = props;
    return (
        <MainPageComponentBlock>
            <div className="search-container">
                <input
                    className="search-input"
                    type="text"
                    placeholder="질문 및 답변, 모임 검색"
                />
                <button className="search-button">검색</button>
            </div>
            <div className="content-container">
                <div className="left-side">
                    <div className="circle-container">
                        <img
                            className="image"
                            src="src/assets/img/main-1.png"
                            alt="example"
                        />
                    </div>
                    <h2 className="title">Q&A 게시판</h2>
                    <p className="description">
                        소스코드에 대한 질문을 하고 답할 수 있어요.
                    </p>
                    <button
                        className="go-button"
                        onClick={onNavigateQuestionList}
                    >
                        바로가기
                    </button>
                </div>
                <div className="right-side">
                    <div className="circle-container">
                        <img
                            className="image"
                            src="src/assets/img/main-2.png"
                            alt="example"
                        />
                    </div>

                    <h2 className="title">모임</h2>
                    <p className="description">
                        모임에 참여해서 다른사람들과 깊게 토론하고, 실시간 음성
                        및 텍스트 채팅을 할 수 있어요.
                    </p>
                    <button className="go-button">바로가기</button>
                </div>
            </div>
        </MainPageComponentBlock>
    );
};

const MainPageComponentBlock = styled.div`
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
    .content-container {
        display: flex;
        justify-content: space-between;
        padding: 0 10%;
        h2,
        p,
        button {
            margin-top: 25px;
        }

        p {
            font-size: 13px;
        }
    }
    .left-side,
    .right-side {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        background-color: white;
        padding: 50px;
        display: flex;
        flex-direction: column;
        width: 45%;
    }
    .circle-container {
        margin: 0 auto;
        width: 300px;
        height: 300px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .image {
        width: 100px;
        height: 100px;
    }
    .go-button {
        padding: 10px 20px;
        background-color: #1976d2;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 10px;
        transition: background-color 0.2s;
        width: 200px;
    }
    .go-button:hover {
        background-color: #115293;
    }
`;

export default MainPageComponent;

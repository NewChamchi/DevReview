import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Modal from "react-modal";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

const GroupListPageComponent = (props) => {
    const {
        groupListData,
        isModalOpen,
        showMemberList,
        showPostList,
        modalGroupDataId,
        myId,
        setGroupListData,
        setIsModalOpen,
        setShowMemberList,
        setShowPostList,
        setModalGroupDataId,
        onOpenModal,
        onCloseModal,
        onJoinGroup,
        onLeaveGroup,
        onGetIntoGroup,
        onCreateNewGroup,
    } = props;
    return (
        <GroupListPageComponentBlock>
            <div className="search-container">
                <input
                    className="search-input"
                    type="text"
                    placeholder="질문 및 답변, 모임 검색"
                />
                <button className="search-button">검색</button>
            </div>

            <h2>모임 목록</h2>
            <div className="container">
                <div className="row">
                    {groupListData.groupArray &&
                        groupListData.groupArray.map((group, index) => (
                            <div key={index} className="col-sm-3">
                                <div
                                    className="box"
                                    onClick={() => onOpenModal(group.id)}
                                >
                                    <h5 className="group-title">
                                        {group.name}
                                    </h5>
                                    <p className="group-description">
                                        {group.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={onCloseModal}
                        contentLabel="Group Modal"
                        style={{
                            content: {
                                top: "50%",
                                left: "50%",
                                right: "auto",
                                bottom: "auto",
                                marginRight: "-50%",
                                transform: "translate(-50%, -50%)",
                                width: "40%",
                                height: "70%",
                            },
                        }}
                    >
                        {groupListData.groupArray &&
                            groupListData.groupArray?.map((group) => {
                                if (group.id === modalGroupDataId) {
                                    return (
                                        <ModalContent key={group.id}>
                                            <div style={{ minHeight: "30%" }}>
                                                <h3 className="group-title">
                                                    {group.name}
                                                </h3>
                                                <p className="group-description">
                                                    {group.description}
                                                </p>
                                            </div>
                                            <div>
                                                <button
                                                    className="list-button"
                                                    onClick={() =>
                                                        setShowMemberList(
                                                            !showMemberList
                                                        )
                                                    }
                                                >
                                                    <p className="button-label">
                                                        모임 회원 정보
                                                    </p>
                                                    {showMemberList ? (
                                                        <MdKeyboardArrowDown className="icon" />
                                                    ) : (
                                                        <MdKeyboardArrowRight className="icon" />
                                                    )}
                                                </button>
                                                {showMemberList &&
                                                    group.members.map(
                                                        (member) => (
                                                            <p
                                                                style={{
                                                                    textAlign:
                                                                        "center",
                                                                }}
                                                                key={member.id}
                                                            >
                                                                {member.name}
                                                            </p>
                                                        )
                                                    )}

                                                <button
                                                    className="list-button"
                                                    onClick={() =>
                                                        setShowPostList(
                                                            !showPostList
                                                        )
                                                    }
                                                >
                                                    <p className="button-label">
                                                        모임 게시글 보기
                                                    </p>
                                                    {showPostList ? (
                                                        <MdKeyboardArrowDown className="icon" />
                                                    ) : (
                                                        <MdKeyboardArrowRight className="icon" />
                                                    )}
                                                </button>
                                                {showPostList &&
                                                    group.posts.map((post) => (
                                                        <div
                                                            key={post.id}
                                                            className="post-list-item"
                                                        >
                                                            <h6
                                                                className="post-title"
                                                                onClick={() => {
                                                                    console.log(
                                                                        "post clicked!",
                                                                        post.id
                                                                    );
                                                                }}
                                                            >
                                                                {post.title}
                                                            </h6>
                                                            <p className="post-author">
                                                                {post.author}
                                                            </p>
                                                        </div>
                                                    ))}

                                                {group.members.some(
                                                    (member) =>
                                                        member.id === myId
                                                ) ? (
                                                    <button
                                                        className="enter-button"
                                                        onClick={() => {
                                                            onGetIntoGroup(
                                                                group.id
                                                            );
                                                        }}
                                                    >
                                                        모임 들어가기
                                                    </button>
                                                ) : null}

                                                {group.members.some(
                                                    (member) =>
                                                        member.id === myId
                                                ) ? (
                                                    <button
                                                        className="leave-button"
                                                        onClick={() =>
                                                            onLeaveGroup(
                                                                group.id,
                                                                myId
                                                            )
                                                        }
                                                    >
                                                        모임 탈퇴 신청
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="join-button"
                                                        onClick={() => {
                                                            onJoinGroup(
                                                                group.id,
                                                                myId
                                                            );
                                                        }}
                                                    >
                                                        모임 가입 신청
                                                    </button>
                                                )}

                                                <button
                                                    onClick={onCloseModal}
                                                    className="close-button"
                                                >
                                                    닫기
                                                </button>
                                            </div>
                                        </ModalContent>
                                    );
                                }
                                return null;
                            })}
                    </Modal>
                </div>
            </div>
            <div className="pagination">
                {Array.from({ length: groupListData.pageCount }, (_, i) => (
                    <span
                        key={i}
                        className={`page-item ${
                            groupListData.currentPage === i + 1
                                ? "page-item-active"
                                : ""
                        }`}
                    >
                        {i + 1}
                    </span>
                ))}
            </div>
            <button className="create-button" onClick={onCreateNewGroup}>
                모임 작성
            </button>
        </GroupListPageComponentBlock>
    );
};

const GroupListPageComponentBlock = styled.div`
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
    .box {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        margin: 10px; /* 박스간의 간격 */
        padding: 20px; /* 박스 내부 여백 */
        margin-bottom: 20px; /* 박스 간의 수직 간격 */
        height: 200px; /* 박스의 높이 */
        display: flex; /* 박스 내용을 중앙에 배치하기 위해 flex 사용 */
        flex-direction: column; /* 박스 내용을 세로로 배치 */
        align-items: flex-start;
        border-radius: 10px;
        transition: box-shadow 0.3s ease; /* box-shadow의 변화를 0.3초 동안 일어나게 함 */
    }
    .box:hover {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }
    .box:active {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
        cursor: pointer;
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
    .create-button {
        width: 150px;
        margin-bottom: 50px;
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
    .group-title {
        font-size: 1em; /* 폰트 크기 조정 */
        font-weight: bold; /* 폰트 굵기 조정 */
        margin-bottom: 5px; /* 마진 조정 */
    }

    .group-description {
        font-size: 0.8em; /* 폰트 크기 조정 */
        color: #666; /* 색상 조정 */
        text-align: left;
        border-top: 1px solid #ddd; /* 가로선 추가 */
        padding-top: 10px; /* 패딩 추가 */
    }
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    height: 100%;
    overflow-y: auto; /* 컨텐츠가 너무 많을 경우 스크롤이 생기도록 설정 */
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
        background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
    h3,
    p {
        margin: 10px;
    }
    .list-button {
        display: flex;
        align-items: center;
        justify-content: space-between; // space-between을 이용해 왼쪽과 오른쪽에 요소들이 분포하도록 조정
        width: 100%; // 버튼이 모달 창 양옆으로 꽉 차도록 조정
        background: #f0f0f0;
        border: none;
        padding: 10px;
        margin-top: 15px;
        cursor: pointer;
        border-radius: 5px;
        .button-label {
            margin: 0;
        }
        .icon {
            transition: transform 0.3s ease;
            &.down {
                transform: rotate(90deg);
            }
        }
    }
    .list {
        margin-top: 15px;
        background: #f8f8f8;
        padding: 10px;
        border-radius: 5px;
    }

    .post-list {
        list-style-type: none;
        padding: 0;
    }

    .post-list-item {
        display: flex;
        margin-top: 15px;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        padding: 10px;
    }

    .post-title {
        margin: 0;
        font-weight: bold;
        transition: color 0.2s;
        &:hover {
            color: #007bff;
            cursor: pointer;
        }
    }

    .post-author {
        margin: 0;
        color: #888;
    }
    .join-button {
        width: 100%;
        padding: 10px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s;
        &:hover {
            background-color: #0056b3;
        }
        margin-top: 10px;
    }

    .enter-button {
        width: 100%;
        padding: 10px;
        background-color: #28a745;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s;
        &:hover {
            background-color: #1e7e34;
        }
        margin-top: 10px;
    }

    .leave-button {
        width: 100%;
        padding: 10px;
        background-color: #ffc107;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s;
        &:hover {
            background-color: #d39e00;
        }
        margin-top: 10px;
    }

    .close-button {
        width: 100%;
        padding: 10px;
        background-color: #dc3545;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s;
        &:hover {
            background-color: #c82333;
        }
        margin-top: 10px;
    }
`;

export default GroupListPageComponent;

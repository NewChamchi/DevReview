import React from "react";
import { FaComment, FaDesktop, FaMicrophone, FaTrash } from "react-icons/fa";
import styled from "styled-components";

const GroupManagePageComponent = (props) => {
    const {
        groupName,
        groupDescription,
        groupNoticeTitle,
        groupNoticeContent,
        chatRooms,
        setGroupName,
        setGroupDescription,
        setGroupNoticeTitle,
        setGroupNoticeContent,
        setChatRooms,
        onUpdateGroup,
        onDeleteGroup,
        onExileMember,
    } = props;

    return (
        <GroupManagePageComponentBlock>
            <h2>모임 관리</h2>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="first-section" style={{ width: "40%" }}>
                    <StyledLabel>모임명</StyledLabel>
                    <StyledInput
                        type="text"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                    />
                    <StyledLabel>모임 설명</StyledLabel>
                    <StyledTextArea
                        value={groupDescription}
                        onChange={(e) => setGroupDescription(e.target.value)}
                    />
                </div>
                {/* <div className="second-section" style={{ width: "40%" }}>
                    <ChatRoomManagementContainer>
                        {chatRooms.map((room, index) => (
                            <div key={index}>
                                <ChatRoom>
                                    <span>{room.name}</span>

                                    <div>
                                        <ChatIcon size={18} />
                                        <ScreenShareIcon size={18} />
                                        <MicrophoneIcon size={18} />
                                        <DeleteRoomButton size={18} />
                                    </div>
                                </ChatRoom>
                            </div>
                        ))}
                    </ChatRoomManagementContainer>
                    <ChatRoomCreateButton>채팅방 생성</ChatRoomCreateButton>
                </div> */}
                {/* 공지사항 작성 기능 추가 */}

                <div className="third-section" style={{ width: "40%" }}>
                    <StyledLabel>공지사항 제목</StyledLabel>
                    <StyledInput
                        type="text"
                        value={groupNoticeTitle}
                        onChange={(e) => setGroupNoticeTitle(e.target.value)}
                    />
                    <StyledLabel>공지사항 내용</StyledLabel>
                    <StyledTextArea
                        value={groupNoticeContent}
                        onChange={(e) => setGroupNoticeContent(e.target.value)}
                    />
                </div>
            </div>
            <ButtonContainer>
                <StyledButton
                    onClick={() => {
                        onUpdateGroup();
                    }}
                >
                    수정
                </StyledButton>
                <StyledButton
                    onClick={() => {
                        onDeleteGroup();
                    }}
                >
                    삭제
                </StyledButton>
                <StyledButton
                    onClick={() => {
                        onExileMember();
                    }}
                >
                    모임원 추방
                </StyledButton>
            </ButtonContainer>
        </GroupManagePageComponentBlock>
    );
};

const GroupManagePageComponentBlock = styled.div`
    width: 80%; // 너비 조정
    max-width: 80%; // 너비 조정
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 135px;
    padding: 20px; // 상하 여백 추가
`;

const StyledLabel = styled.label`
    display: block;
    margin-bottom: 10px;
    text-align: left;
`;

const StyledInput = styled.input`
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 20px; // 상하 여백 추가
    border: 1px solid #ddd;
    border-radius: 4px;
`;

const StyledTextArea = styled.textarea`
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 20px; // 상하 여백 추가
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 300px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`;

const StyledButton = styled.button`
    display: block;
    padding: 10px 20px;
    margin-top: 20px;
    margin-left: 10px;
    background: #4b67ea;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background: #4058b5;
    }
`;

const ChatRoomManagementContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #eee;
    height: 400px;
    padding: 20px;
    margin: 20px;
    overflow-y: scroll;

    /* Chrome, Edge */
    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }

    /* Firefox */
    scrollbar-width: thin;
    scrollbar-color: #888 #eee;
`;
const ChatRoomCreateButton = styled.button`
    width: 100px;
    height: 40px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;
    cursor: pointer;
    align-self: flex-end;

    &:hover {
        background-color: #45a049;
    }
`;

const ChatRoom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    background-color: white;
    border-radius: 5px;
    border-bottom: 1px solid #ddd;
`;
const ChatIcon = styled(FaComment)`
    margin-right: 15px;
    cursor: pointer;
    color: ${(props) => (props.selected ? "#4CAF50" : "#aaa")};
`;

const ScreenShareIcon = styled(FaDesktop)`
    margin-right: 15px;
    cursor: pointer;
    color: ${(props) => (props.selected ? "#4CAF50" : "#aaa")};
`;

const MicrophoneIcon = styled(FaMicrophone)`
    margin-right: 15px;
    cursor: pointer;
    color: ${(props) => (props.selected ? "#4CAF50" : "#aaa")};
`;
const DeleteRoomButton = styled(FaTrash)`
    cursor: pointer;
    color: #f44336;

    &:hover {
        color: #d32f2f;
    }
`;

export default GroupManagePageComponent;

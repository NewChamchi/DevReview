import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
    FaImage,
    FaFile,
    FaPaperPlane,
    FaDesktop,
    FaMicrophone,
    FaSignInAlt,
    FaCode,
    FaBell,
    FaEdit,
    FaClipboard,
    FaUserCog,
} from "react-icons/fa";

const GroupMainPageComponent = (props) => {
    const {
        currentUser,
        groupMainData,
        chatMessage,
        roomType,
        isOpen,
        toggleOpen,
        selectedRoomId,
        isMicActive,
        isScreenActive,
        setGroupMainData,
        setChatMessage,
        setRoomType,
        setIsOpen,
        setSelectedRoomId,
        setIsMicActive,
        setIsScreenActive,
        toggleMicActive,
        toggleScreenActive,
        handleRoomClick,
        handleRoomEnter,
        sendMessage,
    } = props;
    // Dummy data for chat messages

    return (
        <GroupMainPageComponentBlock>
            <GroupMain>
                <MainSection>
                    <ChatRoomHeader>
                        <ChatRoomName>일반</ChatRoomName>
                        <NoticeIcon onClick={toggleOpen}>
                            <FaBell size={20} />
                            <NoticeTitle>
                                {groupMainData.noticeTitle}
                            </NoticeTitle>
                        </NoticeIcon>
                    </ChatRoomHeader>
                    <ChatWindow>
                        {isOpen && (
                            <NoticeBubble>
                                <NoticeContent>
                                    {groupMainData.noticeContent}
                                </NoticeContent>
                            </NoticeBubble>
                        )}
                        {roomType === "chat" &&
                            groupMainData.chatArray?.map((message, index) => (
                                <ChatMessage
                                    key={index}
                                    isCurrentUser={
                                        message.username === currentUser
                                    }
                                >
                                    <MessageUser>
                                        {message.username}
                                    </MessageUser>
                                    <MessageText>{message.content}</MessageText>
                                </ChatMessage>
                            ))}
                        {roomType === "screen" && (
                            <ScreenShare>
                                <ScreenShareText>
                                    화면 공유 중입니다.
                                </ScreenShareText>
                            </ScreenShare>
                        )}
                        {roomType === "voice" && (
                            <VoiceChat id="remote-stream">
                                <VoiceChatText>
                                    음성 채팅 중입니다.
                                </VoiceChatText>
                            </VoiceChat>
                        )}
                    </ChatWindow>
                    <MessageInputWrapper>
                        <MessageInput
                            value={chatMessage}
                            onChange={(event) => {
                                setChatMessage(event.target.value);
                            }}
                            placeholder="Write a message..."
                        />
                        <FileInputLabel>
                            <FaImage size={20} />
                            <FileInput type="file" />
                        </FileInputLabel>
                        <FileInputLabel>
                            <FaFile size={20} />
                            <FileInput type="file" />
                        </FileInputLabel>
                        <FileInputLabel>
                            <FaCode size={20} />
                            <FileInput type="file" />
                        </FileInputLabel>
                        <SendButton
                            onClick={() => {
                                sendMessage(chatMessage);
                                setChatMessage("");
                            }}
                        >
                            <FaPaperPlane size={20} />
                        </SendButton>
                    </MessageInputWrapper>
                </MainSection>
                <SidebarSection>
                    <ChatRoomContainer>
                        <ChatRoomTitle>채팅방</ChatRoomTitle>
                        <div>
                            <ChatRoom onClick={() => handleRoomClick(1)}>
                                <span>
                                    일반
                                    {/* "일반" 방은 아이콘이 없으므로 아무것도 추가하지 않습니다 */}
                                </span>
                                <EnterRoomButton
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        handleRoomEnter("chat");
                                    }}
                                >
                                    <FaSignInAlt size={18} />
                                </EnterRoomButton>
                            </ChatRoom>
                            {selectedRoomId === 1 && (
                                <MemberList>
                                    {/* member list */}
                                    {/* {room.members.map((member, index) => (
                                        <Member key={index}>{member}</Member>
                                    ))} */}
                                </MemberList>
                            )}
                        </div>

                        <div>
                            <ChatRoom onClick={() => handleRoomClick(2)}>
                                <span>
                                    화면 공유
                                    <FaDesktop
                                        title="화면과 음성을 공유할 수 있습니다."
                                        style={{
                                            marginLeft: "15px",
                                            color: "#aaa",
                                        }}
                                        size={18}
                                    />
                                </span>
                                <EnterRoomButton
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        handleRoomEnter("screen");
                                    }}
                                >
                                    <FaSignInAlt size={18} />
                                </EnterRoomButton>
                            </ChatRoom>
                            {selectedRoomId === 2 && (
                                <MemberList>{/* member list */}</MemberList>
                            )}
                        </div>

                        <div>
                            <ChatRoom onClick={() => handleRoomClick(3)}>
                                <span>
                                    음성 채팅
                                    <FaMicrophone
                                        title="음성을 공유할 수 있습니다."
                                        style={{
                                            marginLeft: "15px",
                                            color: "#aaa",
                                        }}
                                        size={18}
                                    />
                                </span>
                                <EnterRoomButton
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        handleRoomEnter("voice");
                                    }}
                                >
                                    <FaSignInAlt size={18} />
                                </EnterRoomButton>
                            </ChatRoom>
                            {selectedRoomId === 3 && (
                                <MemberList>{/* member list */}</MemberList>
                            )}
                        </div>
                    </ChatRoomContainer>
                    <MicScreenControl>
                        <ControlButton>
                            <FaClipboard size={20} />
                        </ControlButton>
                        {true && (
                            <ControlButton>
                                <FaUserCog size={20} />
                            </ControlButton>
                        )}
                    </MicScreenControl>
                </SidebarSection>
            </GroupMain>
        </GroupMainPageComponentBlock>
    );
};

const GroupMainPageComponentBlock = styled.div`
    width: 80%;
    max-width: 80%;
    margin: 0 auto;
    text-align: center;
    margin-top: 115px;
`;

const GroupMain = styled.div`
    display: flex;
    height: 100vh;
    max-height: 80vh; // Reduce the height
`;

const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; // This separates the chat window and the message input
    flex: 1;
    background-color: #f5f5f5;
`;

const SidebarSection = styled.div`
    width: 300px;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ChatWindow = styled.div`
    flex: 1;
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 20px;
    overflow-y: auto;
`;

const ChatRoomTitle = styled.h2`
    margin: 0;
    padding: 10px;
`;

const ChatRoom = styled.div`
    padding: 10px;
    padding-left: 30px;

    padding-right: 30px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
`;

const NoticeTitle = styled.h6`
    margin: 0;
    margin-left: 10px;
    cursor: pointer;
`;

const NoticeContent = styled.p`
    margin: 0;
`;

const ChatMessage = styled.div`
    max-width: 60%;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    align-self: flex-start;
    text-align: left;

    ${(props) =>
        props.isCurrentUser &&
        css`
            background-color: #dcf8c6;
            align-self: flex-end;
            text-align: right;
        `}
`;

const MessageInputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
`;

const MessageInput = styled.input`
    width: 80%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
    background-color: #eee;
`;

const FileInputLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 0;
    background-color: #eee;
    cursor: pointer;
    margin-left: 10px;
`;

const SendButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 0;
    background-color: #eee;
    color: #444; // Normal state color

    border: none;
    cursor: pointer;
    margin-left: 10px;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: #0088cc; // Hover state color
    }

    &:active {
        color: #005577; // Active (click) state color
    }
`;

const FileInput = styled.input`
    display: none;
`;

const MessageUser = styled.div`
    font-weight: bold;
`;

const MessageText = styled.div`
    margin-left: 10px;
`;

const EnterRoomButton = styled.button`
    margin-left: 10px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    color: #444; // Normal state color

    transition: all 0.2s ease-in-out;
    &:hover {
        color: #0088cc; // Hover state color
    }

    &:active {
        color: #005577; // Active (click) state color
    }
`;
const MemberList = styled.div`
    background-color: #f0f0f0;
`;

const Member = styled.div`
    padding: 5px;
`;

const MicScreenControl = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px;
    border-top: 1px solid #ccc;
`;

const ControlButton = styled.button`
    background: none;
    border: none;
    color: ${(props) => (props.active ? "#4caf50" : "#ccc")};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: ${(props) => (props.active ? "#81c784" : "#bbb")};
    }
    &:active {
        color: ${(props) => (props.active ? "#388e3c" : "#aaa")};
    }
`;

const ChatRoomContainer = styled.div`
    // 필요한 스타일...
`;

const ChatRoomHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    background-color: #eee; // To differentiate from the chat window
`;

const ChatRoomName = styled.h1`
    margin: 0;
    margin-left: 10px;
    font-size: 1.2rem;
    font-weight: bold;
`;

const NoticeIcon = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const NoticeBubble = styled.div`
    position: absolute;
    width: 80%;
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15); // To give a "lifted" effect
`;

const ScreenShare = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
`;

const ScreenShareText = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
`;

const VoiceChat = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
`;

const VoiceChatText = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
`;
export default GroupMainPageComponent;

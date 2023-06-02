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
} from "react-icons/fa";

const GroupMainPageComponent = (props) => {
    const {} = props;
    // Dummy data for chat messages
    const currentUser = "John Doe";
    const chatData = [
        {
            id: 1,
            username: "John Doe",
            type: "text",
            content: "Hello everyone, how are you?",
        },
        {
            id: 2,
            username: "Jane Smith",
            type: "text",
            content: "I'm good, thanks for asking!",
        },
        {
            id: 3,
            username: "Alice Johnson",
            type: "text",
            content: "Hey guys, what's up?",
        },
        {
            id: 4,
            username: "John Doe",
            type: "text",
            content: "Just working on a project.",
        },
        {
            id: 5,
            username: "Jane Smith",
            type: "text",
            content: "Same here, it's pretty tough.",
        },
        {
            id: 6,
            username: "Alice Johnson",
            type: "text",
            content: "I feel you. Let's hang in there!",
        },
        {
            id: 7,
            username: "John Doe",
            type: "text",
            content: "Definitely. We got this!",
        },
        {
            id: 8,
            username: "Jane Smith",
            type: "text",
            content: "Absolutely! Let's do our best!",
        },
        {
            id: 9,
            username: "Alice Johnson",
            type: "text",
            content: "100% agree. Let's crush it!",
        },
        {
            id: 10,
            username: "John Doe",
            type: "text",
            content: "Yes, let's! :)",
        },
        {
            id: 11,
            username: "John Doe",
            type: "text",
            content:
                "This is a longer message for testing purposes. We are trying to see how this message will look in the chat box. Hopefully, it wraps correctly and looks good.",
        },
    ];
    const title = "주간 공부 계획";
    const content =
        "안녕하세요. 이번 주에는 자바스크립트의 클로저와 콜백 함수에 대해 집중적으로 학습하려 합니다. 모두 함께 열심히 공부해 봅시다. 도움이 필요하면 언제든지 질문해 주세요!";

    const chatRooms = [
        {
            id: 1,
            name: "일반",
            type: "normal",
            members: ["John Doe", "Jane Smith", "Alice Johnson"],
        },
        {
            id: 2,
            name: "Java 공부",
            type: "normal",
            members: ["John Doe", "Bob Parker"],
        },
        {
            id: 3,
            name: "리액트 공부",
            type: "normal",
            members: ["Alice Johnson", "Charlie Davis"],
        },
        {
            id: 4,
            name: "강의",
            type: "screen",
            members: ["Jane Smith", "Charlie Davis", "Bob Parker"],
        },
        {
            id: 5,
            name: "잡담",
            type: "microphone",
            members: ["John Doe", "Jane Smith", "Alice Johnson"],
        },
    ];

    const groupMainData = {
        noticeTitle: "주간 공부 계획",
        noticeContent:
            "안녕하세요. 이번 주에는 자바스크립트의 클로저와 콜백 함수에 대해 집중적으로 학습하려 합니다. 모두 함께 열심히 공부해 봅시다. 도움이 필요하면 언제든지 질문해 주세요!",
        chatArray: [
            {
                id: 1,
                username: "John Doe",
                type: "text",
                content: "Hello everyone, how are you?",
            },
            {
                id: 2,
                username: "Jane Smith",
                type: "text",
                content: "I'm good, thanks for asking!",
            },
            {
                id: 3,
                username: "Alice Johnson",
                type: "text",
                content: "Hey guys, what's up?",
            },
            {
                id: 4,
                username: "John Doe",
                type: "text",
                content: "Just working on a project.",
            },
            {
                id: 5,
                username: "Jane Smith",
                type: "text",
                content: "Same here, it's pretty tough.",
            },
            {
                id: 6,
                username: "Alice Johnson",
                type: "text",
                content: "I feel you. Let's hang in there!",
            },
            {
                id: 7,
                username: "John Doe",
                type: "text",
                content: "Definitely. We got this!",
            },
            {
                id: 8,
                username: "Jane Smith",
                type: "text",
                content: "Absolutely! Let's do our best!",
            },
            {
                id: 9,
                username: "Alice Johnson",
                type: "text",
                content: "100% agree. Let's crush it!",
            },
            {
                id: 10,
                username: "John Doe",
                type: "text",
                content: "Yes, let's! :)",
            },
            {
                id: 11,
                username: "John Doe",
                type: "text",
                content:
                    "This is a longer message for testing purposes. We are trying to see how this message will look in the chat box. Hopefully, it wraps correctly and looks good.",
            },
        ],
        chatRooms: [
            {
                id: 1,
                name: "일반",
                type: "normal",
                members: ["John Doe", "Jane Smith", "Alice Johnson"],
            },
            {
                id: 2,
                name: "Java 공부",
                type: "normal",
                members: ["John Doe", "Bob Parker"],
            },
            {
                id: 3,
                name: "리액트 공부",
                type: "normal",
                members: ["Alice Johnson", "Charlie Davis"],
            },
            {
                id: 4,
                name: "강의",
                type: "screen",
                members: ["Jane Smith", "Charlie Davis", "Bob Parker"],
            },
            {
                id: 5,
                name: "잡담",
                type: "microphone",
                members: ["John Doe", "Jane Smith", "Alice Johnson"],
            },
        ],
    };
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    const [selectedRoomId, setSelectedRoomId] = useState(null);
    const [isMicActive, setIsMicActive] = useState(false);
    const [isScreenActive, setIsScreenActive] = useState(false);

    const toggleMicActive = () => setIsMicActive(!isMicActive);
    const toggleScreenActive = () => setIsScreenActive(!isScreenActive);
    const handleRoomClick = (roomId) => {
        setSelectedRoomId((prev) => (prev === roomId ? null : roomId));
        console.log("roomId: ", roomId);
    };

    const handleRoomEnter = (roomName) => {
        // logic to enter the room
    };
    return (
        <GroupMainPageComponentBlock>
            <GroupMain>
                <MainSection>
                    <ChatRoomHeader>
                        <ChatRoomName>일반</ChatRoomName>
                        <NoticeIcon onClick={toggleOpen}>
                            <FaBell size={20} />
                            <NoticeTitle>{title}</NoticeTitle>
                        </NoticeIcon>
                    </ChatRoomHeader>
                    <ChatWindow>
                        {isOpen && (
                            <NoticeBubble>
                                <NoticeContent>{content}</NoticeContent>
                            </NoticeBubble>
                        )}
                        {chatData.map((message, index) => (
                            <ChatMessage
                                key={index}
                                isCurrentUser={message.username === currentUser}
                            >
                                <MessageUser>{message.username}</MessageUser>
                                <MessageText>{message.content}</MessageText>
                            </ChatMessage>
                        ))}
                    </ChatWindow>
                    <MessageInputWrapper>
                        <MessageInput placeholder="Write a message..." />
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
                        <SendButton>
                            <FaPaperPlane size={20} />
                        </SendButton>
                    </MessageInputWrapper>
                </MainSection>
                <SidebarSection>
                    <ChatRoomContainer>
                        <ChatRoomTitle>채팅방</ChatRoomTitle>
                        {chatRooms.map((room, index) => (
                            <div key={index}>
                                <ChatRoom
                                    onClick={() => handleRoomClick(room.id)}
                                >
                                    <span>
                                        {room.name}

                                        {room.type === "screen" && (
                                            <FaDesktop
                                                title="화면과 음성을 공유할 수 있습니다."
                                                style={{
                                                    marginLeft: "15px",
                                                    color: "#aaa",
                                                }}
                                                size={18}
                                            />
                                        )}
                                        {room.type === "microphone" && (
                                            <FaMicrophone
                                                title="음성을 공유할 수 있습니다."
                                                style={{
                                                    marginLeft: "15px",
                                                    color: "#aaa",
                                                }}
                                                size={18}
                                            />
                                        )}
                                    </span>
                                    <EnterRoomButton
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            handleRoomEnter(room.name);
                                        }}
                                    >
                                        <FaSignInAlt size={18} />
                                    </EnterRoomButton>
                                </ChatRoom>
                                {selectedRoomId === room.id && (
                                    <MemberList>
                                        {room.members.map((member, index) => (
                                            <Member key={index}>
                                                {member}
                                            </Member>
                                        ))}
                                    </MemberList>
                                )}
                            </div>
                        ))}
                    </ChatRoomContainer>
                    <MicScreenControl>
                        <ControlButton
                            active={isMicActive}
                            onClick={toggleMicActive}
                        >
                            <FaMicrophone size={20} />
                        </ControlButton>
                        <ControlButton
                            active={isScreenActive}
                            onClick={toggleScreenActive}
                        >
                            <FaDesktop size={20} />
                        </ControlButton>
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

export default GroupMainPageComponent;

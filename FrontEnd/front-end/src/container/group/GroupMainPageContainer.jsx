import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import GroupMainPageComponent from "../../component/group/GroupMainPageComponent";
import { useRecoilValue } from "recoil";
import { rc_user_informationAtom } from "../../recoil/atoms";
import AgoraRTC from "agora-rtc-sdk";
import { initializeAgora } from "../../api/agroaApi";

const groupMainDummyData = {
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
};
const GroupMainPageContainer = () => {
    const { name: currentUser } = useRecoilValue(rc_user_informationAtom);

    const [socket, setSocket] = useState(null);
    const [groupMainData, setGroupMainData] = useState({});
    const [chatMessage, setChatMessage] = useState("");
    const [roomType, setRoomType] = useState("chat");
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    const [selectedRoomId, setSelectedRoomId] = useState(null);
    const [isMicActive, setIsMicActive] = useState(false);
    const [isScreenActive, setIsScreenActive] = useState(false);

    const portData = async () => {
        try {
            // const response = await axios.get("http://localhost:8080/api/group/1");
            // if (response.status !== 200) {
            //     console.error(`Error: ${response.status}`);
            //     return;
            // }
            // const data = response.data;
            setGroupMainData(groupMainDummyData);
        } catch (error) {
            console.error(error);
        }
    };
    const client = AgoraRTC.createClient({ mode: "rtc", codec: "h264" });
    client.init("4d382177f2384d17a591503425d8635e", () => {
        console.log("AgoraRTC client initialized");
    });
    const toggleMicActive = () => setIsMicActive(!isMicActive);
    const toggleScreenActive = () => setIsScreenActive(!isScreenActive);
    const handleRoomClick = (roomId) => {
        setSelectedRoomId((prev) => (prev === roomId ? null : roomId));
        console.log("roomId: ", roomId);
    };

    const handleRoomEnter = (roomName) => {
        // logic to enter the room
    };
    useEffect(() => {
        const fetchData = async () => {
            await portData();
            await initializeAgora();
        };
        fetchData();
    }, []);

    useEffect(() => {
        const newSocket = io("http://localhost:3000");
        setSocket(newSocket);

        return () => newSocket.disconnect();
    }, []);

    useEffect(() => {
        if (socket) {
            socket.on("chat message", (message) => {
                setGroupMainData((prevState) => {
                    const updatedChatArray = [...prevState.chatArray, message];
                    return { ...prevState, chatArray: updatedChatArray };
                });
            });
        }
    }, [socket]);

    const sendMessage = (message) => {
        // 이미 연결된 소켓을 사용하여 메시지를 보냅니다.
        socket &&
            socket.emit("chat message", {
                id: 12,
                username: currentUser,
                type: "text",
                content: message,
            });
    };

    useEffect(() => {
        console.log("currentUser :", currentUser);
    }, [currentUser]);
    const propDatas = {
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
    };
    return <GroupMainPageComponent {...propDatas} />;
};

export default GroupMainPageContainer;

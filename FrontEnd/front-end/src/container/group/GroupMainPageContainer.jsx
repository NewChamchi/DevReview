import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import GroupMainPageComponent from "../../component/group/GroupMainPageComponent";
import { useRecoilValue } from "recoil";
import { rc_user_informationAtom } from "../../recoil/atoms";
import AgoraRTC from "agora-rtc-sdk-ng";
import { initializeAgoraVoiceChannel } from "../../api/agroaApi";

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
    const [currentUsers, setCurrentUsers] = useState([]);
    const [socket, setSocket] = useState(null);
    const [groupMainData, setGroupMainData] = useState({});
    const [chatMessage, setChatMessage] = useState("");
    const [roomType, setRoomType] = useState("chat");
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    const [selectedRoomId, setSelectedRoomId] = useState(null);
    const [isMicActive, setIsMicActive] = useState(false);
    const [isScreenActive, setIsScreenActive] = useState(false);

    const [localStream, setLocalStream] = useState(null);
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
    const [localAudioTrack, setLocalAudioTrack] = useState(null);
    const [remoteUsers, setRemoteUsers] = useState({});
    const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

    const toggleMicActive = () => setIsMicActive(!isMicActive);
    const toggleScreenActive = () => setIsScreenActive(!isScreenActive);
    const handleRoomClick = (roomId) => {
        setSelectedRoomId((prev) => (prev === roomId ? null : roomId));
        console.log("roomId: ", roomId);
    };

    const handleRoomEnter = async (roomName) => {
        if (roomName === "chat") {
            setRoomType("chat");
            return;
        } else if (roomName === "voice") {
            setRoomType("voice");
            const token = await initializeAgoraVoiceChannel(); // <- initializeAgora 호출
            try {
                const uid = await client.join(
                    "4d382177f2384d17a591503425d8635e",
                    "voiceChannel",
                    token
                );
                console.log("User " + uid + " join channel successfully");

                // Create audio track
                const localAudioTrack =
                    await AgoraRTC.createMicrophoneAudioTrack();
                setLocalAudioTrack(localAudioTrack); // <- 상태 값 업데이트

                // Publish audio track
                await client.publish([localAudioTrack]);

                // 원격 사용자가 접속하면 상태를 업데이트합니다.
                client.on("user-published", async (remoteUser, mediaType) => {
                    await client.subscribe(remoteUser, mediaType);
                    console.log(
                        "Subscribe remote audio stream successfully: " +
                            remoteUser.uid
                    );
                    // Play the remote audio track
                    if (mediaType === "audio") {
                        remoteUser.audioTrack.play();

                        // 사용자의 닉네임을 가져옵니다.
                        const userNickname = remoteUser.uid;

                        // 현재 원격 사용자들 상태에 새로운 사용자를 추가합니다.
                        setRemoteUsers((users) => ({
                            ...users,
                            [userNickname]: remoteUser,
                        }));
                    }
                });

                // 원격 사용자가 나가면 상태를 업데이트합니다.
                client.on("user-unpublished", (remoteUser, mediaType) => {
                    console.log(
                        "remoteUser " + remoteUser.uid + " left the channel"
                    );
                    if (mediaType === "audio") {
                        remoteUser.audioTrack.stop();

                        const userNickname = remoteUser.uid;

                        // 현재 원격 사용자들 상태에서 나간 사용자를 삭제합니다.
                        setRemoteUsers((users) => {
                            const updatedUsers = { ...users };
                            delete updatedUsers[userNickname];
                            return updatedUsers;
                        });
                    }
                });
            } catch (err) {
                console.log("Join channel failed", err);
            }
        }
    };

    // When the user leaves the room, unpublish and leave the channel
    const leaveChannel = async () => {
        if (localAudioTrack) {
            localAudioTrack.stop();
            localAudioTrack.close();
            setLocalAudioTrack(null);
        }

        await client.leave();

        // Remove remote users and reset state
        setRemoteUsers({});
    };

    const handleRoomLeave = () => {
        if (localStream) {
            // <- localStream을 참조
            client.unpublish(localStream, function (err) {
                console.log("Unpublish local stream failed" + err);
            });

            setLocalStream(null); // <- 상태 값 업데이트
        }

        // 채널에서 나가기
        client.leave(
            () => {
                console.log("Leave channel successfully");
            },
            (err) => {
                console.log("Leave channel failed", err);
            }
        );
    };

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
        console.log("remoteUsers :", remoteUsers);
    }, [remoteUsers]);
    const propDatas = {
        currentUser,
        groupMainData,
        chatMessage,
        roomType,
        remoteUsers,
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

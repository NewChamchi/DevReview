import axios from "axios";
import AgoraRTC from "agora-rtc-sdk-ng"; // Agora SDK의 임포트가 필요함

export const initializeAgora = async () => {
    // 비동기 함수
    try {
        const response = await axios.post("/api/agora-token", {
            // 'await' 키워드를 사용하여 비동기 요청을 수행
            channelName: "myChannel",
        });

        const token = response.data.token;
        var client = AgoraRTC.createClient({ mode: "live", codec: "h264" });

        client.init(
            "4d382177f2384d17a591503425d8635e",
            function () {
                console.log("AgoraRTC client initialized");

                client.join(
                    "c7a5653310ee415db907571e88d166c3",
                    "myChannel",
                    null,
                    function (uid) {
                        console.log(
                            "User " + uid + " join channel successfully"
                        );
                    },
                    function (err) {
                        console.log("Join channel failed", err);
                    }
                );
            },
            function (err) {
                console.log("AgoraRTC client init failed", err);
            }
        );
    } catch (error) {
        console.error(error);
    }
};

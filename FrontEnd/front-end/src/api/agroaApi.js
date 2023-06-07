import axios from "axios";

export const initializeAgoraVoiceChannel = async () => {
    try {
        const response = await axios.post(
            "http://localhost:3000/api/agora-token",
            {
                channelName: "voiceChannel",
            }
        );
        return response.data.token; // <- 토큰 반환
    } catch (error) {
        console.error(error);
    }
};

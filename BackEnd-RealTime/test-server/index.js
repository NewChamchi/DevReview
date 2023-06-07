const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
const AgoraToken = require("agora-access-token"); // Agora Token Server SDK

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

app.post("/api/agora-token", (req, res) => {
    const channelName = req.body.channelName;
    // Your Agora app ID and app certificate
    const appId = "4d382177f2384d17a591503425d8635e";
    const appCertificate = "c7a5653310ee415db907571e88d166c3";
    const expirationTimeInSeconds = 3600;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
    const role = AgoraToken.RtcRole.PUBLISHER;
    const token = AgoraToken.RtcTokenBuilder.buildTokenWithUid(
        appId,
        appCertificate,
        channelName,
        0, // uid
        role,
        privilegeExpiredTs
    );
    console.log("Token generated: " + token);
    res.send({ token });
});

server.listen(3000, () => console.log("Server listening at port 3000"));

import io from "socket.io-client";
const url = "localhost:5000";

export const socket = io(url);

// let socket = new WebSocket('ws://localhost:8002/');
import { io } from 'socket.io-client';
// const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:4000';
const URL = 'http://localhost:8000';

export const socket = io(URL, {
//   autoConnect: false,
});

console.log(socket)
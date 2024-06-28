"use client";

import { io } from "socket.io-client";

export const socket = io('http://10.10.10.94:4816'  ,{transports : ['websocket']})  ;
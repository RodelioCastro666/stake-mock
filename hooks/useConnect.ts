"use client";

import { socket } from "@/api/socket";
import { useEffect, useState } from "react";


export default function useConnect(){

    // const [isConnected, setIsConnected] = useState(false);
    // const [transport, setTransport] = useState("N/A");

    const onConnectCredentials  = {
        isConnected : false,
        transport : "N/A"
    }

    const [credentials, setCredentials] = useState(onConnectCredentials)

    useEffect(() => {

        function onConnect() {
            setCredentials({...credentials, isConnected  : true });
             setCredentials({...credentials, transport :  socket.io.engine.transport.name } );
      
            socket.io.engine.on("upgrade", (transport) => {
              setCredentials({...credentials, transport : transport.name});
            });
            console.log( onConnectCredentials);
        }
    },[])

    


    return onConnectCredentials
}
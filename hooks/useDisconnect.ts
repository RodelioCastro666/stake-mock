"use client";

import { socket } from "@/api/socket";
import { useEffect, useState } from "react";


export default function useDisConnect(){

    const onDisConnectCredentials  = {
        isConnected : false,
        transport : "N/A"
    }

    const [credentials, setCredentials] = useState(onDisConnectCredentials)

    useEffect(() => {

        function onConnect() {
            setCredentials({...credentials, isConnected  : false });
            setCredentials({...credentials, transport : "N/A" } );
            
        }
    },[])

    return onDisConnectCredentials

}
"use client";

import { socket } from "@/api/socket";
import { useEffect, useState } from "react";

function Roadmap() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  const [beadRoadmap, setBeadRoadmap] = useState("");
  const [bigRoadmap, setBigRoadmap] = useState("");
  const [eyeRoadmap, setEyeRoadmap] = useState("");
  const [smallRoadmap, setSmallRoadmap] = useState("");
  const [cockRoachRoadmap, setCockRoachmap] = useState("");
  const [pair, setPair] = useState("N");

  useEffect(() => {
    if (socket.connected) {
      setIsConnected(true);
      console.log("Connected to server");
    }
    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("Event:Result", (data) => {
      const beadroad = `data:image/jpeg;base64,${data.beadroad}`;
      const bigroad = `data:image/jpeg;base64,${data.bigroad}`;
      const eyeroad = `data:image/jpeg;base64,${data.eyeroad}`;
      const smallroad = `data:image/jpeg;base64,${data.smallroad}`;
      const cockroach = `data:image/jpeg;base64,${data.cockroachroad}`;

      setBeadRoadmap(beadroad);
      setBigRoadmap(bigroad);
      setEyeRoadmap(eyeroad);
      setSmallRoadmap(smallroad);
      setCockRoachmap(cockroach);

      console.log(data);
    });

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  const playerOnClick = () => {
    console.log("Player");
    socket.emit("Event:Result", {
      winner: "P", // B=Banker,   P=Player,   T=Tie,
      pair: pair, // B=Banker,   P=Player,   S=Both,   N=None,
      natural: "T", // T=Natural,  F=Not,
    });
    setPair("N");
  };

  const bankerOnClick = () => {
    console.log("Player");
    socket.emit("Event:Result", {
      winner: "B", // B=Banker,   P=Player,   T=Tie,
      pair: pair, // B=Banker,   P=Player,   S=Both,   N=None,
      natural: "T", // T=Natural,  F=Not,
    });
    setPair("N");
  };

  const bankerPairOnClick = (result: string): void => {
    setPair(result);
  };

  return (
    <div>
      <img src={beadRoadmap} />
      <img src={bigRoadmap} />
      <img src={eyeRoadmap} />
      <img src={smallRoadmap} />
      <img src={cockRoachRoadmap} />
    </div>
  );
}

export default Roadmap;

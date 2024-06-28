"use client";
import useCounter from "../../hooks/useCounter";
import useConnect from "@/hooks/useConnect";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
export default function Counter() {
  const counter = useCounter();

  return (
    <>
      <div>{counter}</div>
      {/* <div className=" text-black">
        <CountdownCircleTimer
          size={70}
          duration={counter}
          isPlaying={true}
          colors="#0EB953"
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div> */}
    </>
  );
}

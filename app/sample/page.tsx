"use client";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Sample() {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={10}
      colors="#A30000"
      onComplete={() => {
        // do your stuff here
        return { shouldRepeat: true, delay: 1.5 }; // repeat animation in 1.5 seconds
      }}
    />
  );
}

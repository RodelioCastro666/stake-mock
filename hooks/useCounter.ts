"use client"
import { useState } from "react";
import { useEffect } from "react";

export default function useCounter(){
    const initialCount = 10;

    const [timeRemaining, setTimeRemaining] = useState<number>(initialCount);

    useEffect(() => {
        const timerInterval = setInterval(() => {
          setTimeRemaining((prevTime) => {
            if (prevTime === 0) {
              // clearInterval(timerInterval);
              // Perform actions when the timer reaches zero
              setTimeRemaining(initialCount);
              return 0;
            } else {
              return prevTime - 1;
            }
          });
        }, 1000);
    
        // Cleanup the interval when the component unmounts
        return () => {
          clearInterval(timerInterval);
          
          
        } 

      }, []); // The empty dependency array ensures the effect runs only once on mount


      return timeRemaining
}
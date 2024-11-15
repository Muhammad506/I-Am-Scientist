"use client";
import React, { useState, useEffect } from "react";

const Timer = () => {
  // Set the target date to 25th November
  const targetDate = new Date("2024-11-25T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  });

  return (
    <div className="bg-[#5D3794] flex lg:text-base text-sm justify-around flex-col Jmd:flex-row px-4 gap-5 py-7 Jmd:px-10 Jmd:py-0 text-white text-center">
      <p className="self-center">
        A day in the life. Please join us as we walk through a day of an Ed
        student. Request a tour
      </p>

      <div className="bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] flex flex-col justify-center items-center Jmd:px-7 Jmd:text-nowrap px-10 py-5 font-semibold">
        <p className="text-sm">Admissions to Competition Starts in</p>
        <div className="flex justify-center items-end h-full mt-2">
          <div className="flex flex-col items-center">
            <p className="text-2xl">{timeLeft.days}</p>
            <span className="text-xs">Days</span>
          </div>
          <p className="text-2xl mx-1 self-center">:</p>
          <div className="flex flex-col items-center">
            <p className="text-2xl">{timeLeft.hours}</p>
            <span className="text-xs">Hours</span>
          </div>
          <p className="text-2xl mx-1 self-center">:</p>
          <div className="flex flex-col items-center">
            <p className="text-2xl">{timeLeft.minutes}</p>
            <span className="text-xs">Minutes</span>
          </div>
          <p className="text-2xl mx-1 self-center">:</p>
          <div className="flex flex-col items-center">
            <p className="text-2xl">{timeLeft.seconds}</p>
            <span className="text-xs">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;

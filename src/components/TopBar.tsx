import { useEffect, useState } from "react";

export const TopBar = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 0 ? 10 * 60 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-center py-2 px-4 text-sm font-semibold tracking-wide shadow-md sticky top-0 z-50 flex items-center justify-center gap-2 flex-wrap">
      <span>⚡ MEGA SALE IS LIVE</span>
      <span className="hidden sm:inline">|</span>
      <span>Get Lifetime Access at ₹99 now</span>
      <span className="hidden sm:inline">|</span>
      <span className="font-mono bg-black/20 px-2 py-0.5 rounded">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
      <span>left</span>
    </div>
  );
};
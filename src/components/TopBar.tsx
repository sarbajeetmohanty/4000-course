import { useEffect, useState } from "react";

export const TopBar = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 0 ? 10 * 60 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  
  return (
    <div className="bg-[#111322] text-white py-3 px-4 w-full sticky top-0 z-50 flex items-center justify-center gap-6 shadow-md">
      
      <div className="flex items-center text-orange-500 font-extrabold text-sm sm:text-base tracking-wide">
        <span className="mr-2 text-xl">⚡</span>
        MEGA SALE LIVE — LIFETIME ACCESS AT ₹99
      </div>

      <div className="hidden sm:block h-8 w-px bg-slate-700"></div>

      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center">
          <div className="bg-[#1c1f37] rounded-xl w-12 h-12 flex items-center justify-center text-yellow-400 font-bold text-xl">
            {String(hours).padStart(2, '0')}
          </div>
          <span className="text-[10px] text-slate-400 mt-1 font-medium">HRS</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#1c1f37] rounded-xl w-12 h-12 flex items-center justify-center text-yellow-400 font-bold text-xl">
            {String(minutes).padStart(2, '0')}
          </div>
          <span className="text-[10px] text-slate-400 mt-1 font-medium">MIN</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#1c1f37] rounded-xl w-12 h-12 flex items-center justify-center text-yellow-400 font-bold text-xl">
            {String(seconds).padStart(2, '0')}
          </div>
          <span className="text-[10px] text-slate-400 mt-1 font-medium">SEC</span>
        </div>
      </div>

    </div>
  );
};
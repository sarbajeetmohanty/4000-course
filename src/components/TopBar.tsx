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
    <div className="bg-[#111322] text-white py-2 sm:py-3 px-2 sm:px-4 w-full sticky top-0 z-50 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 shadow-md">
      
      <div className="flex flex-wrap items-center justify-center text-center text-orange-500 font-extrabold text-xs sm:text-base tracking-wide leading-tight">
        <span className="mr-1 sm:mr-2 text-lg sm:text-xl">⚡</span>
        MEGA SALE LIVE — LIFETIME ACCESS AT ₹99
        <span className="line-through text-orange-700/70 ml-2">₹4,999</span>
      </div>

      <div className="hidden sm:block h-8 w-px bg-slate-700"></div>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2 sm:gap-3 scale-90 sm:scale-100">
          <div className="flex flex-col items-center">
            <div className="bg-[#1c1f37] rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-yellow-400 font-bold text-lg sm:text-xl">
              {String(hours).padStart(2, '0')}
            </div>
            <span className="text-[9px] sm:text-[10px] text-slate-400 mt-1 font-medium">HRS</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#1c1f37] rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-yellow-400 font-bold text-lg sm:text-xl">
              {String(minutes).padStart(2, '0')}
            </div>
            <span className="text-[9px] sm:text-[10px] text-slate-400 mt-1 font-medium">MIN</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#1c1f37] rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-yellow-400 font-bold text-lg sm:text-xl">
              {String(seconds).padStart(2, '0')}
            </div>
            <span className="text-[9px] sm:text-[10px] text-slate-400 mt-1 font-medium">SEC</span>
          </div>
        </div>

        <button 
          className="bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-400 hover:to-emerald-300 text-black font-extrabold text-sm sm:text-base py-2 px-6 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all animate-pulse transform hover:scale-105"
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
        >
          CLAIM OFFER
        </button>
      </div>

    </div>
  );
};
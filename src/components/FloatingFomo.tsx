import { useEffect, useState } from "react";

const names = ["Rahul", "Priya", "Amit", "Neha", "Vikram", "Sneha", "Rohan", "Anjali"];
const cities = ["Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad", "Chennai"];

export const FloatingFomo = () => {
  const [visible, setVisible] = useState(false);
  const [buyer, setBuyer] = useState({ name: "Rahul", city: "Mumbai", time: 2 });

  useEffect(() => {
    const showPopup = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const city = cities[Math.floor(Math.random() * cities.length)];
      const time = Math.floor(Math.random() * 10) + 1;
      setBuyer({ name, city, time });
      setVisible(true);
      
      setTimeout(() => {
        setVisible(false);
      }, 4000);
    };

    const interval = setInterval(() => {
      if (!visible) {
        showPopup();
      }
    }, 12000);

    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 right-4 sm:right-8 bg-white border border-gray-200 shadow-2xl rounded-xl p-4 flex items-start gap-3 z-50 animate-in slide-in-from-right-8 fade-in duration-500 max-w-xs">
      <div className="text-2xl">🚀</div>
      <div className="flex-1">
        <p className="text-sm text-gray-800 font-medium leading-tight">
          <span className="font-bold">{buyer.name}</span> from {buyer.city}
        </p>
        <div className="flex items-center gap-1 mt-1 text-yellow-400 text-[10px]">
          ★★★★★ <span className="text-gray-500 ml-1">Verified Purchase</span>
        </div>
        <p className="text-xs text-green-600 font-semibold mt-1">
          Just claimed the Lifetime Access for ₹99!
        </p>
        <p className="text-[10px] text-gray-400 mt-1">{buyer.time} minutes ago</p>
      </div>
      <button 
        onClick={() => setVisible(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
      >
        ✕
      </button>
    </div>
  );
};
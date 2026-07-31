export const StickyBottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 sm:hidden z-50 flex items-center justify-between shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
      <div>
        <p className="text-xs text-gray-500 font-semibold line-through">₹4,999</p>
        <p className="text-xl text-green-600 font-extrabold leading-none">₹99 <span className="text-xs text-gray-800 font-normal">only</span></p>
      </div>
      <button 
        className="bg-gradient-to-r from-green-500 to-emerald-400 text-black font-extrabold text-sm py-3 px-6 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)] animate-pulse"
        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
      >
        CLAIM NOW
      </button>
    </div>
  );
};
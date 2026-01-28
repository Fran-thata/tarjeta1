import React from 'react';

interface RoseGoldButtonProps {
  text: string;
  onClick?: () => void;
}

export const RoseGoldButton: React.FC<RoseGoldButtonProps> = ({ text, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="w-full relative group shadow-md hover:shadow-lg transition-all duration-300 rounded-full overflow-hidden mb-4"
    >
      {/* Background Gradient to mimic metal/copper */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#c59d8e] via-[#e5c7bc] to-[#c59d8e]"></div>
      
      {/* Content */}
      <div className="relative py-3.5 px-6 text-center">
        <span className="text-[#3a2e2a] font-medium text-lg tracking-wide drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
          {text}
        </span>
      </div>
    </button>
  );
};

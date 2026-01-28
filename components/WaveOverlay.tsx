import React from 'react';

export const WaveOverlay: React.FC = () => {
  return (
    <div className="w-full h-full pointer-events-none overflow-hidden">
        <svg 
            viewBox="0 0 375 400" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-full"
        >
            {/* The Green Shape */}
            <path 
                d="M0 0 H375 V100 C375 100 280 160 187.5 160 C95 160 0 100 0 100 V0 Z" 
                fill="#bdcec0" 
            />
            
            {/* The Golden Line Tracing the Green Shape */}
            <path 
                d="M0 100 C0 100 95 160 187.5 160 C280 160 375 100 375 100" 
                stroke="url(#goldGradient)" 
                strokeWidth="1.5"
                fill="none"
            />

            {/* Decorative Side Lines (Left) */}
            <path
                d="M-20 250 C 20 280, 50 350, 40 450"
                stroke="url(#goldGradient)" 
                strokeWidth="1"
                fill="none"
                opacity="0.6"
            />
            <path
                d="M-10 280 C 10 300, 30 350, 20 450"
                stroke="url(#goldGradient)" 
                strokeWidth="0.5"
                fill="none"
                opacity="0.4"
            />

             {/* Decorative Side Lines (Right) */}
             <path
                d="M395 300 C 355 330, 325 400, 335 500"
                stroke="url(#goldGradient)" 
                strokeWidth="1"
                fill="none"
                opacity="0.6"
            />
            
            <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#bf9585" />
                    <stop offset="50%" stopColor="#f4dcd1" />
                    <stop offset="100%" stopColor="#bf9585" />
                </linearGradient>
            </defs>
        </svg>
    </div>
  );
};
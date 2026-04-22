import React from 'react';

export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Outer Yellow Ticks */}
        <circle cx="50" cy="50" r="45" stroke="#FACC15" strokeWidth="6" strokeDasharray="4 4" className="opacity-80" />
        
        {/* Cyan Inner Ring - Partial */}
        <path d="M25 25 A 35 35 0 1 0 75 25" stroke="#22D3EE" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M75 25 A 35 35 0 0 1 75 75" stroke="#22D3EE" strokeWidth="5" fill="none" strokeLinecap="round" className="opacity-20" />

        {/* Green Battery/Semi-circle */}
        <path d="M50 35 L75 35 A 25 25 0 0 1 50 85 L50 35" fill="#22C55E" />
        <path d="M50 45 H75 M50 55 H75 M50 65 H75" stroke="#020617" strokeWidth="2" />

        {/* Central Yellow Lightning Bolt */}
        <path d="M50 15 L25 50 H45 L30 85 L65 40 H50 L65 15 Z" fill="#FACC15" stroke="#020617" strokeWidth="1" />
      </svg>
    </div>
  );
}

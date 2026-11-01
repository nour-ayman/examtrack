import { useState } from 'react';
import btnNormal from '../assets/Print Button - normal.png';
import btnHover from '../assets/Print Button - Cursor.png';
import btnClicked from '../assets/Print Button - Clicked.png';

export default function PrintButton({ onPrint }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    if (onPrint) {
      onPrint();
    } else {
      window.print();
    }
  };

  // Suɓagol natal fawaade e ngonka button kaa
  const currentBg = isPressed ? btnClicked : isHovered ? btnHover : btnNormal;

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className="relative inline-flex items-center justify-center cursor-pointer select-none border-none bg-transparent p-0 transition-transform active:scale-95 focus:outline-none"
    >
      {/* Natal Background Button */}
      <img
        src={currentBg}
        alt="Print Button"
        className="h-auto w-[90px] sm:w-[110px] block pixelated pointer-events-none"
      />

      {/* Binndol "Print" e caka button */}
      <span
        className={`absolute font-pixel font-bold text-xs sm:text-sm tracking-wider text-[#E59819] pointer-events-none ${
          isPressed ? 'translate-y-[1px]' : ''
        }`}
      >
        Print
      </span>
    </button>
  );
}
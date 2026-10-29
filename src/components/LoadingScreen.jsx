import { useState, useEffect } from 'react';
import LogoImg from '../assets/Logo.png';
import wezzaGif from '../assets/wezza.gif';

export default function LoadingScreen() {
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '.' : prev + '.'));
    }, 450);

    return () => clearInterval(dotsInterval);
  }, []);

  return (
    <div className="z-10 flex flex-col items-center justify-center select-none -mt-24 sm:-mt-46">
      {/* Logo EXAMTRACK */}
      <img 
        src={LogoImg} 
        alt="ExamTrack Logo" 
        className="w-[480px] sm:w-[560px] md:w-[680px] max-w-[92vw] h-auto pixelated drop-shadow-sm" 
      />

      {/* Wezza marfoo3a le fo2 direct ta7t el logo */}
      <div className="flex flex-col items-center -mt-4 sm:-mt-6">
        <img 
          src={wezzaGif} 
          alt="Dancing Wezza" 
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain pixelated" 
        />
        {/* Loading text kbeer 7aga basita w wadi7 */}
        <p className="mt-2 font-pixel text-sm sm:text-base text-black tracking-widest lowercase">
          loading{dots}
        </p>
      </div>
    </div>
  );
}
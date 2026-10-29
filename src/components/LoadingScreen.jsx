import { useState, useEffect } from 'react';
import LogoImg from '../assets/Logo.png';
import cloudImg from '../assets/cloud.png';
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
    <div className="relative w-screen h-screen overflow-hidden bg-[#aedaf1] flex items-center justify-center select-none">
      
      {/* 1. Sahab kbeer w wadi7 f el background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Se7aba fo2 3al shemal */}
        <img 
          src={cloudImg} 
          alt="cloud" 
          className="absolute top-[12%] left-0 w-[540px] md:w-[620px] opacity-90 animate-cloud-slow pixelated" 
        />
        {/* Se7aba f el nos */}
        <img 
          src={cloudImg} 
          alt="cloud" 
          className="absolute top-[28%] left-0 w-[560px] md:w-[660px] opacity-85 animate-cloud-fast pixelated" 
          style={{ animationDelay: '-8s' }}
        />
        {/* Se7aba ta7t 3al shemal */}
        <img 
          src={cloudImg} 
          alt="cloud" 
          className="absolute top-[52%] left-0 w-[450px] md:w-[540px] opacity-80 animate-cloud-slow pixelated" 
          style={{ animationDelay: '-14s' }}
        />
      </div>

      {/* 2. Container el Logo + el Wezza (marfoo3een f nos el shasha b tanasoq) */}
      <div className="z-10 flex flex-col items-center -mt-24 sm:-mt-46">
        
        {/* Logo EXAMTRACK kbeer */}
        <img 
          src={LogoImg} 
          alt="ExamTrack Logo" 
          className="w-[480px] sm:w-[560px] md:w-[680px] max-w-[92vw] h-auto pixelated drop-shadow-sm" 
        />

        {/* Wezza marfoo3a oreyeba gedan ta7t el logo */}
        <div className="flex flex-col items-center mt-2 sm:mt-3">
          <img 
            src={wezzaGif} 
            alt="Dancing Wezza" 
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain pixelated" 
          />
          <p className="mt-2 font-pixel text-xs sm:text-sm text-black tracking-widest lowercase">
            loading{dots}
          </p>
        </div>

      </div>

    </div>
  );
}
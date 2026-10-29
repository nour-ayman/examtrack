import { useState } from 'react';

// Sowar el logo SVG wel mascot
import logoNormal from '../assets/Logo.svg';
import logoCursor from '../assets/Logo - cursor.svg';
import logoClicked from '../assets/logo - clicked.svg';
import mascotHead from '../assets/mascot head.png';

// Soret el search bar
import searchBarImg from '../assets/search bar.png';

export default function SearchScreen() {
  const [studentId, setStudentId] = useState('');
  const [logoState, setLogoState] = useState('normal');

  // Arqamak el asleya lel logo men gheer ay ta3deel
  const getLogoConfig = () => {
    if (logoState === 'active') {
      return {
        src: logoClicked,
        className: 'h-[36px] sm:h-[40px]',
      };
    }
    if (logoState === 'hover') {
      return {
        src: logoCursor,
        className: 'h-[38px] sm:h-[42px]',
      };
    }
    return {
      src: logoNormal,
      className: 'h-[30px] sm:h-[24px]',
    };
  };

  const currentLogo = getLogoConfig();

  // Handler beyakhod arqam bas w a5ro 9 arqam bel zabt
  const handleInputChange = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, '').slice(0, 9);
    setStudentId(onlyNums);
  };

  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-between items-center select-none font-pixel pointer-events-auto px-4 py-4">
      
      {/* ========================================================= */}
      {/* 1. TOP HEADER SECTION (Logo + Mascot Head)               */}
      {/* ========================================================= */}
      <div className="w-full flex justify-end items-center pt-3 sm:pt-4 pr-4 sm:pr-8">
        <div 
          className="flex items-center gap-2 cursor-pointer select-none"
          onMouseEnter={() => setLogoState('hover')}
          onMouseLeave={() => setLogoState('normal')}
          onMouseDown={() => setLogoState('active')}
          onMouseUp={() => setLogoState('hover')}
        >
          <div className="flex items-center justify-center">
            <img 
              src={currentLogo.src} 
              alt="ExamTrack Logo" 
              className={`${currentLogo.className} w-auto pixelated object-contain block`} 
            />
          </div>

          <div className="w-[60px] sm:w-[54px] h-[50px] sm:h-[64px] flex items-center justify-center shrink-0">
            <img 
              src={mascotHead} 
              alt="Mascot Head" 
              className="w-full h-full pixelated object-contain block" 
            />
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. CENTER SECTION: Title + Search Bar Frame              */}
      {/* ========================================================= */}
      {/* Container wahed ma7koom leletneen ma3 ba3d */}
      <div className="flex flex-col items-center justify-center w-full max-w-[940px] px-4 -mt-6 sm:-mt-8">
        
        {/* 1. Title: mafehosh margins kbira khales */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold tracking-wider mb-[-200px] select-none text-center">
          Enter your ID
        </h1>

        {/* 2. Search Bar Box: h-auto w inline-block/w-full ma7koom */}
        <div className="relative w-full h-auto flex items-center justify-center">
          
          {/* Sora Search Bar */}
          <img 
            src={searchBarImg} 
            alt="Search Bar" 
            className="w-full h-auto pixelated pointer-events-none select-none block" 
          />

          {/* Input shaffaf: arqam bas w 9 digits max */}
          <input 
            type="text" 
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={9}
            value={studentId}
            onChange={handleInputChange}
            autoFocus
            className="absolute inset-x-12 sm:inset-x-16 inset-y-0 bg-transparent text-black text-center text-xl sm:text-2xl font-pixel tracking-widest focus:outline-none border-none p-0 m-0 leading-none translate-y-[4px]" 
          />
        </div>

      </div>

      {/* Spacer ta7t bas lel balance */}
      <div className="h-4"></div>

    </div>
  );
}
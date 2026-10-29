import { useState } from 'react';

// Sowar el logo SVG wel mascot
import logoNormal from '../assets/Logo.svg';
import logoCursor from '../assets/Logo - cursor.svg';
import logoClicked from '../assets/logo - clicked.svg';
import mascotHead from '../assets/mascot head.png';

// Soret el search bar
import searchBarImg from '../assets/search bar.png';

// Sowar el button el ma3moolaha trim (560x135 px)
import btnNormal from '../assets/find my schedule button - normal.png';
import btnCursor from '../assets/find my schedule button - cursor.png';
import btnClicked from '../assets/find my schedule button - clicked.png';

// Soret el info icon
import infoIcon from '../assets/info.png';

export default function SearchScreen({ onSearch }) {
  const [studentId, setStudentId] = useState('');
  const [logoState, setLogoState] = useState('normal');
  const [btnState, setBtnState] = useState('normal');

  // Config el logo w el mascot
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

  // Sora el zorrar hasab el state
  const getBtnSrc = () => {
    if (btnState === 'active') return btnClicked;
    if (btnState === 'hover') return btnCursor;
    return btnNormal;
  };

  // Arqam bas w 9 digits max
  const handleInputChange = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, '').slice(0, 9);
    setStudentId(onlyNums);
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (!studentId.trim()) return;
    if (onSearch) onSearch(studentId.trim());
  };

  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-between items-center select-none font-pixel pointer-events-auto px-4 py-4">
      
      {/* 1. Header: Logo + Mascot */}
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

      {/* 2. Center: Title + Search Bar + Button */}
      <div className="flex flex-col items-center justify-center w-full max-w-[940px] px-4 -mt-6 sm:-mt-8">
        
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold tracking-wider mb-2 select-none text-center translate-y-[190px]">
          Enter your ID
        </h1>

        {/* Search Bar Frame */}
        <div className="relative w-full h-auto flex items-center justify-center">
          <img 
            src={searchBarImg} 
            alt="Search Bar" 
            className="w-full h-auto pixelated pointer-events-none select-none block" 
          />

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

        {/* Button: Ma2as mazboot b-hitbox mahsoor 3ala ad el sora */}
        <div 
          onClick={handleSubmit}
          onMouseEnter={() => setBtnState('hover')}
          onMouseLeave={() => setBtnState('normal')}
          onMouseDown={() => setBtnState('active')}
          onMouseUp={() => setBtnState('hover')}
          className="relative cursor-pointer select-none mt-6 w-[260px] sm:w-[380px] flex items-center justify-center shrink-0 -translate-y-[170px]"
        >
          <img 
            src={getBtnSrc()} 
            alt="Find My Schedule Button" 
            className="w-full h-auto pixelated pointer-events-none block" 
          />

          {/* El Text fo2 el zorrar */}
          <span 
            className={`absolute inset-0 flex items-center justify-center text-black font-pixel font-bold text-sm sm:text-2xl tracking-wider pointer-events-none ${
              btnState === 'active' ? 'translate-y-[2px]' : '-translate-y-[0.5px]'
            }`}
          >
            Find My Schedule &gt;
          </span>
        </div>

        {/* Info Note: Icon + Text */}
        <div className="flex items-center justify-center gap-2 -translate-y-[320px] select-none pointer-events-none opacity-60">
          <img 
            src={infoIcon} 
            alt="Info" 
            className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] pixelated object-contain" 
          />
          <span className="text-gray-700 text-xs sm:text-sm font-pixel tracking-wide">
            Your ID is only used to find your schedule
          </span>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-4"></div>

    </div>
  );
}
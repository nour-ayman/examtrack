import { useState } from 'react';

// Sowar el logo SVG wel mascot
import logoNormal from '../assets/Logo.svg';
import logoCursor from '../assets/Logo - cursor.svg';
import logoClicked from '../assets/logo - clicked.svg';
import mascotHead from '../assets/mascot head.png';

export default function Header({ onLogoClick }) {
  const [logoState, setLogoState] = useState('normal');

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

  return (
    <header className="w-full flex justify-end items-center pt-3 sm:pt-4 pr-4 sm:pr-8 select-none">
      <div 
        className="flex items-center gap-2 cursor-pointer select-none"
        onClick={onLogoClick}
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

        <div className="w-[60px] sm:w-[54px] h-[60px] sm:h-[64px] flex items-center justify-center shrink-0">
        <img 
            src={mascotHead} 
            alt="Mascot Head" 
            className="w-[48px] h-[98px] -translate-x-[5px] -translate-y-[0px] pixelated object-contain block pointer-events-none" 
        />
    </div>
      </div>
    </header>
  );
}
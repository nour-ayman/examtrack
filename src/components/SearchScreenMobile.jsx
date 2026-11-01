import { useState } from 'react';

// Reusable Header Component
import Header from './Header';

// Assets
import searchBarImg from '../assets/search bar.png';
import btnNormal from '../assets/find my schedule button - normal.png';
import btnCursor from '../assets/find my schedule button - cursor.png';
import btnClicked from '../assets/find my schedule button - clicked.png';
import infoIcon from '../assets/info.png';

export default function SearchScreenMobile({ onSearch }) {
  const [studentId, setStudentId] = useState('');
  const [btnState, setBtnState] = useState('normal');

  const getBtnSrc = () => {
    if (btnState === 'active') return btnClicked;
    if (btnState === 'hover') return btnCursor;
    return btnNormal;
  };

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
    <div className="relative z-10 w-full min-h-screen flex flex-col justify-between items-center select-none font-pixel pointer-events-auto px-4 py-4 overflow-hidden">
      
      {/* 1. Header (Mobile View) */}
      <div className="w-full shrink-0 -translate-x-[0px] -translate-y-[0px]">
        <Header />
      </div>

      {/* 2. Main Center Content Box */}
      <div className="w-full flex-1 flex flex-col items-center justify-center -translate-x-[0px] -translate-y-[40px]">
        
        {/* Title: Size ani Translate control */}
        <h1 className="text-xl sm:text-2xl text-black font-bold tracking-wider select-none text-center -translate-x-[0px] -translate-y-[-50px]">
          Enter your ID
        </h1>

        {/* Search Bar: Box Size ani Input Alignment */}
        <div className="relative w-[410px] h-auto flex items-center justify-center -translate-x-[0px] -translate-y-[0px]">
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
            className="absolute inset-x-6 inset-y-0 bg-transparent text-black text-center text-base font-pixel tracking-widest focus:outline-none border-none p-0 m-0 leading-none -translate-x-[0px] translate-y-[2px]" 
          />
        </div>

        {/* Button: Size ani Translate control */}
        <div 
          onClick={handleSubmit}
          onMouseEnter={() => setBtnState('hover')}
          onMouseLeave={() => setBtnState('normal')}
          onMouseDown={() => setBtnState('active')}
          onMouseUp={() => setBtnState('hover')}
          className="relative cursor-pointer select-none w-[220px] flex items-center justify-center shrink-0 -translate-x-[0px] translate-y-[-50px]"
        >
          <img 
            src={getBtnSrc()} 
            alt="Find My Schedule Button" 
            className="w-full h-auto pixelated pointer-events-none block" 
          />

          {/* Button Text */}
          <span 
            className={`absolute inset-0 flex items-center justify-center text-black font-pixel font-bold text-xs tracking-wider pointer-events-none ${
              btnState === 'active' ? 'translate-y-[2px]' : '-translate-y-[0.5px]'
            }`}
          >
            Find My Schedule &gt;
          </span>
        </div>

        {/* Info Note: Icon, Text ani Translate */}
        <div className="flex items-center justify-center gap-1.5 select-none pointer-events-none opacity-60 -translate-x-[0px] translate-y-[22px]">
          <img 
            src={infoIcon} 
            alt="Info" 
            className="w-[12px] h-[12px] pixelated object-contain -translate-x-[0px] -translate-y-[163px]" 
          />
          <span className="text-gray-700 text-[10px] font-pixel tracking-wide text-center -translate-y-[160px]">
            Your ID is only used to find your schedule
          </span>
        </div>

      </div>

      {/* 3. Bottom Spacer */}
      <div className="h-4 shrink-0"></div>

    </div>
  );
}
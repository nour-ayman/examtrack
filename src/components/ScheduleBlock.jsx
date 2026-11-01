import blockBg from '../assets/Schedule Block - Normal.png';

export default function ScheduleBlock({ exam, index = 1 }) {
  // Helper 3ashan ye-extract el yom wel shahr men format: "01- Saturday, November 07, 2026"
  const parseDate = (dayString) => {
    if (!dayString) return { dayNum: '--', monthName: '---' };
    const parts = dayString.split(',');
    if (parts.length >= 2) {
      const monthDay = parts[1].trim().split(' '); // ['November', '07']
      const monthName = (monthDay[0]?.slice(0, 3) || 'NOV').toUpperCase() + '.';
      const dayNum = monthDay[1] || '--';
      return { dayNum, monthName };
    }
    return { dayNum: '--', monthName: '---' };
  };

  const { dayNum, monthName } = parseDate(exam?.day);

  return (
    <div className="relative w-full max-w-[940px] select-none font-pixel">
      {/* 1. Background Frame */}
      <img
        src={blockBg}
        alt="Schedule Block Frame"
        className="w-full h-auto pixelated block pointer-events-none"
      />

      {/* 2. Top-Right Index Number */}
      <span className="absolute top-2 right-4 text-xs sm:text-sm text-gray-400 font-pixel">
        {index}
      </span>

      {/* 3. Content Overlay */}
      <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-8">
        
        {/* Date Box: Day + Month (Font Daydream bas) */}
        <div className="flex flex-col items-center justify-center shrink-0 w-[55px] sm:w-[75px] md:w-[90px] font-daydream">
          <span className="text-xl sm:text-2xl md:text-3xl text-black leading-none">
            {dayNum}
          </span>
          <span className="text-xs sm:text-sm md:text-base text-black tracking-wider mt-6.5 leading-none">
            {monthName}
          </span>
        </div>

        {/* Vertical Divider */}
        <div className="h-[60%] w-[1.5px] bg-[#96C7EB] mx-3 sm:mx-6 shrink-0" />

        {/* Grid / Columns (Font Minecraftia / font-pixel) + translate-y lel row kollo */}
        <div className="flex-1 grid grid-cols-4 items-center gap-2 sm:gap-4 font-pixel translate-y-[6px]">
          
          {/* Column 1: Course Code Title + Code */}
          <div className="flex flex-col justify-center overflow-visible">
            <span className="text-[9px] sm:text-[11px] text-gray-400 tracking-wider uppercase leading-none mb-1.5">
              COURSE CODE
            </span>
            <span className="text-xs sm:text-sm md:text-base font-bold text-black tracking-wide leading-normal pt-1 truncate">
              {exam?.subject || 'Subject'}
            </span>
          </div>

          {/* Column 2: Time */}
          <div className="flex flex-col justify-center overflow-visible">
            <span className="text-[9px] sm:text-[11px] text-gray-400 tracking-wider uppercase leading-none mb-1.5">
              TIME
            </span>
            <span className="text-[11px] sm:text-xs md:text-sm font-bold text-black tracking-tight leading-normal pt-1">
              {exam?.time || '--'}
            </span>
          </div>

          {/* Column 3: Location */}
          <div className="flex flex-col justify-center overflow-visible">
            <span className="text-[9px] sm:text-[11px] text-gray-400 tracking-wider uppercase leading-none mb-1.5">
              LOCATION
            </span>
            <span className="text-[11px] sm:text-xs md:text-sm font-bold text-black tracking-wide leading-normal pt-1 truncate">
              {exam?.facilityType || 'Main Campus'}
            </span>
          </div>

          {/* Column 4: Room No. */}
          <div className="flex flex-col justify-center overflow-visible">
            <span className="text-[9px] sm:text-[11px] text-gray-400 tracking-wider uppercase leading-none mb-1.5">
              ROOM NO.
            </span>
            <span className="text-xs sm:text-sm md:text-base font-bold text-[#E59819] tracking-wider leading-normal pt-1">
              {exam?.room || '--'}
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
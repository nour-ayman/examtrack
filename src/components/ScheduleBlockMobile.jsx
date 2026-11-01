import blockBg from '../assets/Schedule Block - Normal.png';

export default function ScheduleBlockMobile({ exam, index = 1 }) {
  // Helper 3ashan ye-extract el yom wel shahr men format: "01- Saturday, November 07, 2026"
  const parseDate = (dayString) => {
    if (!dayString) return { dayNum: '--', monthName: '---' };
    const parts = dayString.split(',');
    if (parts.length >= 2) {
      const monthDay = parts[1].trim().split(' ');
      const monthName = (monthDay[0]?.slice(0, 3) || 'NOV').toUpperCase() + '.';
      const dayNum = monthDay[1] || '--';
      return { dayNum, monthName };
    }
    return { dayNum: '--', monthName: '---' };
  };

  const { dayNum, monthName } = parseDate(exam?.day);

  return (
    <div className="relative w-full max-w-[420px] shrink-0 select-none font-pixel flex items-center -translate-x-[0px] -translate-y-[-30px]">
      
      {/* 1. Background Frame */}
      <img
        src={blockBg}
        alt="Schedule Block Frame"
        className="w-full h-auto pixelated block pointer-events-none"
      />

      {/* 2. Index Number: Taht 3ala el yameen */}
      <span className="absolute bottom-1.5 right-3 text-[10px] text-gray-400 font-pixel pointer-events-none select-none z-20 -translate-x-[-5px] -translate-y-[-5px]">
        {index}
      </span>

      {/* 3. Content Overlay */}
      <div className="absolute inset-0 flex items-center px-1 sm:px-4">
        
        {/* Date Box: Day + Month (Font Daydream bas) */}
        <div className="flex flex-col items-center justify-center shrink-0 w-[65px] font-daydream -translate-x-[0px] -translate-y-[-2px]">
          <span className="text-xl sm:text-2xl text-black leading-none">
            {dayNum}
          </span>
          <span className="text-[9px] sm:text-xs text-black tracking-wider mt-1 leading-none">
            {monthName}
          </span>
        </div>

        {/* Vertical Divider */}
        <div className="h-[90%] w-[1.5px] bg-[#96C7EB] mx-2 sm:mx-3 shrink-0" />

        {/* 4 Columns Grid: Nafs tareeqet el desktop ma3 translate-y le ta7t */}
        <div className="flex-1 grid grid-cols-4 items-center gap-1.5 font-pixel translate-y-[6px]">
        
        {/* Column 1: Course Code */}
        <div className="flex flex-col justify-center overflow-visible">
            <span className="text-[8px] sm:text-[9px] text-gray-400 tracking-wider uppercase leading-none mb-1.5">
            COURSE CODE
            </span>
            <span className="text-[9.5px] sm:text-[10.5px] font-bold text-black tracking-tight leading-normal pt-1 truncate -translate-y-[5px]">
            {exam?.subject || 'Subject'}
            </span>
        </div>

        {/* Column 2: Time */}
        <div className="flex flex-col justify-center overflow-visible -translate-x-[0px] -translate-y-[0px]">
        <span className="text-[8px] sm:text-[9px] text-gray-400 tracking-wider uppercase leading-none mb-1 -translate-y-[0px]">
            TIME
        </span>

        {exam?.time && exam.time.includes('-') ? (
            <div className="flex flex-col gap-y-[3px] text-[9px] sm:text-[10px] font-bold text-black tracking-tight leading-none pt-0.5 -translate-y-[0px]">
            {/* El Sa3a el Oula */}
            <span className="-translate-y-[0px]">
                {exam.time.split('-')[0].trim()}
            </span>

            {/* El Sa3a el Tanya */}
            <span className="-translate-y-[0px]">
                {exam.time.split('-')[1].trim()}
            </span>
            </div>
        ) : (
            <span className="text-[9px] sm:text-[10px] font-bold text-black tracking-tight leading-normal pt-1 -translate-y-[0px]">
            {exam?.time || '--'}
            </span>
        )}
        </div>

        {/* Column 3: Location */}
        <div className="flex flex-col justify-center overflow-visible">
        <span className="text-[8px] sm:text-[9px] text-gray-400 tracking-wider uppercase leading-none mb-1">
            LOCATION
        </span>
        <span className="text-[8.5px] sm:text-[9.5px] font-bold text-black tracking-tight leading-[1.15] pt-1 break-words line-clamp-2">
            {exam?.facilityType || 'Campus'}
        </span>
        </div>
        {/* Column 4: Room No. */}
        <div className="flex flex-col justify-center overflow-visible">
            <span className="text-[8px] sm:text-[9px] text-gray-400 tracking-wider uppercase leading-none mb-1.5">
            ROOM NO.
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-[#E59819] tracking-wider leading-normal pt-1">
            {exam?.room || '--'}
            </span>
        </div>

        </div>

      </div>

    </div>
  );
}
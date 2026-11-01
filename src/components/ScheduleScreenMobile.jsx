// src/components/ScheduleScreenMobile.jsx
import Header from './Header';
import ScheduleBlockMobile from './ScheduleBlockMobile';
import PrintButton from './PrintButton';

export default function ScheduleScreenMobile({ studentId, exams = [], onBack }) {
  const examCount = exams.length;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative z-10 w-full h-screen flex flex-col justify-between font-pixel pointer-events-auto select-none px-3 py-3 overflow-hidden">
      
      {/* 1. Header (Mobile) */}
      <div className="w-full shrink-0 print:hidden -translate-x-[0px] -translate-y-[0px]">
        <Header onLogoClick={onBack} />
      </div>

      {/* 2. Main Scrollable Container */}
      <div className="w-full flex-1 flex flex-col min-h-0 pt-2 -translate-x-[0px] -translate-y-[0px]">
        
        {/* Top Info Bar */}
        <div className="shrink-0 flex items-center justify-between px-2 mb-2 -translate-x-[0px] -translate-y-[0px]">
          <div className="flex flex-col -translate-x-[0px] -translate-y-[0px]">
            <h2 className="text-base font-bold text-black tracking-wide leading-tight">
              schedule found!
            </h2>
            <span className="text-xs font-bold text-[#E59819] tracking-wider mt-0.5">
              {examCount} scheduled {examCount === 1 ? 'exam' : 'exams'}
            </span>
          </div>

          <div className="print:hidden scale-90 origin-right -translate-x-[0px] -translate-y-[0px]">
            <PrintButton onPrint={handlePrint} />
          </div>
        </div>

        {/* 3. Schedule Blocks List: Akbar w b-scroll saless */}
        <div className="w-full flex-1 overflow-y-auto px-1 pb-10 flex flex-col items-center gap-3.5 custom-pixel-scroll print:overflow-visible">
          {exams.map((exam, idx) => (
            <ScheduleBlockMobile
              key={`${exam.subject}-${idx}`}
              exam={exam}
              index={idx + 1}
            />
          ))}
        </div>

      </div>

      {/* 4. Bottom Spacer */}
      <div className="h-2 shrink-0 print:hidden"></div>
    </div>
  );
}
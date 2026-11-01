import Header from './Header';
import ScheduleBlock from './ScheduleBlock';
import PrintButton from './PrintButton';

export default function ScheduleScreen({ studentId, exams = [], onBack }) {
  const examCount = exams.length;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative z-10 w-full h-screen flex flex-col justify-between font-pixel pointer-events-auto select-none px-4 py-4 overflow-hidden">
      
      {/* 1. Header (Sabet - bykhtefy fel teba3a) */}
      <div className="shrink-0 print:hidden">
        <Header onLogoClick={onBack} />
      </div>

      {/* 2. Main Area */}
      <div className="w-full max-w-[1020px] mx-auto flex-1 flex flex-col pt-2 sm:pt-4 min-h-0">
        
        {/* Top Bar: Title 3al shemal + Print Button 3al yameen */}
        <div className="shrink-0 flex items-center justify-between px-2 mb-2">
          
        {/* Top Info (3al shemal) */}
          <div className="flex flex-col -translate-x-[50px] -translate-y-[40px]">
            <h2 className="text-xl sm:text-2xl font-bold text-black tracking-wide leading-tight">
              schedule found!
            </h2>
            <span className="text-sm sm:text-base font-bold text-[#E59819] tracking-wider mt-0.5">
              {examCount} scheduled {examCount === 1 ? 'exam' : 'exams'}
            </span>
          </div>

          {/* Print Button (3al yameen - bykhtefy fel teba3a) */}
          <div className="print:hidden">
            <PrintButton onPrint={handlePrint} />
          </div>

        </div>

        {/* 3. Schedule Blocks List */}
        <div className="flex-1 overflow-y-auto pr-3 pb-6 flex flex-col items-center gap-3 custom-pixel-scroll print:overflow-visible">
          {exams.map((exam, idx) => (
            <ScheduleBlock
              key={`${exam.subject}-${idx}`}
              exam={exam}
              index={idx + 1}
            />
          ))}
        </div>

      </div>

      {/* Bottom Spacer */}
      <div className="h-2 shrink-0 print:hidden"></div>
    </div>
  );
}
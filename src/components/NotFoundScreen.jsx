import Header from './Header';
import confusedWezza from '../assets/confused wezza.png';

export default function NotFoundScreen({ onBack }) {
  return (
    <div className="relative z-10 w-full min-h-screen flex flex-col justify-between font-pixel pointer-events-auto select-none px-4 py-4">
      {/* 1. Header */}
      <Header onLogoClick={onBack} />

      {/* 2. Center Content */}
      <div className="w-full flex-1 flex flex-col items-center justify-center text-center -translate-y-8">
        {/* Title + Mascot */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold tracking-wide">
            User Not Found
          </h1>
          <img
            src={confusedWezza}
            alt="Confused Wezza"
            className="w-[100px] h-auto pixelated pointer-events-none translate-y-[-12px]"
          />
        </div>

        {/* Subtitle Message */}
        <p className="text-black text-xs sm:text-sm md:text-base font-bold tracking-wide mb-6">
          Make sure that you have entered the correct ID
        </p>

        {/* Try Again Button */}
        <button
          onClick={onBack}
          type="button"
          className="bg-[#FFAA00] hover:bg-[#FF9500] text-black font-pixel font-bold text-sm sm:text-base px-8 py-3.5 shadow-[0_4px_0_0_#C57D00] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
        >
          Try Again
        </button>
      </div>

      {/* Bottom Spacer */}
      <div className="h-4"></div>
    </div>
  );
}
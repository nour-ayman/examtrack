import cloudImg from '../assets/cloud.png';

export default function BackgroundClouds() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Se7aba fo2 3al shemal */}
      <img 
        src={cloudImg} 
        alt="cloud" 
        className="absolute top-[8%] left-0 w-[520px] md:w-[620px] opacity-85 animate-cloud-slow pixelated" 
      />

      {/* 2. Se7aba fo2 3al yemeen */}
      <img 
        src={cloudImg} 
        alt="cloud" 
        className="absolute top-[20%] left-0 w-[460px] md:w-[560px] opacity-80 animate-cloud-mid pixelated" 
        style={{ animationDelay: '-10s' }}
      />

      {/* 3. Se7aba f el nos */}
      <img 
        src={cloudImg} 
        alt="cloud" 
        className="absolute top-[34%] left-0 w-[540px] md:w-[640px] opacity-90 animate-cloud-fast pixelated" 
        style={{ animationDelay: '-5s' }}
      />

      {/* 4. Se7aba ta7t el nos */}
      <img 
        src={cloudImg} 
        alt="cloud" 
        className="absolute top-[50%] left-0 w-[420px] md:w-[520px] opacity-75 animate-cloud-slow pixelated" 
        style={{ animationDelay: '-16s' }}
      />

      {/* 5. Se7aba ta7t خالص */}
      <img 
        src={cloudImg} 
        alt="cloud" 
        className="absolute top-[66%] left-0 w-[480px] md:w-[580px] opacity-70 animate-cloud-mid pixelated" 
        style={{ animationDelay: '-7s' }}
      />
    </div>
  );
}
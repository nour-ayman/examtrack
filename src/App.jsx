import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 7 seconds loading duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#aedaf1] flex flex-col items-center justify-center font-pixel p-4">
      <h1 className="text-xl md:text-3xl text-black">Dashboard Ready!</h1>
      <button 
        onClick={() => setIsLoading(true)}
        className="mt-4 px-4 py-2 bg-[#ffd008] border-2 border-black rounded shadow text-xs uppercase"
      >
        Replay Loading
      </button>
    </div>
  );
}
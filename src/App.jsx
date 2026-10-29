import { useState, useEffect } from 'react';
import BackgroundClouds from './components/BackgroundClouds';
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

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#aedaf1] flex items-center justify-center font-pixel">
      {/* 1. Clouds persistent background */}
      <BackgroundClouds />

      {/* 2. Page View */}
      {isLoading ? (
        <LoadingScreen />
      ) : (
        /* Placeholder le 7ad ma n-import SearchScreen */
        <div className="z-10 flex flex-col items-center justify-center select-none text-black">
          <h1 className="text-xl sm:text-2xl font-bold tracking-wider">Search Screen Coming Soon...</h1>
        </div>
      )}
    </main>
  );
}
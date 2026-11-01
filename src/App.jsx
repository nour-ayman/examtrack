import { useState, useEffect } from 'react';
import BackgroundClouds from './components/BackgroundClouds';
import LoadingScreen from './components/LoadingScreen';
import SearchScreen from './components/SearchScreen';
import SearchScreenMobile from './components/SearchScreenMobile';
import ScheduleScreen from './components/ScheduleScreen';
import ScheduleScreenMobile from './components/ScheduleScreenMobile';
import NotFoundScreen from './components/NotFoundScreen';
import { getStudentSchedule } from './utils/scheduleService';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Detection le shashet el mobile (< 768px)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navigation states: 'search' | 'schedule' | 'not-found'
  const [currentScreen, setCurrentScreen] = useState('search');
  const [studentId, setStudentId] = useState('');
  const [exams, setExams] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    // 7 seconds loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  // Logic el search lama el user yedoos "Find My Schedule >"
  const handleSearch = async (id) => {
    try {
      setIsSearching(true);
      const results = await getStudentSchedule(id);

      if (results && results.length > 0) {
        setStudentId(id);
        setExams(results);
        setCurrentScreen('schedule');
      } else {
        setStudentId(id);
        setCurrentScreen('not-found');
      }
    } catch (error) {
      console.error("Search error:", error);
      setCurrentScreen('not-found');
    } finally {
      setIsSearching(false);
    }
  };

  // Yeraga3 el user lel search screen law das aala el logo aw zorrar back
  const handleBackToSearch = () => {
    setCurrentScreen('search');
    setStudentId('');
    setExams([]);
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#aedaf1] flex items-center justify-center font-pixel">
      {/* 1. Clouds daeman sha3'ala f el background */}
      <BackgroundClouds />

      {/* 2. Loading Screen el awelaaneya */}
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {/* Overlay spinner / text kheyaly law bey-search f el excel */}
          {isSearching && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 text-black font-pixel text-xl select-none">
              Searching...
            </div>
          )}

          {/* 3. El Screens hasab el state wel device */}
          {currentScreen === 'search' && (
            isMobile ? (
              <SearchScreenMobile onSearch={handleSearch} />
            ) : (
              <SearchScreen onSearch={handleSearch} />
            )
          )}

          {currentScreen === 'schedule' && (
            isMobile ? (
              <ScheduleScreenMobile 
                studentId={studentId} 
                exams={exams} 
                onBack={handleBackToSearch} 
              />
            ) : (
              <ScheduleScreen 
                studentId={studentId} 
                exams={exams} 
                onBack={handleBackToSearch} 
              />
            )
          )}

          {currentScreen === 'not-found' && (
            <NotFoundScreen onBack={handleBackToSearch} />
          )}
        </>
      )}
    </main>
  );
}
import { useState, useEffect, useCallback } from 'react';
import TopNavigation from '@/components/TopNavigation';
import ChapterMenu from '@/components/ChapterMenu';
import FractalBackground from '@/components/FractalBackground';
import ExponenterSection from '@/components/sections/ExponenterSection';
import MoleculeFieldSection from '@/components/sections/MoleculeFieldSection';
import SocialEncodingSection from '@/components/sections/SocialEncodingSection';
import { chapters } from '@/data/content';

const Index = () => {
  const [activeSource, setActiveSource] = useState('exponometer');
  const [activeChapter, setActiveChapter] = useState('intro');

  // Track active chapter based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (let i = chapters.length - 1; i >= 0; i--) {
        const element = document.getElementById(chapters[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveChapter(chapters[i].id);
          setActiveSource(chapters[i].section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSourceChange = useCallback((source: string) => {
    setActiveSource(source);
    
    // Find the first chapter of this source and scroll to it
    const firstChapter = chapters.find(ch => ch.section === source);
    if (firstChapter) {
      const element = document.getElementById(firstChapter.id);
      if (element) {
        const targetPosition = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    }
  }, []);

  const handleChapterClick = useCallback((chapterId: string) => {
    setActiveChapter(chapterId);
  }, []);

  return (
    <div className="min-h-screen">
      <FractalBackground />
      
      {/* Top Navigation */}
      <TopNavigation 
        activeSource={activeSource} 
        onSourceChange={handleSourceChange} 
      />
      
      {/* Right Chapter Menu */}
      <ChapterMenu 
        chapters={chapters}
        activeChapter={activeChapter}
        onChapterClick={handleChapterClick}
      />
      
      {/* Main Content Area */}
      <main className="mr-64 pt-24">
        <ExponenterSection />
        <MoleculeFieldSection />
        <SocialEncodingSection />
        
        {/* Footer */}
        <footer className="py-16 px-8 text-center text-muted-foreground">
          <p className="text-sm">
            Exploring exponential cognition through measurement, visualization, and social encoding.
          </p>
          <p className="text-xs mt-4 opacity-60">
            A journey from particles to waves, from individuals to collectives.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;

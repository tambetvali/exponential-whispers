import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Chapter {
  id: string;
  title: string;
  level: number;
  section: string;
}

interface ChapterMenuProps {
  chapters: Chapter[];
  activeChapter: string;
  onChapterClick: (chapterId: string) => void;
}

const ChapterMenu = ({ chapters, activeChapter, onChapterClick }: ChapterMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [needsRepeat, setNeedsRepeat] = useState(false);
  const [repeatCount, setRepeatCount] = useState(1);

  // Check if menu content is taller than viewport
  useEffect(() => {
    const checkHeight = () => {
      if (contentRef.current && menuRef.current) {
        const contentHeight = contentRef.current.scrollHeight;
        const viewportHeight = window.innerHeight - 120; // Account for padding
        
        if (contentHeight > viewportHeight) {
          setNeedsRepeat(true);
          // Calculate how many times to repeat for infinite effect
          const repeats = Math.ceil((document.body.scrollHeight / contentHeight) * 1.5);
          setRepeatCount(Math.max(3, repeats));
        } else {
          setNeedsRepeat(false);
          setRepeatCount(1);
        }
      }
    };

    checkHeight();
    window.addEventListener('resize', checkHeight);
    return () => window.removeEventListener('resize', checkHeight);
  }, [chapters]);

  const handleChapterClick = useCallback((chapterId: string) => {
    const element = document.getElementById(chapterId);
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition - 100;
    
    // Custom easing with acceleration then smooth stop
    const duration = Math.min(1500, Math.max(600, Math.abs(distance) * 0.5));
    const startTime = performance.now();

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      
      window.scrollTo(0, startPosition + distance * eased);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
    onChapterClick(chapterId);
  }, [onChapterClick]);

  const groupedChapters = chapters.reduce((acc, chapter) => {
    if (!acc[chapter.section]) {
      acc[chapter.section] = [];
    }
    acc[chapter.section].push(chapter);
    return acc;
  }, {} as Record<string, Chapter[]>);

  const sectionColors: Record<string, string> = {
    'exponometer': 'text-exponential',
    'molecule-field': 'text-molecule',
    'social-encoding': 'text-field',
  };

  const renderChapterList = (key: string = '') => (
    <div ref={key === '' ? contentRef : undefined} className="space-y-6">
      {Object.entries(groupedChapters).map(([section, sectionChapters]) => (
        <div key={`${section}-${key}`} className="space-y-1">
          <h4 className={`text-xs font-semibold uppercase tracking-wider mb-2 ${sectionColors[section] || 'text-primary'}`}>
            {section.replace('-', ' ')}
          </h4>
          {sectionChapters.map((chapter) => (
            <motion.button
              key={`${chapter.id}-${key}`}
              onClick={() => handleChapterClick(chapter.id)}
              className={`chapter-link w-full text-left ${
                activeChapter === chapter.id ? 'active' : ''
              }`}
              style={{ paddingLeft: `${chapter.level * 12}px` }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              {chapter.title}
            </motion.button>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <aside 
      ref={menuRef}
      className="fixed top-0 right-0 w-64 h-screen bg-sidebar border-l border-sidebar-border overflow-y-auto"
    >
      <div className="p-6 pt-8">
        <motion.h3 
          className="text-lg font-display font-semibold text-foreground mb-6 glow-text-gold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Contents
        </motion.h3>
        
        <AnimatePresence mode="wait">
          {needsRepeat ? (
            <motion.div 
              key="repeating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-16"
            >
              {Array.from({ length: repeatCount }).map((_, i) => (
                <div key={i}>
                  {renderChapterList(String(i))}
                  {i < repeatCount - 1 && (
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-8" />
                  )}
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="static"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {renderChapterList()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
};

export default ChapterMenu;

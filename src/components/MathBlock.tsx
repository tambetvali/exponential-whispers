import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { motion } from 'framer-motion';

interface MathBlockProps {
  latex: string;
  display?: boolean;
  label?: string;
}

const MathBlock = ({ latex, display = true, label }: MathBlockProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(latex, containerRef.current, {
          displayMode: display,
          throwOnError: false,
          trust: true,
        });
      } catch (error) {
        console.error('KaTeX rendering error:', error);
      }
    }
  }, [latex, display]);

  if (!display) {
    return <span ref={containerRef} className="inline-math" />;
  }

  return (
    <motion.div
      className="math-block"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5 }}
    >
      {label && (
        <div className="text-xs font-mono text-primary/70 mb-2 uppercase tracking-wider">
          {label}
        </div>
      )}
      <div ref={containerRef} className="text-center py-2" />
    </motion.div>
  );
};

export default MathBlock;

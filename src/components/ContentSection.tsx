import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ContentSectionProps {
  id: string;
  children: ReactNode;
  variant?: 'default' | 'exponential' | 'molecule' | 'field';
}

const ContentSection = ({ id, children, variant = 'default' }: ContentSectionProps) => {
  const accentColors = {
    default: '',
    exponential: 'before:from-exponential/5 before:to-transparent',
    molecule: 'before:from-molecule/5 before:to-transparent',
    field: 'before:from-field/5 before:to-transparent',
  };

  return (
    <motion.section
      id={id}
      className={`content-section relative ${accentColors[variant]}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
};

export default ContentSection;

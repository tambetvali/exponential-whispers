import { motion } from 'framer-motion';

interface TopNavigationProps {
  activeSource: string;
  onSourceChange: (source: string) => void;
}

const sources = [
  { id: 'exponometer', label: 'Exponometer', subtitle: 'Intuition Tools' },
  { id: 'molecule-field', label: 'Molecule-Field', subtitle: 'Cognition Diagrams' },
  { id: 'social-encoding', label: 'Social Encoding', subtitle: 'Structure Models' },
];

const TopNavigation = ({ activeSource, onSourceChange }: TopNavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-64 z-50 px-8 py-4">
      <div className="flex items-center gap-4 justify-start">
        {sources.map((source, index) => (
          <motion.button
            key={source.id}
            onClick={() => onSourceChange(source.id)}
            className={`nav-source-btn ${activeSource === source.id ? 'active' : ''}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold tracking-wide">{source.label}</span>
              <span className="text-xs text-muted-foreground">{source.subtitle}</span>
            </div>
            {activeSource === source.id && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                layoutId="activeSourceIndicator"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </nav>
  );
};

export default TopNavigation;

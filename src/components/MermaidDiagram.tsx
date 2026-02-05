import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { motion } from 'framer-motion';

interface MermaidDiagramProps {
  chart: string;
  title?: string;
  variant?: 'exponential' | 'molecule' | 'field';
}

// Initialize mermaid with custom theme
mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  themeVariables: {
    primaryColor: '#d4a634',
    primaryTextColor: '#f0f4ff',
    primaryBorderColor: '#d4a634',
    lineColor: '#5fb3b3',
    secondaryColor: '#7c5db8',
    tertiaryColor: '#1a1f35',
    background: '#0f1219',
    mainBkg: '#1a1f35',
    nodeBorder: '#d4a634',
    clusterBkg: '#1a1f35',
    clusterBorder: '#5fb3b3',
    titleColor: '#f0f4ff',
    edgeLabelBackground: '#1a1f35',
    nodeTextColor: '#f0f4ff',
  },
  flowchart: {
    curve: 'basis',
    padding: 20,
  },
});

const MermaidDiagram = ({ chart, title, variant = 'exponential' }: MermaidDiagramProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const renderDiagram = async () => {
      if (!containerRef.current) return;
      
      try {
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        setSvgContent(svg);
        setIsLoading(false);
      } catch (error) {
        console.error('Mermaid rendering error:', error);
        setIsLoading(false);
      }
    };

    renderDiagram();
  }, [chart]);

  const borderColors = {
    exponential: 'border-exponential/30',
    molecule: 'border-molecule/30',
    field: 'border-field/30',
  };

  const glowClasses = {
    exponential: 'shadow-glow-gold',
    molecule: 'shadow-glow-teal',
    field: 'shadow-glow-purple',
  };

  return (
    <motion.div
      className={`mermaid-container ${borderColors[variant]} ${glowClasses[variant]}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      {title && (
        <h4 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">
          {title}
        </h4>
      )}
      <div 
        ref={containerRef}
        className="mermaid overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: isLoading ? '' : svgContent }}
      />
      {isLoading && (
        <div className="flex items-center justify-center h-32">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </motion.div>
  );
};

export default MermaidDiagram;

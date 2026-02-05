import { motion } from 'framer-motion';
import ContentSection from '@/components/ContentSection';
import MermaidDiagram from '@/components/MermaidDiagram';
import MathBlock from '@/components/MathBlock';
import { mermaidDiagrams, mathFormulas } from '@/data/content';

const ExponenterSection = () => {
  return (
    <>
      {/* Introduction */}
      <ContentSection id="intro" variant="exponential">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 glow-text-gold">
            Exponential Thinking in AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
            From Exponometers to Molecule‑Field Diagrams and Social Encoding
          </p>
        </motion.div>
      </ContentSection>

      <ContentSection id="why-exponentiation" variant="exponential">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 text-primary">
            Why Exponentiation Matters in AI Cognition
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p className="text-xl font-medium">
              <strong className="text-primary">Exponentiation is more than a mathematical operation.</strong>
            </p>
            <p>
              In AI research, it becomes a metaphor for acceleration, compounding structure, 
              and the way small inputs can cascade into large‑scale behaviors. When we explore 
              exponentiation as a conceptual tool, we begin to see how AI systems might internally 
              represent growth, pressure, attention, and even social dynamics.
            </p>
          </div>

          <MathBlock 
            latex={mathFormulas.exponentialGrowth}
            label="Exponential Growth Function"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <motion.div 
              className="card-exponential"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-exponential mb-2">Measurement</h4>
              <p className="text-sm text-muted-foreground">
                Practical tools for detecting exponential behavior in computational processes
              </p>
            </motion.div>
            <motion.div 
              className="card-molecule"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-molecule mb-2">Visualization</h4>
              <p className="text-sm text-muted-foreground">
                Conceptual diagramming for discrete "molecules" and continuous "fields"
              </p>
            </motion.div>
            <motion.div 
              className="card-field"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-field mb-2">Encoding</h4>
              <p className="text-sm text-muted-foreground">
                Speculative models for sociocognitive representation
              </p>
            </motion.div>
          </div>
        </div>
      </ContentSection>

      <ContentSection id="exponometer-tool" variant="exponential">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            <span className="text-exponential">1.</span> Exponential Intuition Tools
          </h2>
          <p className="text-sm font-mono text-muted-foreground mb-8">
            <a 
              href="https://github.com/tambetvali/LaegnaAIBasics/tree/main/LabDepth.ai/Exponometer.py"
              className="hover:text-primary transition-colors underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Exponometer Tool in LabDepths →
            </a>
          </p>

          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>
              The <em className="text-primary">Exponometer</em> project introduces a conceptual instrument 
              for detecting and interpreting exponential patterns inside computational or cognitive processes.
            </p>
          </div>

          <MermaidDiagram 
            chart={mermaidDiagrams.exponentialFlow}
            title="Exponential Detection Flow"
            variant="exponential"
          />
        </div>
      </ContentSection>

      <ContentSection id="sensing-acceleration">
        <div className="max-w-4xl">
          <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
            Sensing Acceleration
          </h3>
          
          <div className="space-y-6 text-lg">
            <p>
              This tool explores how an AI might <strong className="text-primary">"feel" exponential change</strong>. 
              Instead of treating exponentiation as a cold mathematical fact, the Exponometer frames it 
              as a sensitivity mechanism.
            </p>
            <p className="text-muted-foreground">
              It imagines that an AI could monitor how small variations in input lead to disproportionate 
              changes in internal state—much like a musician sensing when a melody is about to crescendo.
            </p>
          </div>

          <MathBlock 
            latex={mathFormulas.accelerationProjection}
            label="Acceleration with Octave Projection"
          />
        </div>
      </ContentSection>

      <ContentSection id="applications">
        <div className="max-w-4xl">
          <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
            Applications of Exponential Awareness
          </h3>
          
          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-exponential text-2xl">•</span>
              <span><strong>Detecting runaway processes</strong> before they spiral out of control</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-molecule text-2xl">•</span>
              <span><strong>Understanding compounding effects</strong> in reasoning chains</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-field text-2xl">•</span>
              <span><strong>Modeling attention</strong> as it intensifies or dissipates</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl">•</span>
              <span><strong>Recognizing transitions</strong> from linear to nonlinear behavior</span>
            </li>
          </ul>

          <div className="mt-8 p-6 rounded-xl bg-card/50 border border-border">
            <p className="text-muted-foreground italic">
              Even without code, the concept stands as a philosophical question: what does it mean 
              for an AI to perceive exponentiality as a qualitative experience rather than a numeric calculation?
            </p>
          </div>
        </div>
      </ContentSection>
    </>
  );
};

export default ExponenterSection;

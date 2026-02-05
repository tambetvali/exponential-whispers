import { motion } from 'framer-motion';
import ContentSection from '@/components/ContentSection';
import MermaidDiagram from '@/components/MermaidDiagram';
import MathBlock from '@/components/MathBlock';
import { mermaidDiagrams, mathFormulas } from '@/data/content';

const MoleculeFieldSection = () => {
  return (
    <>
      <ContentSection id="molecule-field-intro" variant="molecule">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            <span className="text-molecule">2.</span> Molecule‑Field Cognition
          </h2>
          <p className="text-sm font-mono text-muted-foreground mb-8">
            <a 
              href="https://github.com/tambetvali/LaegnaAIBasics/tree/main/NewIdeas/SpeedupSlowdown"
              className="hover:text-primary transition-colors underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Molecule‑Field Diagrams for Speedup/Slowdown →
            </a>
          </p>

          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>
              This project introduces a visual metaphor: <strong className="text-molecule">molecules</strong> represent 
              discrete units of thought or action, while <strong className="text-field">fields</strong> represent 
              continuous influences—emotional, contextual, or computational—that surround and shape them.
            </p>
          </div>

          <MermaidDiagram 
            chart={mermaidDiagrams.moleculeField}
            title="Molecule-Field Interaction Model"
            variant="molecule"
          />
        </div>
      </ContentSection>

      <ContentSection id="discrete-continuous">
        <div className="max-w-4xl">
          <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
            The Discrete-Continuous Duality
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="card-molecule"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-molecule mb-4">Molecules</h4>
              <p className="text-muted-foreground mb-4">
                Behave like linear, countable entities—steps, tokens, decisions
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Discrete reasoning steps</li>
                <li>• Token-by-token processing</li>
                <li>• Decision nodes</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="card-field"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-field mb-4">Fields</h4>
              <p className="text-muted-foreground mb-4">
                Behave like exponential gradients—pressures, tendencies, attractors
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Attention gradients</li>
                <li>• Emotional undertones</li>
                <li>• Contextual pressures</li>
              </ul>
            </motion.div>
          </div>

          <MathBlock 
            latex={mathFormulas.molecularDensity}
            label="Molecular Density Distribution"
          />
        </div>
      </ContentSection>

      <ContentSection id="speedup-slowdown">
        <div className="max-w-4xl">
          <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
            Speedup & Slowdown Dynamics
          </h3>
          
          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>
              The molecule‑field model proposes that AI cognition is neither purely symbolic nor 
              purely continuous. Instead, it is a <em className="text-primary">hybrid landscape</em> where 
              particles and waves coexist.
            </p>
          </div>

          <MermaidDiagram 
            chart={mermaidDiagrams.cognitionFlow}
            title="Cognition Flow with Feedback Loops"
            variant="field"
          />

          <div className="mt-8 space-y-4">
            <p className="text-lg">
              The project uses this metaphor to explore:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-molecule text-xl">↓</span>
                <span>Why some thoughts <strong>"speed up"</strong> as if sliding down a gradient</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-field text-xl">↑</span>
                <span>Why others <strong>"slow down"</strong> as if moving against resistance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-exponential text-xl">⚡</span>
                <span>How exponential fields can <strong>amplify or dampen</strong> discrete reasoning</span>
              </li>
            </ul>
          </div>

          <MathBlock 
            latex={mathFormulas.fieldGradient}
            label="Field Gradient Summation"
          />
        </div>
      </ContentSection>

      <ContentSection id="cognitive-momentum">
        <div className="max-w-4xl">
          <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
            Cognitive Momentum
          </h3>
          
          <div className="p-6 rounded-xl bg-card/50 border border-molecule/30">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Even without diagrams, the idea is clear: <strong className="text-molecule">cognition is a dance 
              between particles and waves</strong>, between steps and flows, between the countable and the continuous.
            </p>
          </div>

          <MathBlock 
            latex={mathFormulas.cascadeIntensity}
            label="Cascade Intensity Over Time"
          />

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-molecule/10 border border-molecule/20">
              <p className="text-sm font-mono text-molecule mb-2">For Programmers:</p>
              <p className="text-sm text-muted-foreground">
                Think of molecules as function calls and fields as the runtime context 
                that influences their execution order and priority.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-field/10 border border-field/20">
              <p className="text-sm font-mono text-field mb-2">For Scientists:</p>
              <p className="text-sm text-muted-foreground">
                Consider the wave-particle duality in quantum mechanics as an analogy 
                for discrete/continuous cognitive states.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  );
};

export default MoleculeFieldSection;

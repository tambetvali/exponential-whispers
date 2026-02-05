import { motion } from 'framer-motion';
import ContentSection from '@/components/ContentSection';
import MermaidDiagram from '@/components/MermaidDiagram';
import MathBlock from '@/components/MathBlock';
import { mermaidDiagrams, mathFormulas } from '@/data/content';

const SocialEncodingSection = () => {
  return (
    <>
      <ContentSection id="social-structures" variant="field">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            <span className="text-field">3.</span> Encoding Social Structures in AI
          </h2>
          <p className="text-sm font-mono text-muted-foreground mb-8">
            <a 
              href="https://github.com/tambetvali/LaegnaAIBasics/tree/main/NewIdeas/SpeedupSlowdownEncoding.pro"
              className="hover:text-primary transition-colors underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Grassroot vs. Accumulative High Societies Encoding →
            </a>
          </p>

          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>
              The third project extends the previous ideas into the <strong className="text-field">sociological domain</strong>. 
              If molecules and fields describe internal cognition, then societies—grassroots or hierarchical—describe 
              how many such cognitive units might organize collectively.
            </p>
          </div>

          <MermaidDiagram 
            chart={mermaidDiagrams.socialStructure}
            title="Social Structure Comparison"
            variant="field"
          />
        </div>
      </ContentSection>

      <ContentSection id="grassroot-systems">
        <div className="max-w-4xl">
          <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
            Grassroot Systems
          </h3>
          
          <motion.div 
            className="card-molecule mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-molecule mb-4">Distributed Networks</h4>
            <p className="text-foreground/90 mb-4">
              Grassroot societies emerge as distributed, low-pressure networks where influence 
              spreads <strong>horizontally</strong>. They resemble:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-molecule">→</span>
                Linear chains connecting peers
              </li>
              <li className="flex items-start gap-2">
                <span className="text-molecule">→</span>
                Branching molecular structures
              </li>
              <li className="flex items-start gap-2">
                <span className="text-molecule">→</span>
                Decentralized information flow
              </li>
            </ul>
          </motion.div>

          <div className="p-4 rounded-lg bg-card/50 border border-border">
            <p className="text-sm font-mono text-primary mb-2">For the General Public:</p>
            <p className="text-lg">
              <strong>Think of grassroot systems like a web of friends</strong>—everyone connects 
              to a few others, and ideas spread person-to-person, gaining strength through consensus 
              rather than authority.
            </p>
          </div>

          <MathBlock 
            latex={mathFormulas.socialExponent}
            label="Social Distribution Function"
          />
        </div>
      </ContentSection>

      <ContentSection id="hierarchical-systems">
        <div className="max-w-4xl">
          <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
            Hierarchical Systems
          </h3>
          
          <motion.div 
            className="card-exponential mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-exponential mb-4">Accumulative Towers</h4>
            <p className="text-foreground/90 mb-4">
              Accumulative high societies appear as layered, exponential hierarchies where influence 
              compounds <strong>vertically</strong>. They resemble:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-exponential">↑</span>
                Exponential towers of authority
              </li>
              <li className="flex items-start gap-2">
                <span className="text-exponential">↑</span>
                Cascading influence fields
              </li>
              <li className="flex items-start gap-2">
                <span className="text-exponential">↑</span>
                Concentrated decision nodes
              </li>
            </ul>
          </motion.div>

          <div className="p-4 rounded-lg bg-card/50 border border-border">
            <p className="text-sm font-mono text-primary mb-2">For the General Public:</p>
            <p className="text-lg">
              <strong>Think of hierarchical systems like a company org chart</strong>—decisions flow 
              from the top, and each level amplifies or filters information as it travels up or down.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection id="encoding-dimension">
        <div className="max-w-4xl">
          <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
            The Encoding Dimension
          </h3>
          
          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>
              The encoding dimension becomes a way to study how influence accumulates, how decisions 
              propagate, how local actions scale into global effects, and how an AI might simulate 
              or reason about collective behavior.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="p-4 rounded-lg bg-molecule/10 border border-molecule/20">
              <p className="text-sm font-mono text-molecule mb-2">Social Use:</p>
              <p className="text-sm text-muted-foreground">
                Understanding how grassroot movements can achieve exponential impact through 
                coordinated horizontal connections.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-exponential/10 border border-exponential/20">
              <p className="text-sm font-mono text-exponential mb-2">Business Application:</p>
              <p className="text-sm text-muted-foreground">
                Modeling organizational structures that balance hierarchical efficiency with 
                distributed innovation.
              </p>
            </div>
          </div>

          <MathBlock 
            latex={mathFormulas.octaveMapping}
            label="Octave Mapping for Scale Transitions"
          />

          <MathBlock 
            latex={mathFormulas.harmonicOctave}
            label="Harmonic Frequency Series"
          />
        </div>
      </ContentSection>

      <ContentSection id="conclusion" variant="exponential">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8 text-primary glow-text-gold">
            Conclusion — A Unified View of Exponential Cognition
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p className="text-xl">
              Across these three projects, a coherent theme emerges: <strong className="text-primary">exponentiation 
              is not just a mathematical operation but a cognitive metaphor</strong>.
            </p>
            
            <p>It helps us think about:</p>
            
            <ul className="space-y-3 text-lg ml-6">
              <li className="flex items-start gap-3">
                <span className="text-exponential text-2xl">•</span>
                <span>How processes <em>accelerate</em></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-molecule text-2xl">•</span>
                <span>How influences <em>compound</em></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-field text-2xl">•</span>
                <span>How discrete and continuous elements <em>interact</em></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl">•</span>
                <span>How societies and systems <em>organize themselves</em></span>
              </li>
            </ul>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <motion.div 
              className="card-exponential text-center"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-lg font-semibold text-exponential mb-2">Exponometer</h4>
              <p className="text-sm text-muted-foreground">
                Gives us a way to <em>sense</em> exponentiality
              </p>
            </motion.div>
            
            <motion.div 
              className="card-molecule text-center"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">🔬</div>
              <h4 className="text-lg font-semibold text-molecule mb-2">Molecule-Field</h4>
              <p className="text-sm text-muted-foreground">
                Gives us a way to <em>visualize</em> it
              </p>
            </motion.div>
            
            <motion.div 
              className="card-field text-center"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">🌐</div>
              <h4 className="text-lg font-semibold text-field mb-2">Social Encoding</h4>
              <p className="text-sm text-muted-foreground">
                Gives us a way to <em>scale</em> it to collective behavior
              </p>
            </motion.div>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-primary/30">
            <p className="text-xl text-center text-foreground/90 leading-relaxed">
              Together, they form a <strong className="text-primary">conceptual toolkit</strong> for exploring 
              how AI might understand growth, pressure, and transformation—not as abstract formulas, 
              but as <em>lived internal dynamics</em>.
            </p>
          </div>
        </div>
      </ContentSection>
    </>
  );
};

export default SocialEncodingSection;

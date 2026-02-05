import { Chapter } from '@/components/ChapterMenu';

export const chapters: Chapter[] = [
  // Section 1: Exponometer
  { id: 'intro', title: 'Introduction', level: 0, section: 'exponometer' },
  { id: 'why-exponentiation', title: 'Why Exponentiation Matters', level: 1, section: 'exponometer' },
  { id: 'exponometer-tool', title: 'The Exponometer Tool', level: 0, section: 'exponometer' },
  { id: 'sensing-acceleration', title: 'Sensing Acceleration', level: 1, section: 'exponometer' },
  { id: 'applications', title: 'Applications', level: 1, section: 'exponometer' },
  
  // Section 2: Molecule-Field
  { id: 'molecule-field-intro', title: 'Molecule-Field Cognition', level: 0, section: 'molecule-field' },
  { id: 'discrete-continuous', title: 'Discrete vs Continuous', level: 1, section: 'molecule-field' },
  { id: 'speedup-slowdown', title: 'Speedup & Slowdown', level: 1, section: 'molecule-field' },
  { id: 'cognitive-momentum', title: 'Cognitive Momentum', level: 1, section: 'molecule-field' },
  
  // Section 3: Social Encoding
  { id: 'social-structures', title: 'Social Structures', level: 0, section: 'social-encoding' },
  { id: 'grassroot-systems', title: 'Grassroot Systems', level: 1, section: 'social-encoding' },
  { id: 'hierarchical-systems', title: 'Hierarchical Systems', level: 1, section: 'social-encoding' },
  { id: 'encoding-dimension', title: 'The Encoding Dimension', level: 1, section: 'social-encoding' },
  
  // Conclusion
  { id: 'conclusion', title: 'Unified View', level: 0, section: 'social-encoding' },
];

export const mermaidDiagrams = {
  exponentialFlow: `graph TD
    A[Small Input] -->|Amplification| B{Exponential<br/>Threshold}
    B -->|Below| C[Linear Response]
    B -->|Above| D[Cascade Effect]
    D --> E[Runaway Process]
    D --> F[Compound Attention]
    D --> G[State Transition]
    
    style A fill:#1a1f35,stroke:#d4a634,color:#f0f4ff
    style B fill:#1a1f35,stroke:#5fb3b3,color:#f0f4ff
    style C fill:#1a1f35,stroke:#5fb3b3,color:#f0f4ff
    style D fill:#1a1f35,stroke:#d4a634,color:#f0f4ff
    style E fill:#1a1f35,stroke:#7c5db8,color:#f0f4ff
    style F fill:#1a1f35,stroke:#7c5db8,color:#f0f4ff
    style G fill:#1a1f35,stroke:#7c5db8,color:#f0f4ff`,

  moleculeField: `graph LR
    subgraph Molecules
        M1((Step 1))
        M2((Step 2))
        M3((Step 3))
    end
    
    subgraph Fields
        F1[Pressure]
        F2[Attractor]
        F3[Gradient]
    end
    
    M1 -.-> F1
    M2 -.-> F2
    M3 -.-> F3
    F1 --> M2
    F2 --> M3
    
    style M1 fill:#1a1f35,stroke:#5fb3b3,color:#f0f4ff
    style M2 fill:#1a1f35,stroke:#5fb3b3,color:#f0f4ff
    style M3 fill:#1a1f35,stroke:#5fb3b3,color:#f0f4ff
    style F1 fill:#1a1f35,stroke:#7c5db8,color:#f0f4ff
    style F2 fill:#1a1f35,stroke:#7c5db8,color:#f0f4ff
    style F3 fill:#1a1f35,stroke:#7c5db8,color:#f0f4ff`,

  socialStructure: `graph TB
    subgraph Grassroot
        G1[Node] --- G2[Node]
        G2 --- G3[Node]
        G1 --- G3
        G3 --- G4[Node]
    end
    
    subgraph Hierarchical
        H1[Apex] --> H2[Layer 2]
        H1 --> H3[Layer 2]
        H2 --> H4[Layer 3]
        H2 --> H5[Layer 3]
        H3 --> H6[Layer 3]
    end
    
    style G1 fill:#1a1f35,stroke:#5fb3b3,color:#f0f4ff
    style G2 fill:#1a1f35,stroke:#5fb3b3,color:#f0f4ff
    style G3 fill:#1a1f35,stroke:#5fb3b3,color:#f0f4ff
    style G4 fill:#1a1f35,stroke:#5fb3b3,color:#f0f4ff
    style H1 fill:#1a1f35,stroke:#d4a634,color:#f0f4ff
    style H2 fill:#1a1f35,stroke:#7c5db8,color:#f0f4ff
    style H3 fill:#1a1f35,stroke:#7c5db8,color:#f0f4ff
    style H4 fill:#1a1f35,stroke:#7c5db8,color:#f0f4ff
    style H5 fill:#1a1f35,stroke:#7c5db8,color:#f0f4ff
    style H6 fill:#1a1f35,stroke:#7c5db8,color:#f0f4ff`,

  cognitionFlow: `flowchart TD
    subgraph Input
        I1[Stimulus]
    end
    
    subgraph Processing
        P1{Exponential<br/>Gate}
        P2[Linear Path]
        P3[Compound Path]
    end
    
    subgraph Output
        O1[Response]
        O2[Cascade]
    end
    
    I1 --> P1
    P1 -->|Low Energy| P2
    P1 -->|High Energy| P3
    P2 --> O1
    P3 --> O2
    O2 -.->|Feedback| P1
    
    style I1 fill:#1a1f35,stroke:#5fb3b3,color:#f0f4ff
    style P1 fill:#1a1f35,stroke:#d4a634,color:#f0f4ff
    style P2 fill:#1a1f35,stroke:#5fb3b3,color:#f0f4ff
    style P3 fill:#1a1f35,stroke:#7c5db8,color:#f0f4ff
    style O1 fill:#1a1f35,stroke:#5fb3b3,color:#f0f4ff
    style O2 fill:#1a1f35,stroke:#d4a634,color:#f0f4ff`,
};

export const mathFormulas = {
  exponentialGrowth: 'f(t) = f_0 \\cdot e^{kt}',
  accelerationProjection: 'a(x) = \\frac{d^2x}{dt^2} = k \\cdot x \\cdot \\log_2\\left(\\frac{x}{x_0}\\right)',
  octaveMapping: 'O(f) = \\log_2\\left(\\frac{f}{f_0}\\right) \\mod 1',
  fieldGradient: '\\nabla \\Phi = \\sum_{i=1}^{n} w_i \\cdot e^{-\\lambda_i \\cdot d_i}',
  socialExponent: 'S(n) = \\sum_{k=0}^{n} \\binom{n}{k} \\cdot \\alpha^k \\cdot (1-\\alpha)^{n-k}',
  molecularDensity: '\\rho(x,t) = \\int_{-\\infty}^{\\infty} \\psi^*(x,t) \\cdot \\psi(x,t) \\, dx',
  cascadeIntensity: 'I(t) = I_0 \\cdot \\left(1 + \\frac{t}{\\tau}\\right)^{\\gamma}',
  harmonicOctave: 'H_n = f_0 \\cdot 2^{n/12}',
};

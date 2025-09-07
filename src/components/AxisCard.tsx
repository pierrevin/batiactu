import React, { useEffect, useRef, useState } from 'react';
import { DivideIcon as LucideIcon, Target, TrendingUp } from 'lucide-react';

interface AxisCardProps {
  id: string;
  title: string;
  subtitle?: string;
  concept: string;
  examples: string[];
  applications: string[];
  practices: string[];
  vNarrative?: {
    principe: string;
    avantage: string;
    exemple: string;
  };
  faisabilite: string;
  paywall: string;
  icon: LucideIcon;
  index: number;
}

export const AxisCard: React.FC<AxisCardProps> = ({ 
  id, 
  title,
  subtitle,
  concept, 
  examples, 
  applications, 
  practices, 
  vNarrative,
  faisabilite, 
  paywall, 
  icon: Icon, 
  index 
}) => {
  const [activeVisual, setActiveVisual] = useState<string>('overview');
  const [hasSeenExamples, setHasSeenExamples] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const conceptRef = useRef<HTMLDivElement>(null);
  const examplesRef = useRef<HTMLDivElement>(null);
  const practicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === conceptRef.current) {
              setActiveVisual('concept');
            } else if (entry.target === examplesRef.current) {
              setActiveVisual('overview');
              setHasSeenExamples(true);
            } else if (entry.target === practicesRef.current) {
              setActiveVisual('applications');
            }
          }
        });
      },
      { threshold: 0.6, rootMargin: '-10% 0px -30% 0px' }
    );

    [conceptRef, examplesRef, practicesRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const getFaisabiliteLevel = (level: string) => {
    if (level.includes('Très Élevée')) return { level: 'very-high', width: '90%' };
    if (level.includes('Élevée')) return { level: 'high', width: '75%' };
    if (level.includes('Moyenne')) return { level: 'medium', width: '50%' };
    if (level.includes('Faible')) return { level: 'low', width: '25%' };
    return { level: 'very-low', width: '10%' };
  };

  const getPaywallLevel = (level: string) => {
    if (level.includes('Très Élevé')) return { level: 'very-high', width: '90%' };
    if (level.includes('Élevé')) return { level: 'high', width: '75%' };
    if (level.includes('Moyen')) return { level: 'medium', width: '50%' };
    if (level.includes('Faible')) return { level: 'low', width: '25%' };
    return { level: 'very-low', width: '10%' };
  };

  return (
    <section id={id} ref={sectionRef} className="axis-section">
      <div className="container">
        <div className="two-column-layout">
          
          {/* === COLONNE NARRATIVE (GAUCHE) === */}
          <div className="narrative-column">
            
            {/* 1. HEADER DE SECTION */}
            <div className="section-header">
              <div className="axis-number">
                {index + 1}
              </div>
              <div>
                <div className="text-sm font-bold text-yellow-600 uppercase tracking-wider mb-3">
                  Format Éditorial #{index + 1}
                </div>
                <h2 className="axis-title">
                  {title}
                </h2>
                {subtitle && (
                  <p className="axis-subtitle">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>

            {/* 2. BLOC CONCEPT */}
            <div ref={conceptRef} className="concept-section">
              <div className="concept-badge">CONCEPT</div>
              <h3 className="concept-title">Le Concept</h3>
              <p className="concept-text">
                {concept}
              </p>
            </div>

            {/* 3. BLOC EXEMPLES */}
            <div ref={examplesRef} className="examples-section">
              <h3 className="examples-title">
                Références Médias
              </h3>
              <div className="space-y-4">
                {examples.slice(0, 3).map((example, i) => {
                  const [source, ...descParts] = example.split(' : ');
                  const description = descParts.join(' : ');
                  return (
                    <div key={i} className="example-card">
                      <div className="example-source">{source}</div>
                      <div className="example-description">{description}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3.5. BLOC NARRATION EN V - Entre exemples et bonnes pratiques */}
            {vNarrative && (
              <div className="v-narrative-section">
                <h3 className="v-narrative-title">
                  Focus : La Narration en V
                </h3>
                
                <div className="v-narrative-content">
                  <div className="v-narrative-item">
                    <div className="v-narrative-label">Principe</div>
                    <p className="v-narrative-text">{vNarrative.principe}</p>
                  </div>
                  
                  <div className="v-narrative-item">
                    <div className="v-narrative-label">Avantage</div>
                    <p className="v-narrative-text">{vNarrative.avantage}</p>
                  </div>
                  
                  <div className="v-narrative-item highlight-full">
                    <div className="v-narrative-label">Exemple</div>
                    <p className="v-narrative-text">{vNarrative.exemple}</p>
                  </div>
                </div>
              </div>
            )}
            {vNarrative && (
              <div className="v-narrative-section">
                <h3 className="v-narrative-title">
                  Focus : La Narration en V
                </h3>
                
                <div className="v-narrative-content">
                  <div className="v-narrative-item">
                    <div className="v-narrative-label">Principe</div>
                    <p className="v-narrative-text">{vNarrative.principe}</p>
                  </div>
                  
                  <div className="v-narrative-item">
                    <div className="v-narrative-label">Avantage</div>
                    <p className="v-narrative-text">{vNarrative.avantage}</p>
                  </div>
                  
                  <div className="v-narrative-item highlight-full">
                    <div className="v-narrative-label">Exemple</div>
                    <p className="v-narrative-text">{vNarrative.exemple}</p>
                  </div>
                </div>
              </div>
            )}

            {/* 4. BLOC PRATIQUES */}
            {practices.length > 0 && (
              <div ref={practicesRef} className="practices-section">
                <h3 className="practices-title">
                  Bonnes Pratiques
                </h3>
                <div className="space-y-3">
                  {practices.slice(0, 5).map((practice, i) => (
                    <div key={i} className="practice-item">
                      <div className="practice-icon">✓</div>
                      <div className="practice-text">{practice}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>


          {/* === COLONNE BATIACTU (DROITE) === */}
          <div className="visual-column">
            
            {/* RIEN AU DÉBUT - Laisse le concept s'expliquer */}
            <div className={`
              visual-element ${activeVisual === 'concept' ? 'active' : ''}
            `}>
              <div className="concept-placeholder">
                <div className="placeholder-icon">
                  <Icon className="w-12 h-12 text-gray-300" />
                </div>
                <p className="placeholder-text">
                  Découvrez d'abord le concept...
                </p>
              </div>
            </div>

            {/* ENCADRÉ BATIACTU - Apparaît après les exemples */}
            <div className={`
              visual-element batiactu-card ${hasSeenExamples ? 'active' : ''}
            `}>
              
              {/* Header avec badge */}
              <div className="batiactu-header">
                <div className="batiactu-icon">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="batiactu-badge">
                  BATIACTU
                </div>
              </div>
              
              {/* Titre */}
              <h4 className="batiactu-title">
                Applicable ?
              </h4>
              
              {/* Barres de progression */}
              <div className="progress-bars">
                <div className="progress-item">
                  <div className="progress-header">
                    <span className="progress-label">Faisabilité</span>
                    <span className="progress-value">{faisabilite}</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className={`progress-fill ${getFaisabiliteLevel(faisabilite).level}`}
                      style={{ width: getFaisabiliteLevel(faisabilite).width }}
                    />
                  </div>
                </div>
                
                <div className="progress-item">
                  <div className="progress-header">
                    <span className="progress-label">Impact Paywall</span>
                    <span className="progress-value">{paywall}</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className={`progress-fill ${getPaywallLevel(paywall).level}`}
                      style={{ width: getPaywallLevel(paywall).width }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* APPLICATIONS CONCRÈTES - IMPACT BUSINESS */}
            <div className={`
              visual-element applications-card ${activeVisual === 'applications' ? 'active' : ''}
            `}>
              
              <div className="applications-header">
                <div className="applications-icon">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="applications-title">Cas d'usages possibles</h4>
                  <p className="applications-subtitle">Applications concrètes</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {applications.slice(0, 3).map((app, i) => {
                  const [title, description] = app.split(' : ');
                  return (
                    <div key={i} className="application-item">
                      <h5 className="application-title">{title}</h5>
                      <p className="application-description">{description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
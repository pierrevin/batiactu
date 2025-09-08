import React, { useEffect, useRef, useState } from 'react';
import { DivideIcon as LucideIcon, Target, TrendingUp, BarChart3, MousePointer } from 'lucide-react';

interface Example {
  title: string;
  description: string;
  url: string;
}

interface AxisCardProps {
  id: string;
  title: string;
  subtitle?: string;
  concept: string;
  examples: Example[];
  applications: string[];
  practices: string[];
  rightColumn?: {
    vNarrative?: {
      title: string;
      principe: string;
      avantage: string;
      exemple: string;
    };
    scrollytelling?: {
      title: string;
      principe: string;
      avantage: string;
      exemple: string;
    };
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
  rightColumn,
  faisabilite, 
  paywall, 
  icon: Icon, 
  index 
}) => {
  const [activeVisual, setActiveVisual] = useState<string>('overview');
  const [hasSeenExamples, setHasSeenExamples] = useState(false);
  const [hasSeenPractices, setHasSeenPractices] = useState(false);
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
              setHasSeenPractices(true);
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
    if (level === 'Élevé') return { level: 'faisabilite-high', width: '80%' };
    if (level === 'Moyen' || level === 'Moyenne') return { level: 'faisabilite-medium', width: '50%' };
    if (level === 'Faible') return { level: 'faisabilite-low', width: '20%' };
    return { level: 'faisabilite-medium', width: '50%' };
  };

  const getPaywallLevel = (level: string) => {
    if (level === 'Élevé') return { level: 'paywall-high', width: '80%' };
    if (level === 'Moyen' || level === 'Moyenne') return { level: 'paywall-medium', width: '50%' };
    if (level === 'Faible') return { level: 'paywall-low', width: '20%' };
    return { level: 'paywall-medium', width: '50%' };
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
                <h3 className="concept-title">Concept</h3>
              <p className="concept-text">
                {concept}
              </p>
            </div>

            {/* 3. BLOC EXEMPLES AVEC FOCUS TECHNIQUES */}
            <div ref={examplesRef} className="examples-section">
              <h3 className="examples-title">
                Dans les médias
              </h3>
              <div className="space-y-6">
                {examples.map((example, i) => (
                  <div key={i} className="example-with-focus">
                    {/* Exemple */}
                    <a 
                      href={example.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="example-card example-card-link"
                    >
                      <div className="example-source">
                        {example.title}
                      </div>
                      <div className="example-description">{example.description}</div>
                    </a>
                    
                    {/* Focus technique correspondant */}
                    {i === 0 && rightColumn?.scrollytelling && (
                      <div className="focus-technique">
                        <div className="focus-header">
                          <div className="focus-icon">
                            <MousePointer className="w-5 h-5" />
                          </div>
                          <h4 className="focus-title">
                            {rightColumn.scrollytelling.title}
                          </h4>
                        </div>
                        <div className="focus-content">
                          <div className="focus-item">
                            <div className="focus-label">Principe</div>
                            <p className="focus-text">{rightColumn.scrollytelling.principe}</p>
                          </div>
                          <div className="focus-item">
                            <div className="focus-label">Avantage</div>
                            <p className="focus-text">{rightColumn.scrollytelling.avantage}</p>
                          </div>
                          <div className="focus-item highlight-full">
                            <div className="focus-label">Exemple</div>
                            <p className="focus-text">
                              NYT Snow Fall : Le texte apparaît progressivement pendant que les images et animations se déclenchent au scroll, créant une expérience cinématographique.{' '}
                              <a 
                                href="https://www.nytimes.com/projects/2012/snow-fall/index.html#/?part=tunnel-creek"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="focus-link"
                              >
                                Voir l'exemple →
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {i === 1 && rightColumn?.vNarrative && (
                      <div className="focus-technique">
                        <div className="focus-header">
                          <div className="focus-icon">
                            <BarChart3 className="w-5 h-5" />
                          </div>
                          <h4 className="focus-title">
                            {rightColumn.vNarrative.title}
                          </h4>
                        </div>
                        <div className="focus-content">
                          <div className="focus-item">
                            <div className="focus-label">Principe</div>
                            <p className="focus-text">{rightColumn.vNarrative.principe}</p>
                          </div>
                          <div className="focus-item">
                            <div className="focus-label">Avantage</div>
                            <p className="focus-text">{rightColumn.vNarrative.avantage}</p>
                          </div>
                          <div className="focus-item highlight-full">
                            <div className="focus-label">Exemple</div>
                            <p className="focus-text">{rightColumn.vNarrative.exemple}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>


            {/* 4. BLOC PRATIQUES */}
            {practices.length > 0 && (
              <div ref={practicesRef} className="practices-section">
                <h3 className="practices-title">
                  Bonnes pratiques
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

            {/* ENCADRÉ BATIACTU - Apparaît au niveau des bonnes pratiques */}
            <div className={`
              visual-element batiactu-card ${hasSeenPractices ? 'active' : ''}
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
                    <span className="progress-label">Valorisation paywall</span>
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
import React, { useEffect, useRef, useState } from 'react';
import { Target, Lightbulb, ArrowRight, Zap } from 'lucide-react';
import { siteConfig } from '../config/content';

export const Conclusion: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Section 1: Récapitulatif */}
      <section className="axis-section">
        <div className="container">
          <div className="two-column-layout">
            
            {/* Colonne narrative */}
            <div className="narrative-column">
              <div className="section-header">
                <div className="axis-number">1</div>
                <div>
                  <div className="text-sm font-bold text-yellow-600 uppercase tracking-wider mb-3">
                    Conclusion
                  </div>
                  <h2 className="axis-title">
                    {siteConfig.conclusion.cards[0].title}
                  </h2>
                </div>
              </div>

              <div className="concept-section">
                <div className="concept-badge">RÉCAPITULATIF</div>
                <h3 className="concept-title">Les 7 formats</h3>
                <ul className="styled-list">
                  {siteConfig.conclusion.cards[0].items.map((item, i) => (
                    <li key={i} className="text-body leading-relaxed font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Colonne visuelle */}
            <div className="visual-column">
              <div className="visual-element active">
                <div className="concept-placeholder">
                  <div className="placeholder-icon">
                    <Target className="w-12 h-12 text-gray-300" />
                  </div>
                  <p className="placeholder-text">
                    Transformer Batiactu avec 7 formats innovants
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Gestion Stratégique */}
      <section className="axis-section">
        <div className="container">
          <div className="two-column-layout">
            
            {/* Colonne narrative */}
            <div className="narrative-column">
              <div className="section-header">
                <div className="axis-number">2</div>
                <div>
                  <div className="text-sm font-bold text-yellow-600 uppercase tracking-wider mb-3">
                    Conclusion
                  </div>
                  <h2 className="axis-title">
                    {siteConfig.conclusion.cards[1].title}
                  </h2>
                </div>
              </div>

              <div className="concept-section">
                <div className="concept-badge">STRATÉGIE</div>
                <h3 className="concept-title">Approche moderne</h3>
                <ul className="styled-list">
                  {siteConfig.conclusion.cards[1].items.map((item, i) => (
                    <li key={i} className="text-body leading-relaxed font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Colonne visuelle */}
            <div className="visual-column">
              <div className="visual-element active">
                <div className="concept-placeholder">
                  <div className="placeholder-icon">
                    <Lightbulb className="w-12 h-12 text-gray-300" />
                  </div>
                  <p className="placeholder-text">
                    Adopter une stratégie éditoriale moderne
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Appel à l'Action */}
      <section className="axis-section">
        <div className="container">
          <div className="two-column-layout">
            
            {/* Colonne narrative */}
            <div className="narrative-column">
              <div className="section-header">
                <div className="axis-number">3</div>
                <div>
                  <div className="text-sm font-bold text-yellow-600 uppercase tracking-wider mb-3">
                    Conclusion
                  </div>
                  <h2 className="axis-title">
                    {siteConfig.conclusion.cards[2].title}
                  </h2>
                </div>
              </div>

              <div className="concept-section">
                <div className="concept-badge">ACTION</div>
                <h3 className="concept-title">Prochaine étape</h3>
                <p className="concept-text mb-6">
                  <span className="font-bold text-lg block mb-2">
                    "{siteConfig.conclusion.cards[2].question}"
                  </span>
                  <span>{siteConfig.conclusion.cards[2].subtitle}</span>
                </p>
                
                <button 
                  className="w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 border-4 border-black"
                  style={{
                    background: '#FFE666',
                    color: '#000000',
                    boxShadow: '4px 4px 0 #000000'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translate(-2px, -2px)';
                    e.currentTarget.style.boxShadow = '6px 6px 0 #000000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translate(0, 0)';
                    e.currentTarget.style.boxShadow = '4px 4px 0 #000000';
                  }}
                >
                  {siteConfig.conclusion.cards[2].buttonText}
                </button>
              </div>
            </div>

            {/* Colonne visuelle */}
            <div className="visual-column">
              <div className="visual-element active">
                <div className="concept-placeholder">
                  <div className="placeholder-icon">
                    <Zap className="w-12 h-12 text-gray-300" />
                  </div>
                  <p className="placeholder-text">
                    Quelle sera la première brique ?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citation Finale */}
      <section className="hero-section-block">
        <div className="hero-content">
          <h1 className="hero-title-large">
            <span className="hero-title-gradient">{siteConfig.conclusion.finalQuote.highlight}</span>
          </h1>
          
          <p className="hero-subtitle-large">
            {siteConfig.conclusion.finalQuote.continuation}
          </p>
          
          <cite className="text-black font-medium text-body-large opacity-80 mt-8 block">
            {siteConfig.conclusion.finalQuote.citation}
          </cite>
        </div>
      </section>
    </>
  );
};
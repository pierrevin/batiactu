import React, { useEffect, useRef, useState } from 'react';
import { Clock, Target, Lightbulb } from 'lucide-react';
import { siteConfig } from '../config/content';

export const SablierMethod: React.FC = () => {
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
      {/* Écran de séparation */}
      <section className="transition-section">
        <div className="transition-main-shape">
          <div className="transition-yellow-block"></div>
          <div className="transition-black-block"></div>
        </div>
        <div className="transition-content">
          <h2 className="transition-title">
            Mémo – La méthode du sablier
          </h2>
          <p className="transition-subtitle">
            Stratégie éditoriale pour articles premium
          </p>
        </div>
      </section>

      {/* Section 1: Définition */}
      <section className="axis-section" style={{ marginTop: '4rem' }}>
        <div className="container">
          <div className="single-column-layout">
            
            {/* Header centré */}
            <div className="section-header text-center">
              <div className="axis-number">1</div>
              <div>
                <div className="text-sm font-bold text-yellow-600 uppercase tracking-wider mb-3">
                  Mémo – La méthode du sablier appliquée aux articles premium
                </div>
                <h2 className="axis-title">
                  {siteConfig.sablierMethod.title}
                </h2>
              </div>
            </div>

            {/* Contenu centré */}
            <div className="concept-section text-center">
              <div className="concept-badge">DÉFINITION</div>
              <h3 className="concept-title">{siteConfig.sablierMethod.definition.title}</h3>
              <div 
                className="concept-text max-w-4xl mx-auto"
                dangerouslySetInnerHTML={{ __html: siteConfig.sablierMethod.definition.content }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Bonnes pratiques */}
      <section className="axis-section">
        <div className="container">
          <div className="single-column-layout">
            
            {/* Header centré */}
            <div className="section-header text-center">
              <div className="axis-number">2</div>
              <div>
                <div className="text-sm font-bold text-yellow-600 uppercase tracking-wider mb-3">
                  Méthode du Sablier
                </div>
                <h2 className="axis-title">
                  Bonnes pratiques
                </h2>
              </div>
            </div>

            {/* Contenu centré */}
            <div className="practices-section text-center">
              <h3 className="practices-title">
                Les 6 règles d'or
              </h3>
              <div className="space-y-6 max-w-5xl mx-auto">
                {siteConfig.sablierMethod.practices.map((practice, i) => (
                  <div key={i} className="practice-item">
                    <div className="practice-icon">{i + 1}</div>
                    <div className="practice-content">
                      <h4 className="practice-title">{practice.title}</h4>
                      <div 
                        className="practice-text"
                        dangerouslySetInnerHTML={{ __html: practice.content }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

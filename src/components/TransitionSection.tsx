import React, { useEffect, useRef, useState } from 'react';

interface TransitionSectionProps {
  number: number;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const TransitionSection: React.FC<TransitionSectionProps> = ({ 
  number, 
  title, 
  subtitle, 
  icon: Icon 
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="transition-section"
    >
      {/* GROS APPLAT JAUNE CENTRAL */}
      <div className="transition-main-shape">
        <div className="transition-yellow-block">
          <div className="transition-number-big">
            {number}
          </div>
        </div>
      </div>

      {/* FORMES GÉOMÉTRIQUES DÉCORATIVES */}
      <div className="transition-geometric-shapes">
        {/* Cercle jaune en haut à gauche */}
        <div className="transition-circle-1"></div>
        
        {/* Rectangle noir en bas à droite */}
        <div className="transition-rect-1"></div>
        
        {/* Petit cercle jaune en bas à gauche */}
        <div className="transition-circle-2"></div>
        
        {/* Triangle jaune en haut à droite */}
        <div className="transition-triangle"></div>
      </div>

      {/* ICÔNE CENTRALE */}
      <div className="transition-icon-container">
        <div className="transition-icon-bg">
          <Icon className="transition-icon-main" />
        </div>
      </div>

      {/* LIGNES DÉCORATIVES */}
      <div className="transition-lines">
        <div className="transition-line-1"></div>
        <div className="transition-line-2"></div>
        <div className="transition-line-3"></div>
      </div>
    </section>
  );
};
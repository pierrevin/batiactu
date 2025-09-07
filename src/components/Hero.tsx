import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    document.getElementById('axis-1')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-natural-scroll">
      
      {/* Background Pattern avec parallaxe */}
      <div className="hero-background" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className="hero-bg-circle-1"></div>
        <div className="hero-bg-circle-2"></div>
      </div>

      {/* SECTION 1 : TITRE + SOUS-TITRE */}
      <section className="hero-section-block">
        <div className="hero-content" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
          <h1 className="hero-title-large">
            <span className="hero-title-gradient">Innover</span>{' '}
            sans trahir{' '}
            <span className="hero-title-gradient">l'info</span>
          </h1>

          <p className="hero-subtitle-large">
            Comment transformer l'expérience éditoriale BTP avec{' '}
            <span className="hero-highlight">7 formats innovants</span>
          </p>
        </div>
      </section>

      {/* SECTION 2 : CE QUE VEULENT LES PROS */}
      <section className="hero-section-block">
        <div className="hero-fullscreen-card pros-card" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
          <div className="hero-card-icon success">✓</div>
          <h2 className="hero-card-title-large">
            Ce que veulent les pros BTP
          </h2>
          <p className="hero-card-text-large">
            Information <span className="hero-card-highlight">rigoureuse, fiable, actionnable</span>
          </p>
          <div className="hero-card-badge-large">
            Prêts à payer pour la qualité
          </div>
        </div>
      </section>

      {/* SECTION 3 : LEUR RÉALITÉ */}
      <section className="hero-section-block">
        <div className="hero-fullscreen-card reality-card" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
          <div className="hero-card-icon warning">!</div>
          <h2 className="hero-card-title-large">
            Leur réalité quotidienne
          </h2>
          <p className="hero-card-text-large">
            <span className="hero-card-highlight">70-400 notifications/jour</span>
          </p>
          <div className="hero-card-badge-large">
            30 secondes par article
          </div>
        </div>
      </section>

      {/* SECTION 4 : THÈSE + BOUTON SCROLL */}
      <section className="hero-section-block hero-thesis-section">
        <div className="hero-thesis" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
          <h2 className="hero-thesis-title">
            Notre Thèse Centrale
          </h2>
          <p className="hero-thesis-text">
            <span className="hero-thesis-highlight">Le format</span> est désormais{' '}
            <span className="hero-thesis-highlight">aussi stratégique</span> que le fond
          </p>
        </div>

        {/* Scroll Indicator */}
        <div onClick={scrollToContent} className="hero-scroll" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
          <div className="hero-scroll-indicator">
            <div className="hero-scroll-dot" />
          </div>
          <span className="hero-scroll-text">
            Découvrez les 7 formats
          </span>
        </div>
      </section>
    </div>
  );
};
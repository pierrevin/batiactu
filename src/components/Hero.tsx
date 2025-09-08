import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { siteConfig } from '../config/content';

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
            <span className="hero-title-gradient">{siteConfig.hero.mainTitle.part1}</span>{' '}
            {siteConfig.hero.mainTitle.part2}{' '}
            <span className="hero-title-gradient">{siteConfig.hero.mainTitle.part3}</span>
          </h1>

          <p className="hero-subtitle-large">
            {siteConfig.hero.subtitle}{' '}
            <span className="hero-highlight">{siteConfig.hero.highlight}</span>
          </p>
        </div>
      </section>

      {/* SECTION 2 : CE QUE VEULENT LES PROS */}
      <section className="hero-section-block">
        <div className="hero-fullscreen-card pros-card" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
          <div className="hero-card-icon success">{siteConfig.hero.prosSection.icon}</div>
          <h2 className="hero-card-title-large">
            {siteConfig.hero.prosSection.title}
          </h2>
          <p className="hero-card-text-large">
            {siteConfig.hero.prosSection.text} <span className="hero-card-highlight">{siteConfig.hero.prosSection.highlight}</span>
          </p>
          <div className="hero-card-badge-large">
            {siteConfig.hero.prosSection.badge}
          </div>
        </div>
      </section>

      {/* SECTION 3 : LEUR RÉALITÉ */}
      <section className="hero-section-block">
        <div className="hero-fullscreen-card reality-card" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
          <div className="hero-card-icon warning">{siteConfig.hero.realitySection.icon}</div>
          <h2 className="hero-card-title-large">
            {siteConfig.hero.realitySection.title}
          </h2>
          <p className="hero-card-text-large">
            <span className="hero-card-highlight">{siteConfig.hero.realitySection.text}</span>
          </p>
          <div className="hero-card-badge-large">
            {siteConfig.hero.realitySection.badge}
          </div>
        </div>
      </section>

      {/* SECTION 4 : THÈSE + BOUTON SCROLL */}
      <section className="hero-section-block hero-thesis-section">
        <div className="hero-thesis" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
          <h2 className="hero-thesis-title">
            {siteConfig.hero.thesis.title}
          </h2>
          <p className="hero-thesis-text">
            <span className="hero-thesis-highlight">{siteConfig.hero.thesis.highlight1}</span> est désormais{' '}
            <span className="hero-thesis-highlight">{siteConfig.hero.thesis.highlight2}</span> que le fond
          </p>
        </div>

        {/* Scroll Indicator */}
        <div onClick={scrollToContent} className="hero-scroll" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
          <div className="hero-scroll-indicator">
            <div className="hero-scroll-dot" />
          </div>
          <span className="hero-scroll-text">
            {siteConfig.hero.scrollText}
          </span>
        </div>
      </section>
    </div>
  );
};
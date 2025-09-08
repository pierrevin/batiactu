import React, { useEffect, useRef, useState } from 'react';
import { AlertTriangle, Scale, Users, Bot, MousePointer, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/content';

export const TensionsSection: React.FC = () => {
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

  // Mapping des icônes
  const iconMap = {
    Scale,
    Users,
    Bot,
    MousePointer
  };

  const tensions = siteConfig.tensions.items.map(tension => ({
    ...tension,
    icon: iconMap[tension.icon as keyof typeof iconMap]
  }));

  return (
    <div className="tensions-container">
      
      {/* Header Section */}
      <section className="hero-section-block tensions-header">
        <div className="hero-content">
          <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 border-4 border-black" style={{boxShadow: '6px 6px 0 #FFE666'}}>
            <AlertTriangle className="text-black" size={32} />
          </div>
          
          <h2 className="hero-title-large">
            <span className="hero-title-gradient">{siteConfig.tensions.header.title.split(' ')[0]}</span> & {siteConfig.tensions.header.title.split(' ')[2]}
          </h2>
          
          <p className="hero-subtitle-large">
            {siteConfig.tensions.header.subtitle} <span className="hero-highlight">{siteConfig.tensions.header.highlight}</span>.
          </p>
        </div>
      </section>

      {/* Tension Cards - Full Screen Each */}
      {tensions.map((tension, index) => (
        <section key={index} className="hero-section-block tension-card-section">
          <div className="hero-fullscreen-card tension-card">
            
            {/* Header avec icône */}
            <div className="hero-card-icon tension-icon">
              <tension.icon size={32} className="text-white" />
            </div>
            
            <h2 className="hero-card-title-large">
              {tension.title}
            </h2>
            
            <p className="hero-card-text-large">
              {tension.subtitle}
            </p>

            {/* Contenu structuré */}
            <div className="tension-content">
              
              {/* Contradiction */}
              <div className="tension-block">
                <h4 className="tension-block-title">Contradiction</h4>
                <p className="tension-block-text">{tension.contradiction}</p>
              </div>

              {/* Exemple */}
              <div className="tension-block tension-example">
                <h4 className="tension-block-title">Exemple</h4>
                <p className="tension-block-text italic">{tension.exemple}</p>
              </div>

              {/* Solution */}
              <div className="tension-block tension-solution">
                <h4 className="tension-block-title">
                  <ArrowRight className="w-4 h-4 inline mr-2" />
                  Solution
                </h4>
                <p className="tension-block-text font-bold">{tension.gestion}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};
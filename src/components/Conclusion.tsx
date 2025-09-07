import React, { useEffect, useRef, useState } from 'react';
import { Target, Lightbulb, ArrowRight, Zap } from 'lucide-react';

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
    <section 
      id="conclusion" 
      ref={sectionRef}
      className="section-padding conclusion-section"
    >
      <div className="container">
        
        {/* Header */}
        <div className={`
          text-center mb-20 transition-all duration-700
          ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
        `}>
          <h2 className="text-display font-black text-gray-900 mb-6">
            L'Heure de la Réinvention
          </h2>
        </div>

        {/* Grid Principal */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Récapitulatif */}
          <div className={`
            impact-card transition-all duration-700
            ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
          `} style={{ transitionDelay: '200ms' }}>
            
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 border-4 border-black" style={{boxShadow: '3px 3px 0 #FFE666'}}>
              <Target className="text-black" size={24} />
            </div>
            
            <h3 className="text-subtitle font-bold mb-6 text-black">Récapitulatif</h3>
            
            <ul className="styled-list">
              {[
                "7 formats = leviers puissants pour transformer Batiactu",
                "Créateur d'expériences à haute valeur ajoutée", 
                "Prioriser : ne pas tout faire, mais choisir les briques stratégiques"
              ].map((item, i) => (
                <li key={i} className="text-sm leading-relaxed font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Gestion Stratégique */}
          <div className={`
            impact-card transition-all duration-700
            ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
          `} style={{ transitionDelay: '400ms' }}>
            
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 border-4 border-black" style={{boxShadow: '3px 3px 0 #FFE666'}}>
              <Lightbulb className="text-black" size={24} />
            </div>
            
            <h3 className="text-subtitle font-bold mb-6 text-black">Gestion Stratégique</h3>
            
            <ul className="styled-list">
              {[
                "Adopter une stratégie éditoriale moderne",
                "Embrasser les tensions et contradictions",
                "Créer une offre diversifiée et cohérente"
              ].map((item, i) => (
                <li key={i} className="text-sm leading-relaxed font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Appel à l'Action */}
          <div className={`
            impact-card transition-all duration-700
            ${isVisible ? 'animate-scale-in' : 'opacity-0'}
          `} style={{ 
            transitionDelay: '600ms',
            background: '#FFFBEA'
          }}>
            
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 border-4 border-black" style={{boxShadow: '3px 3px 0 #FFE666'}}>
              <Zap className="text-black" size={24} />
            </div>
            
            <h3 className="text-subtitle font-bold mb-6 text-black">Appel à l'Action</h3>
            
            <p className="text-black leading-relaxed mb-6 opacity-90">
              <span className="font-bold text-black text-lg block mb-2">
                "Quelle sera la première brique que nous poserons ?"
              </span>
              <span className="text-sm">Série ? Data immersive ? Outils pratiques ?</span>
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
              Consulter la Matrice Stratégique
            </button>
          </div>
        </div>

        {/* Citation Finale */}
        <div className={`
          text-center rounded-3xl p-12 transition-all duration-700 border-4 border-black
          ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
        `} style={{ 
          transitionDelay: '800ms',
          background: '#F7F7F7',
          boxShadow: '8px 8px 0 #FFE666'
        }}>
          
          <blockquote className="text-title lg:text-display font-black leading-tight mb-8 text-black">
            <span className="highlight">
              "L'heure est à la réinvention."
            </span>
            <br />
            Batiactu.com doit être un créateur d'expériences indispensables.
          </blockquote>
          
          <cite className="text-black font-medium text-lg opacity-80">
            Innover dans l'Info BTP – Stratégies et Dilemmes des Nouveaux Formats Éditoriaux
          </cite>
        </div>
      </div>
    </section>
  );
};
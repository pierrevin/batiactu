import React, { useEffect, useRef, useState } from 'react';
import { AlertTriangle, Scale, Users, Bot, MousePointer, ArrowRight } from 'lucide-react';

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

  const tensions = [
    {
      icon: Scale,
      title: "Profondeur vs Concision",
      subtitle: "Le Dilemme du Temps",
      contradiction: "Les formats longs (séries, analyses Stratechry) visent la compréhension exhaustive. Les formats courts (Smart Brevity, TikTok) visent l'efficacité cognitive.",
      exemple: "Un dossier RE2020 détaillé est précieux, mais la plupart veulent un résumé opérationnel.",
      analyse: "Ce dilemme renvoie à la segmentation des usages : certains veulent « tout comprendre », d'autres « juste l'essentiel ».",
      gestion: "Décliner chaque contenu en 2 formats (version longue + version Smart Brevity)."
    },
    {
      icon: Users,
      title: "Gratuit vs Payant",
      subtitle: "L'Équilibre de la Valeur",
      contradiction: "Le gratuit pour notoriété/acquisition vs le payant pour valeur/fidélisation.",
      exemple: "Une vidéo LinkedIn attire de nouveaux lecteurs, mais l'analyse complète doit être réservée aux abonnés.",
      analyse: "Le gratuit agit comme « bande-annonce » ; le payant comme « film complet ».",
      gestion: "Stratégie d'entonnoir : gratuit comme teaser → payant comme aboutissement."
    },
    {
      icon: Bot,
      title: "Humain vs IA",
      subtitle: "Le Défi de l'Authenticité",
      contradiction: "L'incarnation humaine (authenticité) vs l'automatisation (efficacité, personnalisation).",
      exemple: "Flash Info IA est rapide, mais la validation humaine garantit la crédibilité.",
      analyse: "L'IA est efficace pour la production, mais seule la voix humaine crée l'émotion et la confiance.",
      gestion: "IA = copilote, validation humaine systématique."
    },
    {
      icon: MousePointer,
      title: "Passif vs Actif",
      subtitle: "Le Choix du Mode",
      contradiction: "Formats passifs (podcasts, lecture auto) vs formats actifs (quiz, simulateurs).",
      exemple: "Certains pros préfèrent écouter un flash info, d'autres tester un simulateur ACV.",
      analyse: "Offrir une pluralité de modes permet d'élargir l'audience et de s'adapter aux temps disponibles.",
      gestion: "Offrir les 3 modes sur un même sujet (à écouter, à survoler, à explorer)."
    }
  ];

  return (
    <section 
      id="tensions" 
      ref={sectionRef}
      className="section-padding tensions-section"
    >
      <div className="container">
        
        {/* Header */}
        <div className={`
          text-center mb-20 transition-all duration-700
          ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
        `}>
          <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 border-4 border-black" style={{boxShadow: '6px 6px 0 #FFE666'}}>
            <AlertTriangle className="text-black" size={32} />
          </div>
          
          <h2 className="text-display font-black text-gray-900 mb-6">
            Tensions & Contradictions
          </h2>
          
          <p className="text-body-large text-gray-600 max-w-3xl mx-auto leading-relaxed">
            L'adoption de ces formats n'est pas sans enjeux. Comprendre ces contradictions 
            est clé pour une <span className="highlight">stratégie équilibrée</span>.
          </p>
        </div>

        {/* Grid des Tensions */}
        <div className="grid lg:grid-cols-2 gap-8">
          {tensions.map((tension, index) => (
            <div 
              key={index}
              className={`
                impact-card transition-all duration-700
                ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
              `}
              style={{ 
                animationDelay: `${index * 200}ms`
              }}
            >
              
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border-4 border-black" style={{boxShadow: '3px 3px 0 #FFE666'}}>
                  <tension.icon size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-subtitle font-bold text-black">{tension.title}</h3>
                  <p className="text-sm text-black font-medium opacity-80">{tension.subtitle}</p>
                </div>
              </div>

              {/* Contenu */}
              <div className="space-y-5">
                
                {/* Contradiction */}
                <div>
                  <h4 className="font-bold text-black mb-2 text-xs uppercase tracking-wide">
                    Contradiction
                  </h4>
                  <p className="text-sm text-black leading-relaxed opacity-90">{tension.contradiction}</p>
                </div>

                {/* Exemple */}
                <div className="bg-gray-card rounded-lg p-4 border-3 border-black">
                  <h4 className="font-bold text-black mb-2 text-xs uppercase tracking-wide">
                    Exemple
                  </h4>
                  <p className="text-sm text-black leading-relaxed italic opacity-90">{tension.exemple}</p>
                </div>

                {/* Gestion */}
                <div className="highlight-full">
                  <h4 className="font-bold text-black mb-2 text-xs uppercase tracking-wide flex items-center gap-2">
                    <ArrowRight className="w-3 h-3" />
                    Solution
                  </h4>
                  <p className="text-sm text-black leading-relaxed font-medium">{tension.gestion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
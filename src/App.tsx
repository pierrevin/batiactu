import React from 'react';
import { 
  BookOpen, 
  BarChart3, 
  Smartphone, 
  Clock, 
  Gamepad2, 
  Headphones, 
  Users 
} from 'lucide-react';
import { siteConfig } from './config/content';
import { ScrollProgress } from './components/ScrollProgress';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AxisCard } from './components/AxisCard';
import { TransitionSection } from './components/TransitionSection';
import { TensionsSection } from './components/TensionsSection';
import { Conclusion } from './components/Conclusion';
import { SablierMethod } from './components/SablierMethod';

function App() {
  const sections = siteConfig.navigation.sections;

  // Mapping des icônes
  const iconMap = {
    BookOpen,
    BarChart3,
    Smartphone,
    Clock,
    Gamepad2,
    Headphones,
    Users
  };

  const axes = siteConfig.axes.map(axis => ({
    ...axis,
    icon: iconMap[axis.icon as keyof typeof iconMap]
  }));

  return (
    <div className="relative">
      <ScrollProgress />
      <Navigation sections={sections} />
      
      <Hero />
      
      {axes.map((axis, index) => (
        <React.Fragment key={axis.id}>
          <TransitionSection 
            number={index + 1}
            title={axis.title}
            subtitle={axis.subtitle || ''}
            icon={axis.icon}
          />
          <AxisCard 
            id={axis.id}
            title={axis.title}
            subtitle={axis.subtitle}
            concept={axis.concept}
            examples={axis.examples}
            applications={axis.applications}
            practices={axis.practices}
            rightColumn={axis.rightColumn}
            faisabilite={axis.faisabilite}
            paywall={axis.paywall}
            icon={axis.icon}
            index={index}
          />
        </React.Fragment>
      ))}
      
      <TensionsSection />
      <Conclusion />
      <SablierMethod />
    </div>
  );
}

export default App;
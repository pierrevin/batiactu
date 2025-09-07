import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  sections: { id: string; title: string }[];
}

export const Navigation: React.FC<NavigationProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean);

      const currentSection = sectionElements.find(el => {
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
        const index = sections.findIndex(s => s.id === currentSection.id);
        if (index !== -1) {
          setCurrentIndex(index);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      scrollToSection(sections[currentIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (currentIndex < sections.length - 1) {
      scrollToSection(sections[currentIndex + 1].id);
    }
  };

  return (
    <>
      {/* Header Navigation Sticky */}
      <div className="nav-header-sticky">
        <div className="nav-header-content">
          
          {/* Navigation Arrows */}
          <div className="nav-arrows">
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="nav-arrow-btn"
              title="Section précédente"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="nav-progress">
              <span className="nav-current">{currentIndex + 1}</span>
              <span className="nav-separator">/</span>
              <span className="nav-total">{sections.length}</span>
            </div>
            
            <button
              onClick={goToNext}
              disabled={currentIndex === sections.length - 1}
              className="nav-arrow-btn"
              title="Section suivante"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Section Title */}
          <div className="nav-section-title">
            {sections[currentIndex]?.title || 'Accueil'}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="nav-mobile-button-header lg:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="nav-mobile-button lg:hidden"
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="nav-mobile-menu lg:hidden">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`nav-mobile-item ${activeSection === section.id ? 'active' : ''}`}
            >
              {section.title}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
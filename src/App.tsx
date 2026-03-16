import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';
import { StarBackground } from './components/StarBackground';

function App() {
  const sections = [
    { id: 'home', component: <Hero /> },
    { id: 'about', component: <About /> },
    { id: 'skills', component: <Skills /> },
    { id: 'projects', component: <Projects /> },
    { id: 'experience', component: <Experience /> },
    { id: 'contact', component: <div className="min-h-screen flex flex-col"><Contact /><div className="mt-auto"><Footer /></div></div> }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Document height represents the total scrollable area
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      
      const progress = window.scrollY / maxScroll;
      // Map progress [0, 1] to an index [0, sections.length - 1]
      const index = Math.round(progress * (sections.length - 1));
      
      if (index !== activeIndex && index >= 0 && index < sections.length) {
        setActiveIndex(index);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex, sections.length]);

  return (
    <div className="bg-neutral-950 text-slate-50 selection:bg-red-500/30 selection:text-red-200">
      <Cursor />
      <StarBackground />
      {/* 
        This is a 'ghost' div that stretches the page so the user can scroll.
        Height = (sections) * 100vh so scrolling feels natural. 
      */}
      <div style={{ height: `${sections.length * 100}vh` }} />
      
      {/* Scroll Anchors for Navbar to snap correctly */}
      {sections.map((section, index) => (
        <div 
          key={`anchor-${section.id}`} 
          id={section.id} 
          className="absolute w-full pointer-events-none" 
          style={{ top: `${index * 100}vh`, height: '100vh' }} 
        />
      ))}

      <Navbar />
      
      {/* Container that stays fixed on screen and renders the Active Section with a Cross-fade */}
      <div className="fixed inset-0 w-full h-screen pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full overflow-y-auto pointer-events-auto"
          >
            {sections[activeIndex].component}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}

export default App;



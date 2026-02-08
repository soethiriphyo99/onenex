import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectTabs from './components/ProjectTabs';
import ProjectGrid from './components/ProjectGrid';
import TalkProject from './components/TalkProject';
import ServicePage from './components/ServicePage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'cases' | 'services' | 'contact'>('cases');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  console.log('Current Page:', currentPage);

  return (
    <div className="app">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="main-content">
        <main>
          <AnimatePresence mode="wait">
            {currentPage === 'cases' ? (
              <motion.div
                key="cases"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Hero />
                <ProjectTabs />
                <ProjectGrid />
                <TalkProject onContactClick={() => setCurrentPage('contact')} />
              </motion.div>
            ) : currentPage === 'services' ? (
              <motion.div
                key="services"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <ServicePage />
                <TalkProject onContactClick={() => setCurrentPage('contact')} />
              </motion.div>
            ) : (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <ContactPage />
                <TalkProject hideButton={true} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TicketCategories from './components/TicketCategories';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './utils/animations.css';

function App() {
  useEffect(() => {
    document.title = 'beCare Ticket Office';
  }, []);

  const heroRef = useRef<HTMLDivElement | null>(null);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsScrolledPastHero(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Header isScrolledPastHero={isScrolledPastHero} />
      <main>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          ref={heroRef}
        >
          <HeroSection />
        </motion.div>
        <TicketCategories />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
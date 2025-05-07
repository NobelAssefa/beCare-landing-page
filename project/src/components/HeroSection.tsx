import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBackground from '../assets/airlines.mp4';
import { useCountUp } from './useCountUp';

const stats = [
  { label: 'Years Experience', end: 4 },
  { label: 'Happy Clients', end: 100 },
  { label: 'Destinations', end: 30 },
];

const HeroSection = () => {
  const [showVision, setShowVision] = useState(false);
  // Animate numbers only when section is visible
  const [startCount, setStartCount] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('home');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setStartCount(true);
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // Get live counts
  const counts = stats.map((stat, i) => useCountUp({ end: startCount ? stat.end : 0, duration: 1.2 + i * 0.2 }));

  // Hide modal on scroll
  useEffect(() => {
    if (!showVision) return;
    const handleScroll = () => setShowVision(false);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showVision]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative container mx-auto px-4 z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '0 4px 24px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.5)' }}>
            Welcome to BeCare <br className="hidden md:block" />
            <span className="text-[#E5F4F6]">Travel and Tour</span>
          </h1>
          <p className="text-[#E5F4F6] ml-2 font-bold text-1.5xl">
            BeCare Travel and Tour PLC offers professional,
          </p>
          <p className="text-[#E5F4F6] ml-2 font-bold text-1.5xl">
            convenient international and domestic flight booking services.
          </p>

          {/* Live Stats Row */}
          <div className="flex flex-wrap gap-6 mt-8 mb-4 justify-center md:justify-start">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center px-5 py-2 bg-white/10 rounded-xl min-w-[120px]">
                <span className="text-3xl md:text-4xl font-bold text-[#E5F4F6]">
                  {counts[i].toLocaleString()}
                  {(stat.label === 'Years Experience' || stat.label === 'Happy Clients' ||  stat.label === 'Destinations') && '+'}
                </span>
                <span className="text-[#E5F4F6] text-sm md:text-base font-semibold mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <button
              className="bg-white/10 mt-4 hover:bg-[#15626A] text-white border-2 border-white py-3 px-8 rounded-full font-medium transition-all duration-300"
              onClick={() => setShowVision(true)}
            >
              Learn More
              <ArrowRight className="inline ml-2" />
            </button>
            <button
              className="bg-white/10 mt-4 hover:bg-[#15626A] text-white border-2 border-white py-3 px-8 rounded-full font-medium transition-all duration-300"
              onClick={() => {
                const el = document.getElementById('contact-us');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Contact Us
            </button>
          </motion.div>
        </motion.div>
        {/* Expanded Learn More Modal */}
        <AnimatePresence>
          {showVision && (
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4"
              style={{ backdropFilter: 'blur(4px)' }}
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.28 }}
                className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full px-8 sm:px-14 py-10 sm:py-14 text-center relative overflow-y-auto max-h-[90vh]"
              >
                <button
                  type="button"
                  className="absolute top-4 right-4 text-[#15626A] text-2xl font-bold hover:text-[#1A7A84] transition-colors z-10 focus:outline-none"
                  onMouseDown={e => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  onTouchStart={e => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  onClick={e => {
                    e.stopPropagation();
                    e.preventDefault();
                    setShowVision(false);
                  }}
                  aria-label="Close"
                >
                  ×
                </button>
                <motion.h2
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  className="text-2xl sm:text-3xl font-bold text-[#15626A] mb-4"
                >
                  About BeCare Travel and Tour
                </motion.h2>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg max-w-xl mx-auto mb-2">
                  BeCare Travel and Tour PLC is a leading provider of travel solutions, specializing in both international and domestic flight bookings. With a commitment to customer satisfaction, we have proudly served thousands of happy clients, offering competitive prices and a seamless booking experience.
                </p>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg max-w-xl mx-auto mb-2">
                  Our experienced team is dedicated to making your travel dreams a reality, whether you're planning a business trip, a family vacation, or an adventurous getaway. We partner with top airlines and service providers to ensure you get the best value and support at every step of your journey.
                </p>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg max-w-xl mx-auto">
                  Choose BeCare for reliability, professionalism, and a personal touch that makes every trip memorable. Thank you for trusting us with your travel needs!
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBackground from '../assets/airlines.mp4';

const HeroSection = () => {
  const [showVision, setShowVision] = useState(false);

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
            Welcome to beCare <br className="hidden md:block" />
            <span className="text-[#E5F4F6]">Travel and Tour</span>
          </h1>
          <p className="text-[#E5F4F6] ml-2 font-bold text-1.5xl">
            BeCare Travel and Tour PLC offers professional,
          </p>
          <p className="text-[#E5F4F6] ml-2 font-bold text-1.5xl">
            convenient international and domestic flight booking services.
          </p>

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
            </button>

            <button
              className="bg-[#15626A] mt-4 hover:bg-white/10 text-white  border-white py-3 px-8 rounded-full font-medium transition-all duration-300"
              onClick={() => {
                const el = document.getElementById('contact-us');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Contact Us
            </button>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-white">
              <span className="text-[#E5F4F6] font-bold text-2xl">5+</span>
              <p className="text-sm">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-white">
              <span className="text-[#E5F4F6] font-bold text-2xl">100+</span>
              <p className="text-sm">Happy Clients</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-white">
              <span className="text-[#E5F4F6] font-bold text-2xl">24/7</span>
              <p className="text-sm">Support</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <AnimatePresence>
        {showVision && (
          <motion.div
            initial={{ opacity: 0, filter: 'blur(24px)', scale: 1.1 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(24px)', scale: 1.1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="bg-white/95 rounded-3xl shadow-2xl max-w-2xl w-full px-10 py-12 text-center relative overflow-hidden"
            >
              <button
                className="absolute top-4 right-4 text-[#15626A] text-2xl font-bold hover:text-[#1A7A84] transition-colors z-10"
                onClick={() => setShowVision(false)}
                aria-label="Close"
              >
                ×
              </button>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.3 }}
                className="text-3xl font-bold mb-6 text-[#15626A] drop-shadow-lg"
              >
                Our Vision, Mission & Values
              </motion.h2>
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.22, duration: 0.35 }}
                  className="bg-[#E5F4F6] rounded-2xl p-6 shadow-md w-full md:w-1/2"
                >
                  <h3 className="text-xl font-semibold mb-2 text-[#15626A]">Vision</h3>
                  <p className="text-gray-700">To become a trusted travel partner that not only 
connects people to destinations but also promotes 
mindful, personalized journeys that support wellbeing 
and enrich lives.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16, duration: 0.35 }}
                  className="bg-[#E5F4F6] rounded-2xl p-6 shadow-md w-full md:w-1/2"
                >
                  <h3 className="text-xl font-semibold mb-2 text-[#15626A]">Mission</h3>
                  <p className="text-gray-700">To provide customer-focused air travel 
solutions—helping travelers find the best 
routes, fares, and booking options with ease 
and confidence</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.32, duration: 0.35 }}
                  className="bg-[#E5F4F6] rounded-2xl p-6 shadow-md w-full md:w-1/3"
                >
                  <h3 className="text-xl font-semibold mb-2 text-[#15626A]">Values</h3>
                  <ul className="text-gray-700 list-disc list-inside space-y-2">
                    <li>Professionalism</li>
                    <li>Reliability</li>
                    <li>Friendliness </li>
                    <li>Commitment to excellence in every ticket we deliver</li>
                  </ul>
                </motion.div>
              </div>
              {/* Smoke effect overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.35 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 40%, rgba(200,200,200,0.32) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)',
                  mixBlendMode: 'screen',
                  filter: 'blur(12px)'
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
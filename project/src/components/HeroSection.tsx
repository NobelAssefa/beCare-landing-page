import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBackground from '../assets/airlines.mp4';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            <span className="text-[#E5F4F6]">Ticket Office</span>
          </h1>
          <p className="text-[#E5F4F6] font-bold text-2xl">
            Your trusted partner for seamless ticket solutions. Experience excellence in event and travel ticketing services.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >

            <button className="bg-[#15626A] mt-2 hover:bg-white/10 text-white border-2 border-white py-3 px-8 rounded-full font-medium transition-all duration-300">
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
              <span className="text-[#E5F4F6] font-bold text-2xl">100K+</span>
              <p className="text-sm">Happy Clients</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-white">
              <span className="text-[#E5F4F6] font-bold text-2xl">24/7</span>
              <p className="text-sm">Support</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
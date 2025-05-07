import React, { useState, useRef, useEffect } from 'react';
import { Music, Plane, Trophy, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import worldMap from '../assets/world-map.png';

const categories = [
  {
    title: "Travel Options",
    description: "Get tickets to the hottest concerts and events in your area.",
    icon: <Music className="h-6 w-6" />,
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1600",
    color: "from-[#15626A] to-[#1A7A84]"
  },
  {
    title: "Booking and Ticket ",
    description: "Book flights to destinations worldwide at competitive prices.",
    icon: <Plane className="h-6 w-6" />,
    image: "https://images.pexels.com/photos/379419/pexels-photo-379419.jpeg?auto=compress&cs=tinysrgb&w=1600",
    color: "from-[#15626A] to-[#1A7A84]"
  },
  
  {
    title: "Itinerary Advice",
    description: "Connect with industry leaders at major conferences.",
    icon: <Users className="h-6 w-6" />,
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600",
    color: "from-[#15626A] to-[#1A7A84]"
  },

 
];

const TicketCategories = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const expandedRef = useRef<HTMLDivElement | null>(null);

  // Collapse on click/touch outside or scroll away
  useEffect(() => {
    if (expanded !== null) {
      const handleClickOutside = (event: MouseEvent | TouchEvent) => {
        if (
          expandedRef.current &&
          !expandedRef.current.contains(event.target as Node)
        ) {
          setExpanded(null);
        }
      };
      const handleScroll = () => {
        const section = document.getElementById('services');
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.bottom < 60 || rect.top > window.innerHeight - 60) {
            setExpanded(null);
          }
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      window.addEventListener('scroll', handleScroll);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('touchstart', handleClickOutside);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [expanded]);

  const handleExpand = (title: string) => {
    setExpanded(prev => prev === title ? null : title);
  };

  return (
    <section id="services" className="py-20 bg-[#f0f4f5] relative overflow-hidden">
      {/* World map background image */}
      <img
        src={worldMap}
        alt="world map background"
        className="absolute inset-0 w-full h-full object-contain opacity-20 pointer-events-none z-0"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxHeight: '90%', maxWidth: '90%' }}
      />
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#15626A] mb-4">OUR SERVICES</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our wide range of ticket categories and find exactly what you're looking for.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start w-full">
          {categories.map((category, index) => (
            <motion.div 
              key={category.title}
              ref={expanded === category.title ? expandedRef : undefined}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.38, delay: index * 0.09, type: 'spring', stiffness: 170, damping: 18 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(21,98,106,0.14)' }}
              className={`bg-[#f0f4f5] rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl relative group ${expanded === category.title ? 'z-50' : 'z-30'} w-full min-w-0 flex flex-col overflow-hidden`}
              layout
            >
              <div className="h-32 relative overflow-hidden group-hover:h-40 transition-all duration-400 flex items-center justify-center">
                <motion.span
                  whileHover={{ rotate: 12, scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 14 }}
                  className="inline-block"
                >
                  {category.icon}
                </motion.span>
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover absolute top-0 left-0 z-0 opacity-60 group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#15626A]/80 to-[#1A7A84]/80 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white z-20">
                  <div className="text-center">
                    <h3 className="text-base font-bold drop-shadow-lg">{category.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="space-y-4 flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 flex-1">{category.description}</p>
                  <div className="relative">
                    <button 
                      onClick={() => handleExpand(category.title)}
                      className="w-full py-2 border-2 border-[#15626A] text-[#15626A] rounded-full font-medium transition-colors duration-200 hover:bg-[#15626A] hover:text-white flex items-center justify-center gap-2"
                    >
                      Learn More
                      <svg className="w-4 h-4 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {expanded === category.title ? (
                          <path d="M12 5v14M5 12h14" />
                        ) : (
                          <path d="M9 5l7 7-7 7" />
                        )}
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <AnimatePresence initial={false}>
                      {expanded === category.title && (
                        <motion.div
                          key={category.title + '-expanded'}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: 'easeInOut' }}
                          className="overflow-hidden w-full max-w-md mt-4 mx-auto"
                          layout
                        >
                          <div className="bg-white rounded-xl shadow-xl p-6 border border-[#15626A]/20">
                            <p className="text-gray-700 leading-relaxed">
                              {category.description}
                              <br /><br />
                              <span className="text-[#15626A] font-semibold">Special Features:</span>
                              <ul className="list-disc list-inside mt-2 space-y-2">
                                <li>Best prices guaranteed</li>
                                <li>24/7 customer support</li>
                                <li>Secure payment options</li>
                                <li>Easy booking process</li>
                              </ul>
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketCategories;
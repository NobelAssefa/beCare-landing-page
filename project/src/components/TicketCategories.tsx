import React, { useState } from 'react';
import { Music, Plane, Trophy, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import worldMap from '../assets/world-map.png';

const categories = [
  {
    title: "Concerts & Events",
    description: "Get tickets to the hottest concerts and events in your area.",
    icon: <Music className="h-6 w-6" />,
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1600",
    color: "from-[#15626A] to-[#1A7A84]"
  },
  {
    title: "Flight Tickets",
    description: "Book flights to destinations worldwide at competitive prices.",
    icon: <Plane className="h-6 w-6" />,
    image: "https://images.pexels.com/photos/379419/pexels-photo-379419.jpeg?auto=compress&cs=tinysrgb&w=1600",
    color: "from-[#15626A] to-[#1A7A84]"
  },
  {
    title: "Sports Matches",
    description: "Never miss a game with tickets to all major sporting events.",
    icon: <Trophy className="h-6 w-6" />,
    image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1600",
    color: "from-[#15626A] to-[#1A7A84]"
  },
  {
    title: "Conferences",
    description: "Connect with industry leaders at major conferences.",
    icon: <Users className="h-6 w-6" />,
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600",
    color: "from-[#15626A] to-[#1A7A84]"
  }
];

const TicketCategories = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleExpand = (index: number) => {
    setExpanded(prev => prev === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f0f4f5] relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#15626A] mb-4">Discover Tickets</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our wide range of ticket categories and find exactly what you're looking for.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#f0f4f5] rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl relative"
            >
              <div className="h-48 relative overflow-hidden group-hover:h-56 transition-all duration-700">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br from-[#15626A]/80 to-[#1A7A84]/80`}></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 inline-flex mb-2">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="relative">
                    <button 
                      onClick={() => handleExpand(index)}
                      className="w-full py-2 border-2 border-[#15626A] text-[#15626A] rounded-full font-medium transition-colors duration-300 hover:bg-[#15626A] hover:text-white flex items-center justify-center gap-2"
                    >
                      Learn More
                      <svg className="w-4 h-4 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {expanded === index ? (
                          <path d="M12 5v14M5 12h14" />
                        ) : (
                          <path d="M9 5l7 7-7 7" />
                        )}
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {expanded === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="overflow-hidden w-full max-w-md mt-4"
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
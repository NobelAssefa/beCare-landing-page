import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    id: 1,
    name: "Global Airlines",
    logo: "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 2,
    name: "EventPro",
    logo: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 3,
    name: "Sports League",
    logo: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 4,
    name: "Concert Hall",
    logo: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 5,
    name: "Travel Express",
    logo: "https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
];

const Partners = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#15626A] mb-4">Our Trusted Partners</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collaborating with industry leaders to provide you with the best ticketing experience
          </p>
        </motion.div>

        {/* Marquee Rows */}
        <div className="space-y-8">
          {/* Top Row - moves left */}
          <div className="overflow-hidden w-full">
            <div className="flex animate-marquee-left gap-8 w-max">
              {partners.concat(partners).map((partner, i) => (
                <div
                  key={`top-${partner.id}-${i}`}
                  className="flex flex-col items-center justify-center h-40 w-64 mx-2"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-24 w-40 object-cover rounded-xl mb-2"
                  />
                  <span className="font-semibold text-[#15626A] text-lg mt-2">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Bottom Row - moves right */}
          <div className="overflow-hidden w-full">
            <div className="flex animate-marquee-right gap-8 w-max">
              {partners.concat(partners).map((partner, i) => (
                <div
                  key={`bottom-${partner.id}-${i}`}
                  className="flex flex-col items-center justify-center h-40 w-64 mx-2"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-24 w-40 object-cover rounded-xl mb-2"
                  />
                  <span className="font-semibold text-[#15626A] text-lg mt-2">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Marquee Animations */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Partners;
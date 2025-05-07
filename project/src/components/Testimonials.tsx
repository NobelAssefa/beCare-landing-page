import React from 'react';
import { motion } from 'framer-motion';
import planeBg from '../assets/plane.png';
import becare from '../assets/becare.jpg';
const teamMembers = [
  {
    id: 1,
    name: "Ehite Tassew",
    role: "Founder & CEO",
    image: becare
  },
];

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20 bg-[#f0f4f5] relative overflow-hidden">
      {/* Plane background image */}
      <img
        src={planeBg}
        alt="plane background"
        className="absolute inset-0 w-full h-full object-contain opacity-40 pointer-events-none z-0"
        style={{ top: '40%', left: '25%', transform: 'translate(-50%, -50%)', maxHeight: '80%', maxWidth: '80%' }}
      />
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full"></div>
        <div className="absolute top-60 right-20 w-40 h-40 bg-blue-100 rounded-full"></div>
        <div className="absolute bottom-20 left-60 w-60 h-60 bg-blue-100 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-[#15626A] mb-4"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            At BeCare, our mission is to make health and wellness accessible to everyone. We are a passionate team dedicated to providing innovative solutions that empower individuals to take control of their health journey.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto"
        >
          <div className="mb-10 text-center">
            <h3 className="text-2xl font-semibold text-[#15626A] mb-2">Our Story</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Founded in 2024, BeCare was born out of a desire to bridge the gap between technology and personal well-being. Our diverse team brings together expertise from healthcare, technology, and design to create tools that truly make a difference.
            </p>
          </div>

          <div className="mb-10 text-center">
            <h3 className="text-2xl font-semibold text-[#15626A] mb-2">Our Values</h3>
            <ul className="flex flex-wrap justify-center gap-6 mt-4">
              <li className="bg-blue-50 rounded-lg px-6 py-3 text-[#15626A] font-medium shadow-sm">Professionalism</li>
              <li className="bg-blue-50 rounded-lg px-6 py-3 text-[#15626A] font-medium shadow-sm">Reliability</li>
              <li className="bg-blue-50 rounded-lg px-6 py-3 text-[#15626A] font-medium shadow-sm">Responsiveness</li>
              <li className="bg-blue-50 rounded-lg px-6 py-3 text-[#15626A] font-medium shadow-sm">Friendliness</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#15626A] mb-8 text-center">Our CEO</h3>
            <div className="flex justify-center">
              {teamMembers.map(member => (
                <div key={member.id} className="flex flex-col items-center bg-[#f0f4f5] rounded-xl p-6 shadow group hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100 group-hover:border-blue-300 transition-colors duration-300"
                  />
                  <span className="font-bold text-[#15626A] text-lg mb-1">{member.name}</span>
                  <span className="text-blue-400 text-sm">{member.role}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
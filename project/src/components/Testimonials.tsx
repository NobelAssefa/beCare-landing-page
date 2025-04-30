import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import planeBg from '../assets/plane.png';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Music Enthusiast",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    stars: 5,
    quote: "TicketPro made getting tickets to my favorite band so easy! The interface is intuitive, and I received my tickets instantly. Will definitely use again!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Frequent Traveler",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    stars: 5,
    quote: "I've booked flights through numerous platforms, but none compare to TicketPro. The prices are competitive, and their customer service is top-notch."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Sports Fan",
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    stars: 4,
    quote: "As a die-hard sports fan, I need reliable ticket access. TicketPro has never let me down, even for high-demand games. Their app is fantastic!"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-[#f0f4f5] relative overflow-hidden">
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
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what customers have to say about their experience with TicketPro.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-white rounded-2xl shadow-xl p-8 md:p-10"
          >
            {/* Desktop version - show all testimonials in a carousel */}
            <div className="hidden md:block">
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out" 
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, idx) => (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: currentIndex === idx ? 1 : 0.5, x: currentIndex === idx ? 0 : 40 }}
                      transition={{ duration: 0.5 }}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div className="flex flex-col items-center text-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-100"
                        />
                        <div className="flex space-x-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-5 w-5 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <blockquote className="italic text-gray-700 mb-4">"{testimonial.quote}"</blockquote>
                        <div>
                          <span className="font-bold text-[#15626A]">{testimonial.name}</span>
                          <p className="text-blue-400 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-8 space-x-4">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors duration-300"
                >
                  <ChevronLeft className="h-6 w-6 text-blue-600" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors duration-300"
                >
                  <ChevronRight className="h-6 w-6 text-blue-600" />
                </button>
              </div>
            </div>

            {/* Mobile version - show current testimonial only */}
            <div className="md:hidden">
              <div className="flex flex-col items-center text-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-100"
                />
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonials[currentIndex].stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <blockquote className="italic text-gray-700 mb-4">"{testimonials[currentIndex].quote}"</blockquote>
                <div>
                  <span className="font-bold text-[#15626A]">{testimonials[currentIndex].name}</span>
                  <p className="text-blue-400 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>

              <div className="flex justify-center mt-8 space-x-4">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors duration-300"
                >
                  <ChevronLeft className="h-6 w-6 text-blue-600" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors duration-300"
                >
                  <ChevronRight className="h-6 w-6 text-blue-600" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
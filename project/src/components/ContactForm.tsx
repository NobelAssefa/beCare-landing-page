import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string|null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (formData.name && formData.email && formData.message) {
      emailjs.send(
        'service_ndrken5',
        'template_gzt30u3',
        {
          name: formData.name,
          email: formData.email,
          from_email: formData.email,
          message: formData.message,
          title: 'Contact Inquiry',
          time: new Date().toLocaleString(),
        },
        'Yd6feI21CyZ6t4ZFW'
      )
      .then(() => {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch((err) => {
        setError('Failed to send message. Please try again later.');
        console.log('EmailJS error:', err);
      });
    }
  };

  return (
    <motion.section
      id="contact-us"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-20 bg-[#006A71] text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-300 mb-8"
          >
            Have questions or need assistance? We're here to help! Fill out the form below and we'll get back to you as soon as possible.
          </motion.p>

          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-6 max-w-lg mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.13 } }
            }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.5 }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <textarea
                placeholder="Your Message"
                className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </motion.div>
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: '0 0 16px #48A6A7' }}
              whileTap={{ scale: 0.97 }}
              className="w-full px-8 py-4 bg-[#48A6A7] hover:bg-[#034C53]/80 rounded-full font-medium transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>

          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mt-6 text-lg font-semibold text-green-200 bg-green-900/60 px-6 py-3 rounded-full shadow-lg inline-block"
              >
                Thank you! Your message has been sent.
              </motion.div>
            )}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mt-6 text-lg font-semibold text-red-200 bg-red-900/60 px-6 py-3 rounded-full shadow-lg inline-block"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-sm text-gray-400 mt-6">
            We'll respond as soon as possible. Typically within 24 hours.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
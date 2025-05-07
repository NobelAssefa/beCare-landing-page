import React from 'react';
import { Ticket, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#034C53] text-gray-300">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Social */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">BeCare</span>
            </div>
            <p className="mb-6">
              Your one-stop destination for all types of tickets. Fast, secure, and reliable booking service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a
                    href={
                      item === 'About Us' ? '#about-us' :
                      item === 'Contact Us' ? '#contact-us' : 
                      item === 'Services' ? '#services' : '#'
                    }
                    className="hover:text-orange-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <span>123 Bambis, Mekane Yesus bldg, Addis Ababa</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span>+251 923 180980,</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span>Becaretravel@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p> 2025 BeCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
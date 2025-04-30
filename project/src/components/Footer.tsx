import React from 'react';
import { Ticket, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#034C53] text-gray-300">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
      
              <span className=" text-2xl font-bold text-white">beCare</span>
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

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'How It Works', 'Pricing', 'FAQs', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="hover:text-orange-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Ticket Categories</h3>
            <ul className="space-y-3">
              {['Events & Concerts', 'Flight Tickets', 'Sports Matches', 'Conferences', 'Theater & Arts', 'Tours & Activities'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="hover:text-orange-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <span>123 Ticket Street, San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span>support@ticketpro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>© 2025 TicketPro. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-orange-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-orange-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
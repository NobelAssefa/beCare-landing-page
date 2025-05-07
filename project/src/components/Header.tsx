import React, { useState, useEffect } from 'react';
import { Menu, X, Ticket } from 'lucide-react';
import logo from '../assets/logo.png';

interface HeaderProps {
  isScrolledPastHero?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolledPastHero }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About Us', id: 'about-us' },
    // { label: 'Partners', id: 'partners' },
    { label: 'Contact Us', id: 'contact-us' },
  ];
  const [activeMenu, setActiveMenu] = useState('home');

  const handleMenuClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveMenu(id);
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      for (const item of menuItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveMenu(item.id);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveMenu('home');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolledPastHero 
          ? 'bg-white/90 backdrop-blur shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`inline-flex items-center justify-center h-20 w-20 rounded-full transition-all duration-300 ${isScrolledPastHero ? 'bg-[#15626A] shadow-lg' : ''}`}>
              <img src={logo} alt="beCare Logo" className={`h-16 w-16 object-contain ${isScrolledPastHero ? '' : 'filter brightness-0 invert'}`} />
            </span>
            
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`font-medium transition-colors duration-200 relative focus:outline-none px-4 py-2 cursor-pointer
                  ${isScrolledPastHero ? 'text-[#15626A] hover:text-[#034C53]' : 'text-white hover:text-gray-200'}
                `}
                style={{ background: 'none', border: 'none', margin: 0 }}
              >
                {item.label}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[3px] w-8 rounded-full transition-all duration-300
                  ${activeMenu === item.id ? 'bg-[#15626A] opacity-100' : 'opacity-0'}`}
                />
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolledPastHero ? 'text-[#15626A]' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolledPastHero ? 'text-[#15626A]' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-40">
            <nav className="flex flex-col space-y-4 py-6 px-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`font-medium text-lg text-left transition-colors duration-200 relative focus:outline-none
                    ${activeMenu === item.id ? 'text-[#15626A]' : 'text-gray-700'}
                  `}
                  style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 bottom-0 h-[3px] w-6 rounded-full transition-all duration-300
                      ${activeMenu === item.id ? 'bg-[#15626A] opacity-100' : 'opacity-0'}`}
                  />
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
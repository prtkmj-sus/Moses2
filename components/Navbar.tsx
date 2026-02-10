import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out flex justify-center ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div 
          className={`
            flex justify-between items-center transition-all duration-500
            ${isScrolled 
              ? 'w-[90%] md:w-[80%] max-w-5xl bg-navy-900/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl' 
              : 'w-full max-w-7xl px-6 bg-transparent border-none'
            }
          `}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
             <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white font-serif font-bold italic">M</div>
             <span className={`text-xl md:text-2xl font-serif font-bold tracking-tight transition-colors ${isScrolled ? 'text-white' : 'text-white'}`}>
               Moses Lake<span className="text-brand-red">.</span>
             </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'Technology', 'Stories'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium tracking-wide text-slate-300 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <button className={`
              group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300
              ${isScrolled 
                ? 'bg-white text-navy-900 hover:bg-slate-200' 
                : 'bg-brand-red text-white hover:bg-brand-redHover shadow-lg hover:shadow-brand-red/50'}
            `}>
               <span>Book Visit</span>
               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-brand-red transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-navy-950 z-40 transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center space-y-8 p-6">
          {['Home', 'Services', 'Technology', 'Stories'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-3xl font-serif text-white hover:text-brand-red transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="mt-8 bg-brand-red text-white px-8 py-4 rounded-full text-lg font-bold w-full max-w-xs shadow-xl">
            Book Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
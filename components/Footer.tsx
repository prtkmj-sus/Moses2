import React from 'react';
import { Facebook, Instagram, Twitter, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-white pt-32 pb-10 rounded-t-[3rem] mt-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Big CTA */}
        <div className="border-b border-white/10 pb-20 mb-20 flex flex-col md:flex-row justify-between items-end">
           <div>
              <h2 className="font-serif text-6xl md:text-8xl leading-none mb-6">
                Start Your <br/> Journey
              </h2>
              <p className="text-slate-400 max-w-md text-lg">
                Accepting new patients for Fall 2024. Experience the difference of Moses Lake Family Dentistry.
              </p>
           </div>
           <button className="bg-white text-navy-950 rounded-full w-24 h-24 flex items-center justify-center hover:scale-110 transition-transform mt-10 md:mt-0">
              <ArrowUpRight size={40} />
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
           <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center text-white font-serif text-xs">M</div>
                  <span className="font-serif text-xl">Moses Lake.</span>
              </div>
              <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                 123 Lakeview Blvd<br/>
                 Moses Lake, WA 98837<br/><br/>
                 (555) 012-3456
              </p>
           </div>

           <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-slate-500 mb-6">Sitemap</h4>
              <ul className="space-y-4 text-sm font-medium">
                 <li><a href="#" className="hover:text-brand-red transition-colors">Home</a></li>
                 <li><a href="#" className="hover:text-brand-red transition-colors">Services</a></li>
                 <li><a href="#" className="hover:text-brand-red transition-colors">Technology</a></li>
                 <li><a href="#" className="hover:text-brand-red transition-colors">Patient Portal</a></li>
              </ul>
           </div>

           <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-slate-500 mb-6">Social</h4>
              <div className="flex gap-4">
                 <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all"><Instagram size={18} /></a>
                 <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all"><Facebook size={18} /></a>
                 <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all"><Twitter size={18} /></a>
              </div>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 font-medium tracking-wide">
           <p>© 2024 Moses Lake Family Dentistry.</p>
           <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
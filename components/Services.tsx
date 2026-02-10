import React, { useState } from 'react';
import { Sparkles, Activity, Shield, Smile, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Smile Architecture",
    description: "We don't just whiten teeth; we analyze your facial structure to design a smile that enhances your natural beauty using ultra-thin porcelain veneers.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop",
    icon: Sparkles
  },
  {
    id: 2,
    title: "Guided Implantology",
    description: "Reclaim your ability to eat and speak with confidence. Our 3D-guided surgery ensures distinct precision, reducing healing time by up to 50%.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop",
    icon: Activity
  },
  {
    id: 3,
    title: "Total Health Hygiene",
    description: "Experience 'Biofilm Therapy'—a spa-like cleaning process that uses warm air and water instead of scraping, protecting your enamel and gums.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b63?q=80&w=2069&auto=format&fit=crop",
    icon: Shield
  },
  {
    id: 4,
    title: "Discreet Alignment",
    description: "Straighten your teeth without interrupting your lifestyle. We use advanced mapping to create crystal-clear aligners that fit your timeline.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop",
    icon: Smile
  }
];

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section id="services" className="py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20">
           <span className="text-lake-900 font-bold uppercase tracking-widest text-xs mb-2 block">Premium Care</span>
           <h2 className="font-serif text-5xl md:text-6xl text-navy-900 leading-none">
             Curated Treatments <br/> For Your Lifestyle
           </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
           {/* Left: Sticky Image */}
           <div className="lg:w-1/2 relative h-[400px] lg:h-[600px] order-2 lg:order-1">
              <div className="sticky top-32 w-full h-full rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ease-in-out group">
                 <img 
                   src={activeService.image} 
                   alt={activeService.title} 
                   className="w-full h-full object-cover transform scale-105 transition-transform duration-1000 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-navy-900/20"></div>
                 <div className="absolute bottom-8 left-8 right-8">
                    <div className="glass p-6 rounded-2xl border-l-4 border-brand-red backdrop-blur-md">
                       <activeService.icon className="text-navy-900 mb-4" size={32} />
                       <h3 className="font-serif text-2xl text-navy-900">{activeService.title}</h3>
                    </div>
                 </div>
              </div>
           </div>

           {/* Right: Interactive List */}
           <div className="lg:w-1/2 flex flex-col justify-center space-y-4 order-1 lg:order-2">
              {services.map((service) => (
                <div 
                  key={service.id}
                  onMouseEnter={() => setActiveService(service)}
                  className={`
                    group p-8 rounded-3xl transition-all duration-500 cursor-pointer border
                    ${activeService.id === service.id 
                      ? 'bg-white border-slate-200 shadow-xl scale-100 translate-x-4' 
                      : 'bg-transparent border-transparent hover:bg-white/50 scale-95 opacity-60 hover:opacity-100'}
                  `}
                >
                  <div className="flex items-center justify-between mb-4">
                     <span className={`font-serif text-3xl transition-colors ${activeService.id === service.id ? 'text-navy-900' : 'text-slate-400'}`}>
                        {service.title}
                     </span>
                     <ArrowRight 
                       className={`transition-all duration-300 ${activeService.id === service.id ? 'opacity-100 translate-x-0 text-brand-red' : 'opacity-0 -translate-x-4'}`} 
                     />
                  </div>
                  <p className={`text-lg font-light leading-relaxed transition-all duration-300 ${activeService.id === service.id ? 'text-slate-600 h-auto opacity-100' : 'text-slate-400 h-0 opacity-0 overflow-hidden'}`}>
                    {service.description}
                  </p>
                </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
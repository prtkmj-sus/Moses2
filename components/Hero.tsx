import React from 'react';
import { ChevronDown, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0 select-none">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-navy-900/20 to-navy-950/90 z-10"></div>
        {/* Using a high-quality aesthetic dental/lifestyle video */}
        <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover scale-105"
            poster="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
        >
            <source src="https://videos.pexels.com/video-files/6502222/6502222-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        
        <div className="max-w-4xl animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 rounded-full border border-white/20 text-white/80 text-xs font-medium tracking-widest uppercase bg-white/5 backdrop-blur-md">
                    Est. 2024
                </span>
                <span className="h-px w-12 bg-white/20"></span>
                <span className="text-brand-red font-bold tracking-widest text-xs uppercase">Premium Dental Care</span>
            </div>

            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tight mb-8">
              Moses Lake <br />
              <span className="italic font-light text-slate-300">Dentistry</span>
            </h1>

            <p className="font-sans text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12 border-l border-brand-red pl-6">
              Where advanced innovation meets the tranquility of nature. Experience the future of your smile.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="group relative px-8 py-4 bg-white text-navy-900 rounded-full font-bold tracking-wide overflow-hidden w-full sm:w-auto">
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">Book Consultation</span>
                    <div className="absolute inset-0 bg-brand-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                </button>
                
                <button className="group flex items-center gap-4 text-white hover:text-brand-red transition-colors w-full sm:w-auto justify-center sm:justify-start">
                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-brand-red group-hover:bg-brand-red/10 transition-all">
                        <Play size={16} fill="currentColor" />
                    </div>
                    <span className="text-sm font-medium tracking-widest uppercase">Watch Film</span>
                </button>
            </div>
        </div>

      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 z-20 hidden lg:block text-right">
        <p className="text-white/40 text-xs tracking-widest uppercase mb-2">Current Wait Time</p>
        <p className="text-white text-3xl font-serif">~ 2 Days</p>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white/30">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
import React, { useEffect, useRef } from 'react';

const DoctorProfile: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only animate when in view
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Calculate relative position (0 to 1)
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        // Move image slightly slower than scroll (parallax)
        const yPos = progress * 50; 
        imageRef.current.style.transform = `scale(1.1) translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="bg-[#0A0E14] text-white relative overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[90vh]">
        
        {/* Left: Visual (Portrait) */}
        <div className="w-full lg:w-[55%] relative overflow-hidden h-[600px] lg:h-auto group">
           {/* Gradient Overlay for blending */}
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A0E14] z-10 hidden lg:block"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] to-transparent z-10 lg:hidden"></div>
           
           <img 
             ref={imageRef}
             src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
             alt="Dr. Craig Harder"
             className="w-full h-full object-cover object-top transition-transform duration-700 ease-out scale-110 filter grayscale-[20%] contrast-110"
           />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center px-8 py-20 lg:p-24 z-20 relative">
           {/* Decorative Line */}
           <div className="w-20 h-1 bg-brand-red mb-10"></div>

           <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] mb-6 tracking-tight text-white">
             The Foundation <br/>
             <span className="text-slate-400 italic">of Your Smile</span>
           </h2>
           
           <div className="mb-12">
             <h3 className="font-sans text-sm md:text-base text-brand-red font-bold tracking-[0.25em] uppercase border-b border-white/10 pb-4 inline-block pr-12">
               Dr. Craig Harder, DDS
             </h3>
           </div>

           <div className="space-y-6 text-slate-300 font-light text-lg leading-relaxed max-w-xl">
             <p>
               With over 25 years of dedicated experience, Dr. Harder has become a pillar of the Moses Lake community. His approach marries technical mastery with a deeply personal commitment to patient well-being.
             </p>
             <p>
               He believes that true precision dentistry goes beyond the procedure—it’s about crafting a lasting foundation for health. Dr. Harder continuously invests in advanced methodologies to ensure every visit is efficient, effective, and comfortable.
             </p>
             <p>
               "I treat every patient with the same level of care and detail I would expect for my own family. Your smile is my legacy."
             </p>
           </div>

           <div className="mt-20 opacity-80">
              {/* SVG Signature */}
              <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 40 C 20 30, 40 10, 50 20 C 60 30, 50 50, 60 40 C 70 30, 90 20, 100 30" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M110 30 C 120 20, 130 30, 140 30 C 150 30, 160 20, 170 30" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M20 45 L 180 35" stroke="white" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="4 4" />
                <text x="10" y="55" fontFamily="serif" fontSize="12" fill="white" opacity="0.5">Craig Harder, DDS</text>
              </svg>
           </div>
        </div>

      </div>
    </section>
  );
};

export default DoctorProfile;
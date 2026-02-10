import React from 'react';
import { Monitor, Scan, Clock, Zap, Cpu } from 'lucide-react';

const Technology: React.FC = () => {
  return (
    <section id="technology" className="py-32 bg-navy-950 text-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[100px] animate-blob"></div>
         <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-lake-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <div className="max-w-2xl">
             <span className="text-lake-500 font-bold uppercase tracking-widest text-xs mb-4 block">Future Forward</span>
             <h2 className="font-serif text-5xl md:text-7xl leading-none bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
               Digital <br/> Precision
             </h2>
           </div>
           <p className="text-slate-400 max-w-sm mt-8 md:mt-0 text-lg font-light">
             We’ve replaced uncomfortable traditional methods with instant, accurate, and painless digital alternatives.
           </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
           
           {/* Main Large Card - CBCT */}
           <div className="md:col-span-2 lg:col-span-2 row-span-2 rounded-3xl overflow-hidden relative group border border-white/5">
             {/* Updated to a high-tech dental imaging look */}
             <img 
               src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2532&auto=format&fit=crop" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
               alt="CBCT 3D Imaging"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-8">
               <div className="w-12 h-12 bg-lake-500 rounded-2xl flex items-center justify-center mb-4 text-navy-950 shadow-lg shadow-lake-500/20">
                 <Scan size={24} />
               </div>
               <h3 className="text-3xl font-serif mb-2">CBCT 3D Analysis</h3>
               <p className="text-slate-300 font-light max-w-md">Comprehensive 360-degree cranial scanning. We see nerve pathways and bone density that standard X-rays miss.</p>
             </div>
           </div>

           {/* Card 2 */}
           <div className="glass-dark rounded-3xl p-8 flex flex-col justify-between hover:bg-white/5 transition-colors cursor-pointer group border border-white/5">
              <div className="flex justify-between items-start">
                 <Monitor size={32} className="text-slate-400 group-hover:text-lake-500 transition-colors" />
                 <span className="text-xs text-slate-500 border border-slate-700 rounded-full px-2 py-1">2024 Model</span>
              </div>
              <div>
                 <h4 className="text-xl font-bold mb-1">iTero Scanner</h4>
                 <p className="text-sm text-slate-400">No more goop. Digital impressions in seconds.</p>
              </div>
           </div>

           {/* Card 3 */}
           <div className="glass-dark rounded-3xl p-8 flex flex-col justify-between hover:bg-white/5 transition-colors cursor-pointer group border border-white/5">
              <div className="flex justify-between items-start">
                 <Zap size={32} className="text-slate-400 group-hover:text-brand-red transition-colors" />
              </div>
              <div>
                 <h4 className="text-xl font-bold mb-1">Laser Tissue</h4>
                 <p className="text-sm text-slate-400">Painless gum contouring and healing.</p>
              </div>
           </div>

           {/* Card 4 - Wide (Replaced AI with Same Day Restoration) */}
           <div className="md:col-span-2 glass-dark rounded-3xl p-8 flex items-center gap-8 hover:bg-white/5 transition-colors cursor-pointer relative overflow-hidden group border border-white/5">
              <div className="absolute right-0 top-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors"></div>
              <div className="z-10 flex flex-col md:flex-row md:items-center gap-6">
                 <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center shadow-inner shrink-0">
                    <Clock size={28} className="text-lake-500" />
                 </div>
                 <div>
                    <h4 className="text-2xl font-serif mb-2">One-Visit Restorations</h4>
                    <p className="text-slate-400 max-w-sm">Featuring CEREC Primescan technology. We design, mill, and place your custom ceramic crown in a single appointment.</p>
                 </div>
              </div>
           </div>
           
           {/* Card 5 */}
           <div className="bg-brand-red rounded-3xl p-8 flex flex-col justify-center text-center items-center relative overflow-hidden group cursor-pointer shadow-lg shadow-brand-red/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-redHover to-brand-red"></div>
              <div className="z-10 relative">
                <Cpu size={48} className="mb-4 text-white/80 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-bold text-white">The Lab</h4>
                <p className="text-white/80 text-sm mt-2">See our onsite milling center</p>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Technology;
import React from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const stories = [
  {
    id: 1,
    text: "I flew in from Seattle just for this practice. The level of detail, from the lobby scent to the painless injection technology, is simply unmatched.",
    author: "Elena R.",
    treatment: "Full Mouth Restoration",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    text: "I was terrified of the dentist for years. Moses Lake Family Dentistry completely changed my perspective. The sedation options made my implant procedure feel like a 5-minute nap.",
    author: "Marcus T.",
    treatment: "Dental Implants",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    text: "The aesthetic results are flawless. They didn't just give me white teeth; they designed a smile that fits my face perfectly. I've never smiled this much in my life.",
    author: "Sarah J.",
    treatment: "Veneers",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    id: 4,
    text: "Professional, clean, and incredibly high-tech. Seeing my 3D scan on the big screen helped me understand exactly what was going on. Highly recommended.",
    author: "David L.",
    treatment: "Preventative Care",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Decorative Quote Mark */}
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform rotate-12">
            <Quote size={300} className="text-navy-900" />
        </div>

        <div className="flex justify-between items-end mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-navy-900">Patient Stories</h2>
            <div className="hidden md:flex gap-2">
                <p className="text-slate-400 text-sm italic mr-4">Swipe to explore</p>
            </div>
        </div>

        {/* Scroll Container */}
        <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory hide-scrollbar">
            {stories.map((story) => (
                <div key={story.id} className="min-w-[85vw] md:min-w-[600px] snap-center">
                    <div className="relative bg-slate-50 rounded-[3rem] p-10 md:p-16 shadow-lg border border-slate-100 h-full flex flex-col justify-between group hover:shadow-2xl transition-all duration-300">
                        <div>
                            <div className="flex gap-1 mb-8 text-brand-red">
                                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                            </div>
                            
                            <p className="font-serif text-xl md:text-3xl text-navy-900 leading-tight md:leading-snug mb-8">
                            "{story.text}"
                            </p>
                        </div>

                        <div className="flex items-center gap-4 mt-auto">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                                <img src={story.image} alt={story.author} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-navy-900 tracking-wide uppercase text-sm">{story.author}</h4>
                                <p className="text-slate-500 text-xs mt-1 bg-white px-2 py-1 rounded-full inline-block shadow-sm">{story.treatment}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            
            {/* CTA Card at end of scroll */}
             <div className="min-w-[85vw] md:min-w-[300px] snap-center flex items-center">
                <div className="bg-navy-900 rounded-[3rem] p-10 h-[400px] w-full flex flex-col justify-center items-center text-center text-white cursor-pointer hover:bg-brand-red transition-colors">
                    <h3 className="font-serif text-3xl mb-4">Your Story <br/> Starts Here</h3>
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        <ArrowRight size={24} />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
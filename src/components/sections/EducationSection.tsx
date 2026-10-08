'use client';

import { motion } from 'framer-motion';
import { BookOpen, MapPin, Calendar, Award } from 'lucide-react';

const educationData = [
  {
    id: 'btech',
    degree: 'B.Tech - Information Technology',
    institution: 'M. Kumarasamy College of Engineering',
    location: 'Karur, Tamil Nadu',
    duration: '2023 – 2027',
    score: 'CGPA: 8.12',
    color: 'from-cyan-400 to-blue-500',
    iconColor: 'text-cyan-400',
    glowColor: 'shadow-[0_0_15px_rgba(34,211,238,0.5)]',
    borderColor: 'border-cyan-400',
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary (HSC)',
    institution: 'Star Matriculation Higher Secondary School',
    location: 'Karur, Tamil Nadu',
    duration: '2021 – 2023',
    score: 'Percentage: 84.50%',
    color: 'from-purple-400 to-pink-500',
    iconColor: 'text-purple-400',
    glowColor: 'shadow-[0_0_15px_rgba(168,85,247,0.5)]',
    borderColor: 'border-purple-500',
  },
  {
    id: 'sslc',
    degree: 'Secondary School (SSLC)',
    institution: 'Star Matriculation Higher Secondary School',
    location: 'Karur, Tamil Nadu',
    duration: '2021',
    score: 'Percentage: 90.00%',
    color: 'from-pink-400 to-rose-500',
    iconColor: 'text-pink-400',
    glowColor: 'shadow-[0_0_15px_rgba(244,114,182,0.5)]',
    borderColor: 'border-pink-400',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative min-h-screen py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 uppercase tracking-wider">
            Academic <span className="text-cyan-400">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Energy Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2" />
          
          {/* Animated Energy Particle */}
          <motion.div
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="absolute left-8 md:left-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent -translate-x-1/2 blur-[2px] z-0"
          />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={item.id} className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full group">
                
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 top-8 md:top-1/2 w-4 h-4 rounded-full bg-black border-2 border-white/20 -translate-x-1/2 md:-translate-y-1/2 z-10 group-hover:scale-150 transition-transform duration-300">
                  <div className={`absolute inset-1 rounded-full bg-gradient-to-br ${item.color} ${item.glowColor} opacity-50 group-hover:opacity-100 animate-pulse`} />
                </div>

                {/* Left Side (Date & Score for desktop, hidden on mobile) */}
                <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'order-last text-left pl-12'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="inline-flex items-center gap-2 text-white/60 font-sans tracking-widest text-sm uppercase mb-2">
                      <Calendar size={14} className={item.iconColor} />
                      {item.duration}
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                      <Award size={14} className={item.iconColor} />
                      <span className="text-white font-bold text-sm tracking-wider">{item.score}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Right/Main Card */}
                <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:order-last md:pl-12' : 'md:pr-12'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className={`glass p-8 rounded-2xl border-l-2 ${item.borderColor} relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500`}
                  >
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <h3 className="text-2xl font-display font-bold text-white mb-2 leading-tight">
                      {item.degree}
                    </h3>
                    
                    <div className="flex flex-col gap-3 mt-4">
                      <div className="flex items-start gap-3">
                        <BookOpen size={18} className={`${item.iconColor} shrink-0 mt-1`} />
                        <span className="text-white/80 font-sans">{item.institution}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin size={18} className="text-white/40 shrink-0" />
                        <span className="text-white/50 font-sans text-sm">{item.location}</span>
                      </div>
                    </div>

                    {/* Mobile Only: Date & Score */}
                    <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3 md:hidden">
                      <div className="flex items-center gap-2 text-white/60 font-sans tracking-widest text-xs uppercase">
                        <Calendar size={14} className={item.iconColor} />
                        {item.duration}
                      </div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full w-fit">
                        <Award size={14} className={item.iconColor} />
                        <span className="text-white font-bold text-sm tracking-wider">{item.score}</span>
                      </div>
                    </div>

                  </motion.div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

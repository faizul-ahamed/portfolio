'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import HeroCanvas from '@/components/canvas/HeroCanvas';

export default function HeroSection() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <HeroCanvas />
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text & CTA */}
        <div className="flex flex-col items-start text-left order-2 lg:order-1">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white/70 font-sans text-xl md:text-2xl tracking-[0.2em] mb-2 uppercase"
          >
            Hello, I&apos;m
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 leading-tight mb-6 tracking-tighter"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
          >
            FAIZUL AHAMED<br />M F
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg text-white/60 font-sans max-w-xl mb-10 leading-relaxed"
          >
            Full-Stack Developer • Cloud Enthusiast • AI-focused Software Engineer. I build scalable, immersive, and high-performance digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col gap-6 w-full sm:w-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md w-fit">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-sans text-xs font-bold tracking-widest uppercase">
                Open to Work and Internship
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, 'projects')}
              className="group relative px-8 py-4 bg-white text-black font-bold font-sans uppercase tracking-wider overflow-hidden rounded flex items-center justify-center transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Explore Projects
              </span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="px-8 py-4 bg-transparent text-white border border-white/20 font-bold font-sans uppercase tracking-wider rounded flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              Get In Touch
            </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Holographic Photo Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="flex justify-center lg:justify-end order-1 lg:order-2 relative"
        >
          {/* Ambient glows */}
          <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
          
          {/* Orbiting particles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-white/5 border-dashed pointer-events-none z-0"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
          </motion.div>

          {/* Holographic Frame */}
          <div className="relative w-64 h-[340px] md:w-80 md:h-[420px] rounded-2xl glass-card overflow-hidden group z-10 transition-transform duration-700 hover:rotate-y-12 hover:rotate-x-12 perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Scanline effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(34,211,238,0.1)_50%,transparent_100%)] h-1/2 w-full animate-[scan_2s_ease-in-out_infinite]" />
            
            <div className="absolute inset-2 rounded-xl border border-white/10 flex items-center justify-center bg-black/40 backdrop-blur-sm overflow-hidden">
              <img 
                src="/profile.jpg" 
                alt="Faizul Ahamed M F"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div class="text-white/20 font-display text-4xl uppercase tracking-widest flex flex-col items-center"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal mb-4 text-cyan-400/50"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>USER_PROFILE</div>';
                }}
              />
            </div>

            {/* Corner brackets */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-purple-500/50" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-cyan-400/50" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-purple-500/50" />
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-white/30 text-xs uppercase tracking-widest mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="text-cyan-400" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}

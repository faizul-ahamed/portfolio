'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative min-h-screen py-32 overflow-hidden flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase tracking-wider">
            Career <span className="text-green-400">Trajectory</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Energy Beam Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400/50 via-cyan-500/50 to-transparent shadow-[0_0_15px_rgba(74,222,128,0.5)]" />

          {/* Experience Node */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative pl-24 pb-12"
          >
            {/* Glowing Node */}
            <div className="absolute left-[26px] top-2 w-6 h-6 rounded-full bg-black border-4 border-green-400 shadow-[0_0_20px_rgba(74,222,128,0.8)] z-10 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>

            <div className="glass-card p-8 rounded-2xl relative group overflow-hidden border border-white/5 hover:border-green-400/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-1">Software Development Intern</h3>
                  <p className="text-green-400 font-sans text-lg flex items-center gap-2">
                    <Briefcase size={18} /> Terzo Limited, Coimbatore
                  </p>
                </div>
                <div className="mt-2 md:mt-0 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-sans whitespace-nowrap">
                  2025 (25 Days)
                </div>
              </div>

              <ul className="space-y-3 relative z-10 text-white/70 font-sans list-none">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▹</span>
                  <span>Gained hands-on exposure to the full Software Development Life Cycle (SDLC) while working on enterprise-level projects.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▹</span>
                  <span>Developed Python-based backend scripts and optimized SQLite database schemas, improving query efficiency.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▹</span>
                  <span>Integrated frontend components with backend APIs following clean architecture and Agile methodologies.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Hackathon Node */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative pl-24 pb-12"
          >
            {/* Glowing Node */}
            <div className="absolute left-[26px] top-2 w-6 h-6 rounded-full bg-black border-4 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] z-10 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>

            <div className="glass-card p-8 rounded-2xl relative group overflow-hidden border border-white/5 hover:border-cyan-400/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-1">Competitive Hackathons</h3>
                  <p className="text-cyan-400 font-sans text-lg flex items-center gap-2">
                    <Briefcase size={18} /> Global & National Level
                  </p>
                </div>
                <div className="mt-2 md:mt-0 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-sans whitespace-nowrap">
                  2023 - 2024
                </div>
              </div>

              <ul className="space-y-3 relative z-10 text-white/70 font-sans list-none">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>Winner of a 6-Hour College Level Hackathon for developing a smart bus tracking solution.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>Participant in IEEE 24-Hour Global Hackathon, building an AI-powered health monitoring MVP.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>Gained experience in rapid prototyping, team collaboration, and working under extreme time constraints.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { MapPin, Terminal } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase tracking-wider">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Title */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 uppercase tracking-wider leading-tight">
                ABOUT<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  ME
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
            </motion.div>
          </div>
          
          {/* Right Column: Content & Stats */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-white/80 font-sans leading-relaxed text-lg mb-8 relative z-10">
                I am a final-year IT undergraduate with hands-on experience in full-stack development, cloud platforms (OCI, Firebase), and Python/Java-based backend systems. I am passionate about building scalable, real-world applications and constantly pushing the boundaries of what&apos;s possible with code. My core interests lie in mobile app development, cloud technologies, and building robust full-stack software architectures.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8 relative z-10">
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-cyan-400 font-sans text-sm flex items-center gap-2">
                  <MapPin size={14} /> Karur, India
                </span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-purple-400 font-sans text-sm flex items-center gap-2">
                  <Terminal size={14} /> Full-Stack Developer
                </span>
              </div>
              
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 hover:border-cyan-400 rounded-full text-white font-sans font-bold text-sm tracking-wider uppercase transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:-translate-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                Download Resume
              </a>
            </motion.div>

            {/* Statistic Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Projects', value: '5+', color: 'from-cyan-400 to-blue-500' },
                { label: 'Certifications', value: '10+', color: 'from-purple-400 to-pink-500' },
                { label: 'Hackathons', value: '3+', color: 'from-green-400 to-emerald-500' },
                { label: 'Internship', value: '1', color: 'from-orange-400 to-red-500' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                  className="glass-card p-6 rounded-2xl border border-white/5 text-center group hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
                >
                  <h3 className={`text-3xl md:text-4xl font-display font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                    {stat.value}
                  </h3>
                  <p className="text-white/50 font-sans text-xs uppercase tracking-widest group-hover:text-white/80 transition-colors">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

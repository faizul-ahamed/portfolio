'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Oracle Certified Professional',
    subtitle: 'OCI Data Science Professional',
    issuer: 'Oracle',
    date: '2024',
    color: 'from-orange-500 to-red-500',
    iconColor: 'text-orange-400',
  },
  {
    title: 'Oracle Cloud Infrastructure',
    subtitle: 'AI Foundations Associate',
    issuer: 'Oracle',
    date: '2024',
    color: 'from-red-500 to-rose-500',
    iconColor: 'text-red-400',
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative min-h-screen py-32 overflow-hidden flex flex-col justify-center">
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase tracking-wider">
            Verified <span className="text-orange-500">Credentials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50, scale: 0.95, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative h-[300px] perspective-1000"
            >
              {/* Holographic Card Wrapper */}
              <div className="w-full h-full glass-card rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 border border-white/10 group-hover:border-orange-500/50">
                
                {/* Background Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] h-[200%] w-full animate-[scan_3s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center ${cert.iconColor} group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_currentColor]`}>
                        <Award size={24} />
                      </div>
                      <span className="text-white/40 font-sans text-sm tracking-widest font-bold">
                        {cert.date}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-orange-200 transition-all">
                      {cert.title}
                    </h3>
                    <h4 className="text-lg font-display text-white/70 mb-2">
                      {cert.subtitle}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between mt-auto border-t border-white/10 pt-4">
                    <span className="text-white/50 font-sans text-sm uppercase tracking-widest">
                      Issuer: {cert.issuer}
                    </span>
                    <button className="text-white/30 hover:text-orange-400 transition-colors flex items-center gap-2 text-sm font-sans uppercase tracking-widest">
                      Verify <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

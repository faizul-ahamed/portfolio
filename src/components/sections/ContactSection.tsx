'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Rocket } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate send
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative min-h-screen py-32 overflow-hidden flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase tracking-wider">
            Establish <span className="text-cyan-400">Connection</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">Comm Link Active</h3>
            <p className="text-white/60 font-sans mb-10">
              Ready to collaborate on the next big project? Initialize a connection sequence below or reach out through secure channels.
            </p>

            <div className="space-y-6">
              <a href="mailto:faizulahamed003@gmail.com" className="flex items-center gap-4 text-white/80 hover:text-cyan-400 transition-colors group">
                <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                  <Mail size={20} />
                </div>
                <span className="font-sans">faizulahamed003@gmail.com</span>
              </a>
              
              <a href="tel:+917200202189" className="flex items-center gap-4 text-white/80 hover:text-cyan-400 transition-colors group">
                <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                  <Phone size={20} />
                </div>
                <span className="font-sans">+91 7200202189</span>
              </a>

              <div className="flex gap-4 pt-4">
                <a href="https://linkedin.com/in/faizul-ahamed-m-f" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white/80 hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:shadow-[0_0_15px_rgba(0,119,181,0.3)] transition-all">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://github.com/FaizulAhamed" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all">
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Terminal Form */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 relative group">
                <label className="text-xs font-display uppercase tracking-widest text-cyan-400 block transition-colors">Identification</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white font-sans focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2 relative group">
                <label className="text-xs font-display uppercase tracking-widest text-cyan-400 block transition-colors">Signal Origin</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white font-sans focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2 relative group">
                <label className="text-xs font-display uppercase tracking-widest text-cyan-400 block transition-colors">Transmission Data</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white font-sans focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <button 
                type="submit" 
                disabled={status !== 'idle'}
                className="w-full py-4 rounded bg-cyan-500/10 border border-cyan-400/50 text-cyan-400 font-display font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-3 group/btn relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'idle' && (
                  <>
                    <span className="relative z-10 transition-colors duration-300">Transmit Signal</span>
                    <Rocket size={18} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <span className="relative z-10">Initializing Launch...</span>
                    <motion.div animate={{ y: -50, opacity: 0 }} transition={{ duration: 1 }}>
                      <Rocket size={18} className="relative z-10" />
                    </motion.div>
                  </>
                )}
                {status === 'sent' && <span>Transmission Successful</span>}
                
                {/* Button background fill on hover */}
                <div className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out z-0" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

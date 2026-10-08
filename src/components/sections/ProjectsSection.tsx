'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Noura',
    description: 'Intelligent Health Monitoring System. Android app using Machine Learning for predictive health risk analysis with 95%+ accuracy.',
    tech: ['Flutter', 'Python', 'ML', 'Firebase'],
    type: 'AI Health App',
  },
  {
    title: 'Payanam',
    description: 'Smart Campus Bus Tracking System. Live transit solution providing real-time location, ETA, and road navigation.',
    tech: ['Flutter', 'Firebase', 'Google Maps API'],
    type: 'Mobile App',
  },
  {
    title: 'CyberShield X',
    description: 'AI-Powered Cyber Crime Intelligence & Security Management System. Advanced analytics for threat detection.',
    tech: ['React', 'Node.js', 'Python', 'Machine Learning'],
    type: 'Security Platform',
  },
  {
    title: '4 AI Tools Investigation',
    description: 'Investigation & Performance of Four AI Tools. Comparative analysis of modern LLMs including ChatGPT, Grok, Llama, and DeepSeek.',
    tech: ['AI/ML', 'Data Analysis', 'Research'],
    type: 'Research Project',
  },
  {
    title: 'Inventory & Payroll',
    description: 'Inventory Monitoring & Payroll Management Software. Full-stack enterprise solution for managing stock and employee compensation.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'React'],
    type: 'Enterprise Software',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase tracking-wider">
            Featured <span className="text-pink-500">Missions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.95, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative h-[450px] perspective-1000"
            >
              {/* 3D Tilt Card Wrapper */}
              <div className="w-full h-full glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 border border-white/10 group-hover:border-pink-500/50">
                
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/0 via-pink-500/5 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-pink-400 font-sans text-xs uppercase tracking-widest font-bold">
                      {project.type}
                    </span>
                    <div className="flex gap-3 text-white/50">
                      <a href="#" className="hover:text-white transition-colors"><FaGithub size={20} /></a>
                      <a href="#" className="hover:text-cyan-400 transition-colors"><ExternalLink size={20} /></a>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-pink-300 transition-all">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/60 font-sans text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10 mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 text-xs font-sans text-white/70 bg-white/5 rounded border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {/* Live Demo Button */}
                  <a href="#" className="w-full py-3 rounded bg-white/5 border border-white/10 text-white font-sans text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 group/btn hover:bg-white hover:text-black transition-all">
                    <Play size={16} className="group-hover/btn:fill-black" />
                    Launch Demo
                  </a>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

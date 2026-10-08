'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal, Code2 } from 'lucide-react';
import SkillsCanvas from '@/components/canvas/SkillsCanvas';

export type SkillData = {
  id: string;
  name: string;
  level: number;
  color: string;
  radius: number;
  speed: number;
  angleOffset: number;
  description: string;
  projects: string[];
  type: string;
};

export const skillsData: SkillData[] = [
  { id: 'react', name: 'React/Next.js', level: 90, color: '#61dafb', radius: 4, speed: 0.2, angleOffset: 0, description: 'Modern web platforms, 3D portfolios, and immersive UIs.', projects: ['Aether AI', 'Portfolio'], type: 'Frontend / Framework' },
  { id: 'flutter', name: 'Flutter', level: 85, color: '#02569b', radius: 4.5, speed: 0.18, angleOffset: Math.PI / 4, description: 'Cross-platform mobile dev with high-performance UI.', projects: ['Payanam', 'Noura'], type: 'Mobile Framework' },
  { id: 'java', name: 'Java', level: 85, color: '#f89820', radius: 5, speed: 0.15, angleOffset: Math.PI / 2, description: 'Core OOP, Backend systems, and enterprise logic.', projects: ['General Backend'], type: 'Language' },
  { id: 'spring', name: 'Spring Boot', level: 80, color: '#6db33f', radius: 5.5, speed: 0.12, angleOffset: Math.PI * 0.75, description: 'Enterprise backend, REST APIs, and microservices.', projects: ['Enterprise Scale'], type: 'Backend Framework' },
  { id: 'firebase', name: 'Firebase', level: 85, color: '#ffca28', radius: 6, speed: 0.1, angleOffset: Math.PI, description: 'Real-time databases, authentication, and cloud functions.', projects: ['Payanam', 'Noura'], type: 'Cloud / DB' },
  { id: 'python', name: 'Python', level: 80, color: '#3776ab', radius: 6.5, speed: 0.08, angleOffset: Math.PI * 1.25, description: 'Backend scripts at Terzo, ML modeling for predictive analysis.', projects: ['Noura', 'Terzo Scripts'], type: 'Language / Scripts' },
  { id: 'mysql', name: 'MySQL', level: 85, color: '#00758f', radius: 7, speed: 0.06, angleOffset: Math.PI * 1.5, description: 'Relational database design, query optimization.', projects: ['Inventory Monitoring'], type: 'Database' },
  { id: 'docker', name: 'Docker', level: 75, color: '#2496ed', radius: 7.5, speed: 0.05, angleOffset: Math.PI * 1.75, description: 'Containerization and deployment pipelines.', projects: ['DevOps'], type: 'Tool / DevOps' },
  { id: 'git', name: 'Git', level: 90, color: '#f14e32', radius: 8, speed: 0.04, angleOffset: Math.PI * 0.3, description: 'Version control, branching, and collaboration.', projects: ['All Projects'], type: 'Tool' },
  { id: 'ml', name: 'Machine Learning', level: 80, color: '#ff6f00', radius: 8.5, speed: 0.03, angleOffset: Math.PI * 0.8, description: 'Predictive modeling, data analysis, and AI tool investigation.', projects: ['4 AI Tools', 'CyberShield X'], type: 'Specialization' },
  { id: 'cloud', name: 'Oracle Cloud', level: 85, color: '#f80000', radius: 9, speed: 0.02, angleOffset: Math.PI * 1.6, description: 'Cloud infrastructure and AI foundations.', projects: ['OCI Data Science'], type: 'Cloud Platform' },
];

export default function SkillsSection() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const activeSkill = skillsData.find(s => s.id === selectedNode);

  return (
    <section id="skills" className="relative min-h-screen overflow-hidden">
      
      {/* 3D Canvas Background with smooth edge fading */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}
      >
        <SkillsCanvas selectedNode={selectedNode} onSelectNode={setSelectedNode} />
      </div>

      {/* Floating UI Overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none p-6 md:p-12 flex flex-col justify-between">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mt-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-wider drop-shadow-lg">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Galaxy</span>
          </h2>
          <p className="text-white/60 font-sans text-sm tracking-widest uppercase">Select a node to inspect</p>
        </motion.div>



        {/* Tech Module Detail Panel */}
        <AnimatePresence>
          {selectedNode && selectedNode !== 'core' && activeSkill && (
            <motion.div
              initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
              className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 w-80 md:w-96 bg-white/95 backdrop-blur-md p-6 rounded-2xl pointer-events-auto border border-white/20 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: `${activeSkill.color}20`, border: `1px solid ${activeSkill.color}50` }}
                >
                  <Code2 color={activeSkill.color} />
                </div>
                <button onClick={() => setSelectedNode(null)} className="text-slate-400 hover:text-slate-700 transition-colors">
                  <X size={20} />
                </button>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-1">{activeSkill.name}</h3>
              <p className="text-slate-500 font-sans text-xs uppercase tracking-widest mb-6">{activeSkill.type}</p>
              
              <div className="mb-6">
                <div className="flex justify-between text-slate-700 font-sans text-sm mb-2">
                  <span>Proficiency</span>
                  <span>{activeSkill.level}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${activeSkill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: activeSkill.color, boxShadow: `0 0 10px ${activeSkill.color}` }}
                  />
                </div>
              </div>

              <p className="text-slate-600 font-sans text-sm leading-relaxed mb-6">
                {activeSkill.description}
              </p>

              <div>
                <h4 className="text-slate-400 font-sans text-xs uppercase tracking-widest mb-3">Related Projects</h4>
                <div className="flex flex-wrap gap-2">
                  {activeSkill.projects.map(p => (
                    <span 
                      key={p} 
                      className="px-3 py-1 rounded font-sans text-xs font-medium"
                      style={{ backgroundColor: `${activeSkill.color}20`, color: activeSkill.color, border: `1px solid ${activeSkill.color}40` }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* AI Core Dashboard Panel */}
        <AnimatePresence>
          {selectedNode === 'core' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl h-[80vh] md:h-[70vh] bg-white/95 backdrop-blur-md rounded-3xl pointer-events-auto border border-cyan-400/30 p-6 md:p-8 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6 shrink-0">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 flex items-center gap-3">
                  <Terminal className="text-cyan-600" /> TECH CONSTELLATION
                </h3>
                <button onClick={() => setSelectedNode(null)} className="text-slate-400 hover:text-slate-700 transition-colors bg-slate-100 hover:bg-slate-200 p-2 rounded-full">
                  <X size={20} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto pr-4 pb-4 modal-scrollbar">
                {skillsData.map((skill) => (
                  <div key={skill.id} className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col gap-2 hover:border-cyan-300 hover:shadow-md transition-all group">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${skill.color}20`, border: `1px solid ${skill.color}50` }}>
                        <Code2 size={16} color={skill.color} />
                      </div>
                      <h4 className="text-slate-800 font-bold">{skill.name}</h4>
                    </div>
                    <p className="text-slate-500 text-xs line-clamp-3 mb-2">{skill.description}</p>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-auto">
                      <div 
                        className="h-full rounded-full opacity-70 group-hover:opacity-100 transition-opacity"
                        style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

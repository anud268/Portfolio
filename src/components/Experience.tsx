import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Laptop, Code } from 'lucide-react';
import { EXPERIENCES } from '../data/constants';

const icons: Record<string, React.ReactNode> = {
  "code": <Code size={24} className="text-red-500" />,
  "laptop": <Laptop size={24} className="text-red-600" />,
  "graduation-cap": <GraduationCap size={24} className="text-red-700" />
};

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-neutral-950/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full glass mb-6 border border-red-500/30 text-red-500 text-sm font-semibold tracking-wider uppercase shadow-[0_0_10px_rgba(255,0,0,0.1)]"
          >
            My Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-100"
          >
            Experience & <span className="text-red-500 drop-shadow-[0_0_15px_rgba(255,0,0,0.4)]">Education</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-800 hidden md:block" />

          <div className="space-y-12 relative">
            {EXPERIENCES.map((exp, index) => {
              const Icon = icons[exp.icon] || <Briefcase size={24} className="text-slate-400" />;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Content */}
                  <div className={`flex-1 w-full glass p-8 rounded-2xl border border-neutral-800 hover:border-red-600/50 hover:shadow-[0_0_20px_rgba(255,0,0,0.1)] transition-all`}>
                    <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                      <h3 className="text-xl font-bold text-slate-100">{exp.title}</h3>
                      <span className="px-3 py-1 bg-neutral-900 text-red-400 text-xs font-semibold rounded-full border border-neutral-700">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-red-500 font-medium mb-4">{exp.company}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>

                  {/* Icon Node */}
                  <div className="relative z-10 w-16 h-16 bg-neutral-950 rounded-full border-4 border-neutral-800 flex items-center justify-center transform hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,0,0,0.2)] hover:shadow-[0_0_25px_rgba(255,0,0,0.4)] hover:border-red-900 mx-auto md:mx-0 shrink-0">
                    {Icon}
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

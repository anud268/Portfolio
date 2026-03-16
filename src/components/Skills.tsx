import { motion } from 'framer-motion';
import { SKILLS } from '../data/constants';
import { SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTypescript, SiGit } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const skillIcons: Record<string, React.ReactNode> = {
  js: <SiJavascript className="text-4xl text-[#F7DF1E] drop-shadow-md" />,
  react: <SiReact className="text-4xl text-[#61DAFB] drop-shadow-md" />,
  node: <SiNodedotjs className="text-4xl text-[#339933] drop-shadow-md" />,
  express: <SiExpress className="text-4xl text-slate-100 drop-shadow-md" />,
  mongo: <SiMongodb className="text-4xl text-[#47A248] drop-shadow-md" />,
  ts: <SiTypescript className="text-4xl text-[#3178C6] drop-shadow-md" />,
  api: <TbApi className="text-4xl text-red-500 drop-shadow-md" />,
  git: <SiGit className="text-4xl text-[#F05032] drop-shadow-md" />
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-neutral-950/50">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full glass mb-6 border border-red-500/30 text-red-500 text-sm font-semibold tracking-wider uppercase shadow-[0_0_10px_rgba(255,0,0,0.1)]"
          >
            My Tech Stack
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-100"
          >
            <span className="text-red-500 drop-shadow-[0_0_15px_rgba(255,0,0,0.4)]">Technologies</span> I Work With
          </motion.h2>
        </div>

        <div className="relative w-full max-w-6xl mx-auto overflow-hidden pause-animation py-4">
          {/* Gradient Edges for seamless fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

          {/* Top Marquee Track - Slides Left */}
          <div className="flex animate-marquee-left w-max gap-6 mb-6">
            {[...SKILLS, ...SKILLS].map((skill, index) => (
              <div
                key={`top-${skill.name}-${index}`}
                className="w-[280px] shrink-0  p-6 rounded-2xl flex flex-col items-center justify-center text-center group border border-neutral-800 hover:border-red-600/50 hover:shadow-[0_0_25px_rgba(255,0,0,0.15)] transition-all cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl bg-neutral-900 flex items-center justify-center mb-4 border border-neutral-800 shadow-inner group-hover:scale-110 group-hover:bg-neutral-800 group-hover:border-red-500/30 transition-all duration-300">
                  {skillIcons[skill.icon] || (
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700 uppercase drop-shadow-md">
                      {skill.name.substring(0, 2)}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-medium text-slate-200 mb-2">{skill.name}</h3>
                
                {/* Progress Bar */}
                {/* <div className="w-full bg-neutral-900 rounded-full h-1.5 mt-2 overflow-hidden border border-neutral-800">
                  <div
                    style={{ width: `${skill.level}%` }}
                    className="bg-gradient-to-r from-red-600 to-red-800 h-1.5 rounded-full shadow-[0_0_10px_rgba(255,0,0,0.5)]"
                  />
                </div> */}
              </div>
            ))}
          </div>

          {/* Bottom Marquee Track - Slides Right */}
          <div className="flex animate-marquee-right w-max gap-6">
            {[...[...SKILLS].reverse(), ...[...SKILLS].reverse()].map((skill, index) => (
              <div
                key={`bottom-${skill.name}-${index}`}
                className="w-[280px] shrink-0  p-6 rounded-2xl flex flex-col items-center justify-center text-center group border border-neutral-800 hover:border-red-600/50 hover:shadow-[0_0_25px_rgba(255,0,0,0.15)] transition-all cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl bg-neutral-900 flex items-center justify-center mb-4 border border-neutral-800 shadow-inner group-hover:scale-110 group-hover:bg-neutral-800 group-hover:border-red-500/30 transition-all duration-300">
                  {skillIcons[skill.icon] || (
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700 uppercase drop-shadow-md">
                      {skill.name.substring(0, 2)}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-medium text-slate-200 mb-2">{skill.name}</h3>
                
                {/* Progress Bar */}
                {/* <div className="w-full bg-neutral-900 rounded-full h-1.5 mt-2 overflow-hidden border border-neutral-800">
                  <div
                    style={{ width: `${skill.level}%` }}
                    className="bg-gradient-to-r from-red-600 to-red-800 h-1.5 rounded-full shadow-[0_0_10px_rgba(255,0,0,0.5)]"
                  />
                </div> */}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

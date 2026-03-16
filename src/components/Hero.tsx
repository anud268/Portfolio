import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
// @ts-ignore - CustomAnimation is a JSX file without type declarations
import HexagonBackground from './CustomAnimation';

const ScrollLetter = ({ char, index, scrollY }: { char: string, index: number, scrollY: MotionValue<number> }) => {
  const start = index * 20;
  const end = start + 30; // slightly smoother fade edge
  const opacity = useTransform(scrollY, [start, end], [0, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
};

export const Hero = () => {
  const { scrollY } = useScroll();
  const text = "MERN Stack Developer";
  const characters = text.split("");

  // Move the top line ("Hi, I'm Anudas R") up slightly as you scroll down
  const topTextY = useTransform(scrollY, [0, 1000], [80, -30]);

  return (
    <section id="home" className="relative min-h-screen w-full bg-neutral-950 flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Gradients & WebGL Water */}
      <div className="absolute inset-0 z-0">
        {/* <WaterInteractionWebGL /> */}
        <div className="absolute inset-0 pointer-events-auto">
          <HexagonBackground />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 pointer-events-none">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full glass mb-6 shadow-sm border border-slate-700/50 pointer-events-auto"
            > */}
              {/* <span className="text-sm font-medium text-blue-400">Welcome to my portfolio</span> */}
            {/* </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 pointer-events-auto flex flex-col items-center"
            >
              <motion.div style={{ y: topTextY }}>
                Hi, I'm Anudas R
              </motion.div>
              
              <div className="h-[1.2em] mt-2">
                <span className="text-red-600 inline-block drop-shadow-[0_0_15px_rgba(255,0,0,0.4)] animate-pulse">
                  {characters.map((char, i) => (
                    <ScrollLetter key={i} char={char} index={i} scrollY={scrollY} />
                  ))}
                </span>
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl pointer-events-auto"
            >
              I build scalable, modern, and highly interactive web applications.
              Passionate about crafting exceptional user experiences from the front-end to the back-end.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 pointer-events-auto"
            >
              <a
                href="#projects"
                className="px-8 py-4 rounded-xl  hover:bg-neutral-950 text-white font-semibold transition-all shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:shadow-red-700 flex items-center gap-2 group w-full sm:w-auto justify-center"
              >
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
              className="px-8 py-4 rounded-xl text-white hover:shadow-red-700 font-semibold transition-all border border-red-700/50 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-16 flex items-center gap-6 pointer-events-auto"
            >
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white transition-colors p-3 rounded-full hover:bg-red-600/50">
                <Github size={24} />
              </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white transition-colors p-3 rounded-full hover:bg-red-600/50">
                <Linkedin size={24} />
              </a>
              <a href="mailto:anudasr0@gmail.com" className="text-white transition-colors p-3 rounded-full hover:bg-red-600/50">
                <Mail size={24} />
              </a>
            </motion.div>

            {/* Scroll down indicator */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block pointer-events-auto"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-8 h-12 border-2 border-slate-600 rounded-full flex justify-center p-2"
              >
                <div className="w-1.5 h-3 bg-blue-500 rounded-full opacity-80" />
              </motion.div>
            </motion.div> */}

          </div>
        </div>
    </section>
  );
};

import { motion } from 'framer-motion';
import { Target, Server, Database, Code2 } from 'lucide-react';

const CARDS = [
  {
    icon: <Target className="text-red-500 mb-4" size={32} />,
    title: 'Frontend Development',
    description: 'Crafting pixel-perfect, highly responsive interfaces using React, TypeScript, and modern CSS frameworks like Tailwind.'
  },
  {
    icon: <Server className="text-red-600 mb-4" size={32} />,
    title: 'Backend Architecture',
    description: 'Designing robust API endpoints, authentication workflows, and scalable architectures with Node.js and Express.'
  },
  {
    icon: <Database className="text-red-400 mb-4" size={32} />,
    title: 'Database Management',
    description: 'Structuring and optimizing data storage solutions using NoSQL databases like MongoDB.'
  },
  {
    icon: <Code2 className="text-red-700 mb-4" size={32} />,
    title: 'Clean Code',
    description: 'Maintaining reusable, scalable, and tested codebases following industry best practices and patterns.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center md:text-left mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full glass mb-6 border border-red-500/30 text-red-500 text-sm font-semibold tracking-wider uppercase shadow-[0_0_10px_rgba(255,0,0,0.1)]"
          >
            About Me
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-slate-100"
          >
            Building Scalable Web <br className="hidden md:block" />
            <span className="text-red-600 drop-shadow-[0_0_15px_rgba(255,0,0,0.4)]">Applications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-3xl text-lg md:text-xl leading-relaxed"
          >
            I am a passionate MERN Stack Developer with a strong foundation in building dynamic and responsive web applications. I love taking complex problems and turning them into beautiful, intuitive interfaces. My focus is on writing clean, scalable code and continuously learning new technologies to improve user experiences.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CARDS.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className=" p-8 rounded-2xl hover:bg-neutral-900/80 transition-all border border-neutral-800 hover:border-red-600/50 hover:shadow-[0_0_20px_rgba(255,0,0,0.15)] group"
            >
              <div className="group-hover:scale-110 transition-transform duration-300 origin-left">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-200">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

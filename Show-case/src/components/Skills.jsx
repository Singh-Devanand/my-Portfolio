import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../assets/assets.js';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="relative py-20 bg-transparent overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          My <span className="text-purple">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
        >
          Technologies I work with to bring ideas to life
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-dark-300 rounded-2xl p-6 cursor-pointer border border-transparent hover:border-purple/30 hover:shadow-lg hover:shadow-purple/10 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple/10 rounded-xl mr-4 group-hover:bg-purple/20 transition-colors duration-300">
                  <skill.icon className="w-8 h-8 text-purple group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>

              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-dark-400 rounded-full text-sm text-gray-300 hover:bg-purple/20 hover:text-purple transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;

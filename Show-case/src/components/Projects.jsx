import React from 'react'
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../assets/assets.js';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="projects"
      className="relative py-20 bg-dark-200/40 backdrop-blur-[2px] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-pink/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          My <span className="text-purple">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
        >
          A selection of my recent work
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: false }}
              className="h-full flex flex-col"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects

import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, tech = [], code, demo }) => {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group bg-dark-300 rounded-2xl overflow-hidden cursor-pointer border border-transparent hover:border-purple/30 hover:shadow-xl hover:shadow-purple/10 transition-colors duration-300 flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative overflow-hidden shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover overlay with links */}
        <div className="absolute inset-0 bg-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {code && (
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-dark-100/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-purple transition-all duration-300 hover:scale-110"
            >
              <FaGithub size={20} />
            </a>
          )}
          {demo && demo !== '#' && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-dark-100/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-purple transition-all duration-300 hover:scale-110"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-3 group-hover:text-purple transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-dark-400 rounded-full text-xs text-gray-300 hover:bg-purple/20 hover:text-purple transition-colors duration-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-2 mt-auto">
          <a
            href={code || '#'}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center px-4 py-2 bg-purple font-medium rounded-lg hover:shadow-lg hover:shadow-purple/30 transition-all duration-300 hover:scale-[1.02]"
          >
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
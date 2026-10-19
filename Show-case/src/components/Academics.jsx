import React from 'react'
import { motion } from 'framer-motion';
import { workData } from '../assets/assets.js';

const Academics = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="academics"
      className="relative py-20 bg-transparent overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Academic <span className="text-purple">Journey</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
        >
          My Academic journey so far
        </motion.p>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {workData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false }}
                className="relative pl-12
                  before:content-[''] before:absolute before:left-0
                  before:top-0 before:w-0.5 before:h-full
                  before:bg-gradient-to-b before:from-purple before:to-purple/20
                  cursor-pointer group"
              >
                {/* Timeline dot with pulse */}
                <div className="absolute -left-2 top-0 w-6 h-6 rounded-full bg-purple shadow-lg shadow-purple/30 group-hover:shadow-purple/60 transition-shadow duration-300">
                  <div className="absolute inset-0 rounded-full bg-purple animate-ping opacity-20" />
                </div>

                {/* Box */}
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className="bg-dark-300 rounded-2xl p-6 border border-transparent group-hover:border-purple/30 group-hover:shadow-lg group-hover:shadow-purple/5 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-purple transition-colors duration-300">{data.role}</h3>
                    <span className="px-3 py-1 bg-purple/20 text-purple rounded-full text-xs md:text-sm font-medium">
                      {data.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2 font-medium">{data.company}</p>
                  <p className="text-gray-500 leading-relaxed">{data.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Academics
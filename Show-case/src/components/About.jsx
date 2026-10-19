import React from 'react';
import { motion } from 'framer-motion';
import { assets, aboutInfo } from '../assets/assets.js';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="about"
      className="relative py-20 bg-dark-200/40 backdrop-blur-[2px] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          About <span className="text-purple">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
        >
          Get to know more about my background and passion
        </motion.p>

        {/* Image + My Journey */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple to-pink rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition duration-500" />
              <img
                className="relative w-full h-full object-cover rounded-2xl border border-dark-400/50"
                src={assets.profileImg}
                alt="Profile"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">
                My <span className="text-purple">Journey</span>
              </h3>

          <p className="text-gray-300 mb-6 leading-relaxed">
  I'm an Information Technology undergraduate at KIET Group of
  Institutions with a strong interest in full-stack development
  and problem-solving. I build web applications using React.js,
  Node.js, Express.js, and MongoDB. My projects include an
  AI-powered interview preparation platform, a full-stack car
  rental website, and a blog platform with user authentication.
</p>

<p className="text-gray-300 mb-8 leading-relaxed">
  Alongside development, I practice Data Structures and
  Algorithms in Java and have solved 350+ coding problems
  across LeetCode and GeeksforGeeks. I'm continuously improving
  my technical skills and looking for opportunities to contribute
  to real-world software development projects.
</p>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="group bg-dark-300 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-purple/30 hover:shadow-lg hover:shadow-purple/5"
                  >
                    <div className="text-purple text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <data.icon />
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                      {data.title}
                    </h3>

                    <p className="text-gray-400">
                      {data.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

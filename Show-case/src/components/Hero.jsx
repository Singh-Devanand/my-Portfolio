import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets.js'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 bg-transparent overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left side content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-purple font-medium text-lg mb-2 tracking-wider">👋 Hello, I'm</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="bg-linear-to-r from-white via-purple-200 to-purple bg-clip-text text-transparent">Devanand Singh</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-4xl font-semibold mb-6 text-gray-300"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'MERN Stack Developer', 2000,
                'Java & DSA Enthusiast', 2000,
                'Problem Solver', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-purple"
            />
          </motion.div>

         ```jsx
<motion.p
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.8 }}
  className="text-lg text-gray-400 mb-8 leading-relaxed"
>
  I build full-stack web applications using React.js, Node.js,
  Express.js, and MongoDB. With a strong foundation in Java
  and Data Structures & Algorithms, I enjoy solving problems
  and developing practical solutions, from AI-powered interview
  preparation tools to interactive web applications.
</motion.p>
```

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex space-x-4"
          >
            <a
              href="#projects"
              className="group relative px-8 py-3 bg-purple rounded-lg font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple/40 hover:scale-105"
            >
              <span className="relative z-10">View Work</span>
              <div className="absolute inset-0 bg-linear-to-r from-purple to-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href="#contact"
              className="px-8 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple/20 hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right side image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 100 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Glow ring */}
            <div className="absolute -inset-4 rounded-full bg-linear-to-r from-purple via-pink to-blue opacity-30 blur-xl animate-spin" style={{ animationDuration: '8s' }} />
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple to-pink opacity-70" />
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
              className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 border-2 border-purple/30"
              src={assets.profileImg}
              alt="Profile"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-purple/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-purple rounded-full animate-bounce" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Hero
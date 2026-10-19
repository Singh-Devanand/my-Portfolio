import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaHeart, FaLinkedinIn, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-transparent border-t border-dark-400/30 py-10 overflow-hidden">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-purple/10 border border-purple/30 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition-all duration-300 mb-6 cursor-pointer"
          >
            <FaArrowUp />
          </motion.button>

          {/* Name */}
          <p className="text-xl font-bold mb-2">
            Devanand<span className="text-purple">Singh</span>
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-4">
            <a
              href="https://github.com/Singh-Devanand"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-purple transition-colors duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/devanand-singh-6576952a8/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-purple transition-colors duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>

          {/* Made with love */}
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <FaHeart className="text-red-500 animate-pulse" size={12} /> by Devanand Singh
          </p>

          <p className="text-gray-600 text-xs mt-2">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
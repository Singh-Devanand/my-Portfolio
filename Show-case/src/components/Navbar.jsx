import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaXmark } from 'react-icons/fa6'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Academics', href: '#academics' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed w-full z-50 py-4 px-8 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-100/95 backdrop-blur-md shadow-lg shadow-dark-100/50 border-b border-dark-400/50'
          : 'bg-dark-100/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.a
          href="/"
          className="text-3xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
        >
          Devanand
          <span className="text-purple">Singh</span>
          <div className="w-4 h-4 bg-purple rounded-full inline-block ml-1 animate-pulse" />
        </motion.a>

        <div className="hidden md:flex space-x-10">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative text-white/80 transition duration-300 hover:text-purple group"
            >
              <span>{link.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowMenu(!showMenu)}
            className="text-white text-2xl cursor-pointer"
          >
            {showMenu ? <FaXmark /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col bg-dark-300/95 backdrop-blur-md rounded-2xl p-6 text-center space-y-4 mt-4 border border-dark-400/50"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setShowMenu(false)}
                href={link.href}
                className="text-white/80 py-2 transition duration-300 hover:text-purple text-lg"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
'use client'

import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm"
    >
      <nav className="flex items-center justify-between max-w-[1400px] mx-auto">
        {/* Logo */}
        <div className="relative w-24 h-10">
          <img 
            src="/logo.png" 
            alt="VOSS" 
            className="w-full h-full object-contain brightness-0 invert drop-shadow-lg"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 text-sm">
          <li>
            <a 
              href="#products" 
              className="text-white/90 hover:text-white transition-colors tracking-wide drop-shadow-md"
            >
              Products
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="text-white/90 hover:text-white transition-colors tracking-wide drop-shadow-md"
            >
              About VOSS
            </a>
          </li>
          <li>
            <a 
              href="#sustainability" 
              className="text-white/90 hover:text-white transition-colors tracking-wide drop-shadow-md"
            >
              Sustainability
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              className="text-white/90 hover:text-white transition-colors tracking-wide drop-shadow-md"
            >
              Our Services
            </a>
          </li>
          <li>
            <a 
              href="#locations" 
              className="text-white/90 hover:text-white transition-colors tracking-wide drop-shadow-md"
            >
              Where to find us
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}

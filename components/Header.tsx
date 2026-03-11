'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6 bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm"
    >
      <nav className="flex items-center justify-between max-w-[1400px] mx-auto">
        {/* Logo */}
        <div className="relative w-16 h-8 md:w-24 md:h-10">
          <img 
            src="/logo.png" 
            alt="VOSS" 
            className="w-full h-full object-contain brightness-0 invert drop-shadow-lg"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6 drop-shadow-md" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden mt-4 bg-black/80 backdrop-blur-md rounded-lg p-6"
        >
          <ul className="space-y-4 text-sm">
            <li>
              <a 
                href="#products" 
                className="block text-white/90 hover:text-white transition-colors tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="block text-white/90 hover:text-white transition-colors tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                About VOSS
              </a>
            </li>
            <li>
              <a 
                href="#sustainability" 
                className="block text-white/90 hover:text-white transition-colors tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sustainability
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className="block text-white/90 hover:text-white transition-colors tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Services
              </a>
            </li>
            <li>
              <a 
                href="#locations" 
                className="block text-white/90 hover:text-white transition-colors tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Where to find us
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}

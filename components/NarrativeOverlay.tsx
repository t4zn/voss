
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface NarrativeOverlayProps {
  isVisible: boolean
  scrollContainerRef: React.RefObject<HTMLDivElement>
}

export default function NarrativeOverlay({ isVisible, scrollContainerRef }: NarrativeOverlayProps) {
  if (!isVisible) return null
  
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start start', 'end end']
  })

  // Section opacities with more granular control for storytelling
  const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.12, 0.18], [1, 1, 1, 0])
  const opacity2 = useTransform(scrollYProgress, [0.18, 0.22, 0.28, 0.32], [0, 1, 1, 0])
  const opacity3 = useTransform(scrollYProgress, [0.32, 0.36, 0.42, 0.46], [0, 1, 1, 0])
  const opacity4 = useTransform(scrollYProgress, [0.46, 0.50, 0.56, 0.60], [0, 1, 1, 0])
  const opacity5 = useTransform(scrollYProgress, [0.60, 0.64, 0.70, 0.74], [0, 1, 1, 0])
  const opacity6 = useTransform(scrollYProgress, [0.74, 0.78, 0.84, 0.88], [0, 1, 1, 0])
  const opacity7 = useTransform(scrollYProgress, [0.88, 0.92, 0.98, 1], [0, 1, 1, 0])

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {/* Section 1: Opening */}
      <motion.div
        style={{ opacity: opacity1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <motion.h2 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="font-serif text-5xl md:text-7xl text-white mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
        >
          Pure Origin
        </motion.h2>
        <p className="text-white text-lg md:text-xl tracking-wide max-w-md drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
          Deep within the ancient glaciers of Norway
        </p>
      </motion.div>

      {/* Section 2: The Journey Begins */}
      <motion.div
        style={{ opacity: opacity2 }}
        className="absolute inset-0 flex items-center px-8 md:px-16"
      >
        <div className="max-w-lg">
          <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
            A journey through ice
          </h2>
          <p className="text-white text-lg tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
            Filtered naturally through layers of rock and sand
          </p>
        </div>
      </motion.div>

      {/* Section 3: Untouched */}
      <motion.div
        style={{ opacity: opacity3 }}
        className="absolute inset-0 flex items-center justify-end px-8 md:px-16"
      >
        <div className="max-w-lg text-right">
          <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
            Untouched by time
          </h2>
          <p className="text-white text-lg tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
            Protected beneath the ice for centuries
          </p>
        </div>
      </motion.div>

      {/* Section 4: Purity */}
      <motion.div
        style={{ opacity: opacity4 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <h2 className="font-serif text-5xl md:text-7xl text-white mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
          Exceptional purity
        </h2>
        <p className="text-white text-lg md:text-xl tracking-wide max-w-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
          Low mineral content. Naturally balanced pH. Unfiltered. Unaltered.
        </p>
      </motion.div>

      {/* Section 5: Crystal Clarity */}
      <motion.div
        style={{ opacity: opacity5 }}
        className="absolute inset-0 flex items-center px-8 md:px-16"
      >
        <div className="max-w-lg">
          <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
            Crystal clarity
          </h2>
          <p className="text-white text-lg tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
            Forged in ice. Perfected by nature.
          </p>
        </div>
      </motion.div>

      {/* Section 6: The Reveal */}
      <motion.div
        style={{ opacity: opacity6 }}
        className="absolute inset-0 flex items-center justify-end px-8 md:px-16"
      >
        <div className="max-w-lg text-right">
          <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
            Captured at the source
          </h2>
          <p className="text-white text-lg tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
            From glacier to glass, preserving nature's perfection
          </p>
        </div>
      </motion.div>

      {/* Section 7: Hero Finale */}
      <motion.div
        style={{ opacity: opacity7 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <motion.h1 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="font-serif text-7xl md:text-9xl text-white mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
        >
          VOSS
        </motion.h1>
        <p className="text-white text-xl md:text-2xl tracking-widest mb-12 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
          Water, Revealed
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="pointer-events-auto px-10 py-4 border-2 border-white text-white tracking-widest text-sm hover:bg-white/10 transition-all drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
        >
          Discover the Source
        </motion.button>
      </motion.div>
    </div>
  )
}

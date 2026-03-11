'use client'

import { motion } from 'framer-motion'

interface PreloaderProps {
  progress: number
  isComplete: boolean
}

export default function Preloader({ progress, isComplete }: PreloaderProps) {
  if (isComplete) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-glacier"
    >
      <div className="text-center">
        <h1 className="font-serif text-6xl md:text-8xl text-white/90 mb-8">VOSS</h1>
        
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-white/70"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        <p className="text-white/70 text-sm tracking-widest">
          {Math.round(progress)}%
        </p>
      </div>
    </motion.div>
  )
}

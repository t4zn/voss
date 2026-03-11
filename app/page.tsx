'use client'

import { useState, useEffect, useRef } from 'react'
import Preloader from '@/components/Preloader'
import Header from '@/components/Header'
import GlacierScroll from '@/components/GlacierScroll'
import NarrativeOverlay from '@/components/NarrativeOverlay'
import ProductsSection from '@/components/ProductsSection'
import Footer from '@/components/Footer'

export default function Home() {
  const [loadProgress, setLoadProgress] = useState(0)
  const [isLoadComplete, setIsLoadComplete] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  
  const TOTAL_FRAMES = 182 // Updated frame count

  // Fallback: auto-complete after 3 seconds if images don't load
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isLoadComplete) {
        setIsLoadComplete(true)
      }
    }, 3000)
    
    return () => clearTimeout(timeout)
  }, [isLoadComplete])

  return (
    <main className="relative bg-glacier">
      <Preloader progress={loadProgress} isComplete={isLoadComplete} />
      
      {isLoadComplete && <Header />}
      
      <div ref={scrollContainerRef}>
        <GlacierScroll
          totalFrames={TOTAL_FRAMES}
          onLoadProgress={setLoadProgress}
          onLoadComplete={() => setIsLoadComplete(true)}
          isVisible={isLoadComplete}
        />
      </div>
      
      <NarrativeOverlay 
        isVisible={isLoadComplete} 
        scrollContainerRef={scrollContainerRef}
      />
      
      {isLoadComplete && (
        <>
          <ProductsSection />
          <Footer />
        </>
      )}
    </main>
  )
}

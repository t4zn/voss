'use client'

import { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import Lenis from 'lenis'

interface GlacierScrollProps {
  totalFrames: number
  onLoadProgress: (progress: number) => void
  onLoadComplete: () => void
  isVisible: boolean
  containerRef?: React.RefObject<HTMLDivElement>
}

export default function GlacierScroll({ 
  totalFrames, 
  onLoadProgress, 
  onLoadComplete,
  isVisible
}: GlacierScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [images, setImages] = useState<HTMLImageElement[]>([])
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const requestRef = useRef<number>()
  const currentFrameRef = useRef(0)
  const lenisRef = useRef<Lenis | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1])

  // Initialize Lenis
  useEffect(() => {
    if (!isVisible) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [isVisible])

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = []
    let loadedCount = 0

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image()
      const frameNumber = String(i).padStart(3, '0')
      img.src = `/voss-frame-${frameNumber}.jpg`
      
      img.onload = () => {
        loadedCount++
        const progress = (loadedCount / totalFrames) * 100
        onLoadProgress(progress)
        
        if (loadedCount === totalFrames) {
          setImagesLoaded(true)
          onLoadComplete()
        }
      }
      
      img.onerror = () => {
        loadedCount++
        const progress = (loadedCount / totalFrames) * 100
        onLoadProgress(progress)
        
        if (loadedCount === totalFrames) {
          setImagesLoaded(true)
          onLoadComplete()
        }
      }
      
      loadedImages.push(img)
    }

    setImages(loadedImages)
  }, [totalFrames, onLoadProgress, onLoadComplete])

  // Render canvas with RAF
  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const render = () => {
      const index = Math.round(currentFrameRef.current)
      const img = images[index]
      
      if (img && img.complete && img.naturalWidth > 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        // Fill entire canvas (cover mode)
        const imgAspect = img.width / img.height
        const canvasAspect = canvas.width / canvas.height
        
        let drawWidth, drawHeight, drawX, drawY
        
        if (imgAspect > canvasAspect) {
          // Image is wider - fit to height and crop sides
          drawHeight = canvas.height
          drawWidth = canvas.height * imgAspect
          drawX = (canvas.width - drawWidth) / 2
          drawY = 0
        } else {
          // Image is taller - fit to width and crop top/bottom
          drawWidth = canvas.width
          drawHeight = canvas.width / imgAspect
          drawX = 0
          drawY = (canvas.height - drawHeight) / 2
        }
        
        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight)
      }
      
      requestRef.current = requestAnimationFrame(render)
    }

    const unsubscribe = frameIndex.on('change', (latest) => {
      currentFrameRef.current = latest
    })

    render()

    return () => {
      unsubscribe()
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [imagesLoaded, images, frameIndex])

  if (!isVisible) return null

  return (
    <div ref={containerRef} className="relative h-[600vh]">
      <canvas
        ref={canvasRef}
        className="sticky top-0 left-0 w-full h-screen"
      />
    </div>
  )
}

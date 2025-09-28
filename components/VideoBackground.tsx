/**
 * VideoBackground Component
 *
 * A performant video background component with the following features:
 * - Automatic fallback to gradient background on mobile devices (saves bandwidth)
 * - Intersection Observer for performance (only plays when in view)
 * - Respects user preferences (reduced motion, slow connections)
 * - Error handling with graceful fallbacks
 * - Customizable overlays and opacity
 * - Smooth loading transitions
 * - Subtle zoom animation for visual interest
 */

'use client'

import { useEffect, useRef, useState } from 'react'

interface VideoBackgroundProps {
  src: string
  poster?: string
  className?: string
  opacity?: string
  overlay?: boolean
  children?: React.ReactNode
}

export default function VideoBackground({
  src,
  poster,
  className = '',
  opacity = 'opacity-100',
  overlay = true,
  children,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [shouldShowVideo, setShouldShowVideo] = useState(true)

  useEffect(() => {
    // Check if user prefers reduced motion, is on a slow connection, or on mobile
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const connection = (navigator as Navigator & { connection?: { effectiveType: string } })
      .connection
    const isSlowConnection =
      connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')

    if (prefersReducedMotion || isSlowConnection || isMobile) {
      setShouldShowVideo(false)
      return
    }

    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              setHasError(true)
            })
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleLoadedData = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
  }

  return (
    <div className={`mobile-video-fallback absolute inset-0 ${className}`}>
      {shouldShowVideo && !hasError && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={`video-zoom h-full w-full object-cover transition-opacity duration-1000 ${opacity}`}
          poster={poster}
          onLoadedData={handleLoadedData}
          onError={handleError}
          style={{ willChange: 'transform' }}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* Fallback ocean image background */}
      {(!shouldShowVideo || hasError) && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/static/images/ocean-min.jpeg)' }}
        />
      )}

      {/* Ocean image fallback for mobile with dark overlay */}
      {poster && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}

      {/* Overlay for better text readability */}
      {overlay && (
        <>
          <div className="absolute inset-0 bg-black/40 md:bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-pink-600/30" />
        </>
      )}

      {children}
    </div>
  )
}

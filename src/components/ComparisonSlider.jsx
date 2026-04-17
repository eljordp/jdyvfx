import { useRef, useState, useCallback, useEffect } from 'react'

export default function ComparisonSlider({ beforeSrc, afterSrc, beforeLabel = 'BEFORE', afterLabel = 'AFTER' }) {
  const containerRef = useRef(null)
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const updatePosition = useCallback((clientX) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(percent)
  }, [])

  const handleStart = useCallback((clientX) => {
    setIsDragging(true)
    updatePosition(clientX)
  }, [updatePosition])

  const handleMove = useCallback((clientX) => {
    if (!isDragging) return
    updatePosition(clientX)
  }, [isDragging, updatePosition])

  const handleEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    const onMouseMove = (e) => handleMove(e.clientX)
    const onTouchMove = (e) => handleMove(e.touches[0].clientX)
    const onEnd = () => handleEnd()

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('touchmove', onTouchMove)
      window.addEventListener('mouseup', onEnd)
      window.addEventListener('touchend', onEnd)
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('mouseup', onEnd)
      window.removeEventListener('touchend', onEnd)
    }
  }, [isDragging, handleMove, handleEnd])

  return (
    <div
      ref={containerRef}
      className="comparison-container aspect-[16/9]"
      onMouseDown={(e) => handleStart(e.clientX)}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
    >
      {/* Before (full width, behind) */}
      <img src={beforeSrc} alt="Before VFX" />

      {/* After (clipped from left) */}
      <div
        className="comparison-after"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={afterSrc} alt="After VFX" />
      </div>

      {/* Slider line */}
      <div className="comparison-slider" style={{ left: `${position}%` }} />

      {/* Labels */}
      <span className="comparison-label comparison-label-before">{beforeLabel}</span>
      <span className="comparison-label comparison-label-after">{afterLabel}</span>
    </div>
  )
}

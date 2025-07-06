"use client"

import { useRef, useEffect, useState } from "react"

interface FadeInOnScrollProps {
  children: React.ReactNode
  direction?: "left" | "right" | "bottom"
  threshold?: number
}

const FadeInOnScroll = ({ children, direction = "left", threshold = 0.2 }: FadeInOnScrollProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      {
        threshold: threshold,
      }
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [threshold])

  const directionClass = {
    left: "slide-in-from-left",
    right: "slide-in-from-right",
    bottom: "slide-in-from-bottom",
  }[direction]

  return (
    <div ref={ref} className={`${isVisible ? directionClass : "opacity-0"} transition-opacity duration-700`}>
      {children}
    </div>
  )
}

export default FadeInOnScroll

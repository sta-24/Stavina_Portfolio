import { useEffect, useRef, useState } from 'react'

export function useInViewport(options = {}) {
  const ref = useRef(null)
  const [isInViewport, setIsInViewport] = useState(false)
  const [hasBeenInViewport, setHasBeenInViewport] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInViewport(true)
        setHasBeenInViewport(true)
      } else {
        setIsInViewport(false)
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px',
    })

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [options])

  return {
    ref,
    isInViewport,
    hasBeenInViewport,
  }
}

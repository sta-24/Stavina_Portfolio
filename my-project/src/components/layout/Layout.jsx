import { useEffect } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { usePortfolio } from '../../hooks/usePortfolio'
import { useScrollPosition } from '../../hooks/useScrollPosition'

export function Layout({ children }) {
  const { updateScrollPosition, updateActiveSection } = usePortfolio()
  const scrollPosition = useScrollPosition()

  useEffect(() => {
    updateScrollPosition(scrollPosition)
  }, [scrollPosition, updateScrollPosition])

  // Auto-detect active section based on scroll position
  useEffect(() => {
    const sections = ['home', 'about', 'mission-control', 'skills', 'experience', 'projects', 'contact']
    
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          updateActiveSection(sectionId)
          break
        }
      }
    }
  }, [scrollPosition, updateActiveSection])

  return (
    <div className="layout">
      <Navbar />
      <main className="layout__main">
        {children}
      </main>
      <Footer />
    </div>
  )
}

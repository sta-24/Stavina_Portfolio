import './Navbar.css'
import { useEffect, useState } from 'react'
import { usePortfolio } from '../../hooks/usePortfolio'

export function Navbar() {
  const { activeSection, isMobileMenuOpen, toggleMobileMenu, updateActiveSection } = usePortfolio()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      updateActiveSection(sectionId)
      if (isMobileMenuOpen) {
        toggleMobileMenu()
      }
    }
  }

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'mission-control', label: 'Dashboard' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav>
      <div className="navbar__container">
        <div className="navbar__logo">SD</div>
        
        <button 
          className="navbar__menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className={`navbar__menu ${isMobileMenuOpen ? 'navbar__menu--open' : ''}`}>
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(section.id)
                }}
                className={activeSection === section.id ? 'navbar__link--active' : ''}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

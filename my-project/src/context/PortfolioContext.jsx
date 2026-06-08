import { createContext, useState, useCallback } from 'react'

export const PortfolioContext = createContext()

export function PortfolioProvider({ children }) {
  const [activeSection, setActiveSection] = useState('home')
  const [scrollPosition, setScrollPosition] = useState(0)
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
  })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [projectFilter, setProjectFilter] = useState({
    activeCategory: null,
    searchQuery: '',
  })
  const [contactForm, setContactForm] = useState({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  })

  const updateActiveSection = useCallback((sectionId) => {
    setActiveSection(sectionId)
  }, [])

  const updateScrollPosition = useCallback((y) => {
    setScrollPosition(y)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const setProjectFilterCategory = useCallback((category) => {
    setProjectFilter((prev) => ({
      ...prev,
      activeCategory: prev.activeCategory === category ? null : category,
    }))
  }, [])

  const setFormSubmitting = useCallback((isSubmitting) => {
    setContactForm((prev) => ({
      ...prev,
      isSubmitting,
    }))
  }, [])

  const setFormSuccess = useCallback((isSuccess) => {
    setContactForm((prev) => ({
      ...prev,
      isSuccess,
    }))
  }, [])

  const setFormError = useCallback((error) => {
    setContactForm((prev) => ({
      ...prev,
      error,
    }))
  }, [])

  const value = {
    activeSection,
    scrollPosition,
    viewport,
    isMobileMenuOpen,
    projectFilter,
    contactForm,
    updateActiveSection,
    updateScrollPosition,
    toggleMobileMenu,
    setProjectFilterCategory,
    setFormSubmitting,
    setFormSuccess,
    setFormError,
  }

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  )
}

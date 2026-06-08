import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { usePortfolio } from '../../../hooks/usePortfolio'
import './Hero.css'

// Typewriter effect hook
function useTypewriter(text, speed = 50, startDelay = 0) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let index = 0
    let timeout
    let delayTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.substring(0, index + 1))
          index++
        } else {
          setIsComplete(true)
          clearInterval(interval)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)

    return () => {
      clearTimeout(delayTimeout)
      clearTimeout(timeout)
    }
  }, [text, speed, startDelay])

  return { displayedText, isComplete }
}

// Particle component
function Particle({ delay, duration }) {
  const randomX = Math.random() * 100
  const randomDuration = duration + Math.random() * 5

  return (
    <motion.div
      className="particle"
      initial={{ x: randomX, y: -100, opacity: 0 }}
      animate={{
        y: window.innerHeight + 100,
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: randomDuration,
        delay: delay,
        ease: 'linear',
        repeat: Infinity,
      }}
    />
  )
}

export function Hero() {
  const { updateActiveSection } = usePortfolio()
  const { displayedText: titleText, isComplete: titleComplete } = useTypewriter(
    'Stavina Nicole D\'Souza',
    50,
    800
  )
  const { displayedText: subtitleText, isComplete: subtitleComplete } = useTypewriter(
    'Computer & Communication Engineer | Aerospace Aspirant',
    40,
    2200
  )
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  useEffect(() => {
    updateActiveSection('home')
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [updateActiveSection])

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  }

  return (
    <section id="home" className="hero">
      {/* Animated background */}
      <div className="hero__background">
        <motion.div
          className="hero__gradient-1"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.3), transparent 50%)',
              'radial-gradient(circle at 80% 30%, rgba(157, 78, 221, 0.3), transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(255, 0, 110, 0.2), transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.3), transparent 50%)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="hero__gradient-2"
          animate={{
            background: [
              'radial-gradient(circle at 80% 80%, rgba(58, 134, 255, 0.2), transparent 50%)',
              'radial-gradient(circle at 20% 20%, rgba(0, 217, 255, 0.2), transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(58, 134, 255, 0.2), transparent 50%)',
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Grid overlay */}
        <div className="hero__grid" />

        {/* Floating particles */}
        <div className="hero__particles">
          {[...Array(20)].map((_, i) => (
            <Particle key={i} delay={i * 0.2} duration={15 + Math.random() * 10} />
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Accent lines */}
        <motion.div
          className="hero__accent-line hero__accent-line--top"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Main title */}
        <div className="hero__title-wrapper">
          <motion.h1
            className="hero__title"
            variants={itemVariants}
          >
            {titleText}
            {!titleComplete && (
              <motion.span
                className="hero__cursor"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
          </motion.h1>
        </div>

        {/* Subtitle with typewriter */}
        <motion.div
          className="hero__subtitle-wrapper"
          variants={itemVariants}
        >
          <p className="hero__subtitle">
            {subtitleText}
            {!subtitleComplete && (
              <motion.span
                className="hero__cursor"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
          </p>
        </motion.div>

        {/* Tech tags */}
        <motion.div className="hero__tech-tags" variants={itemVariants}>
          {['IoT Systems', 'Networking', 'UAV Design', 'Embedded Systems'].map(
            (tech, index) => (
              <motion.span
                key={tech}
                className="hero__tech-tag"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3 + index * 0.1 }}
                variants={pulseVariants}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            )
          )}
        </motion.div>

        {/* Contact info */}
        <motion.div className="hero__contact-info" variants={itemVariants}>
          <motion.a
            href="tel:9606835113"
            className="hero__contact-item"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="hero__contact-icon">📞</span>
            <span>9606835113</span>
          </motion.a>
          <motion.div className="hero__contact-divider" />
          <motion.a
            href="mailto:stavinadsouza@gmail.com"
            className="hero__contact-item"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="hero__contact-icon">📧</span>
            <span>stavinadsouza@gmail.com</span>
          </motion.a>
        </motion.div>

        {/* CTA buttons */}
        <motion.div className="hero__buttons" variants={itemVariants}>
          <motion.button
            className="hero__button hero__button--primary"
            onClick={handleScrollToProjects}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore My Work</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
          <motion.button
            className="hero__button hero__button--secondary"
            onClick={handleScrollToContact}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get In Touch</span>
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ↗
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Accent lines bottom */}
        <motion.div
          className="hero__accent-line hero__accent-line--bottom"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <motion.div
          className="hero__scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className="hero__scroll-text">Scroll to explore</span>
          <svg
            className="hero__scroll-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      )}

      {/* Radar effect */}
      <motion.div className="hero__radar">
        <motion.div
          className="hero__radar-circle hero__radar-circle--1"
          animate={{ scale: [1, 1.5], opacity: [1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="hero__radar-circle hero__radar-circle--2"
          animate={{ scale: [1, 1.5], opacity: [1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
      </motion.div>

      {/* Flying elements */}
      <motion.div
        className="hero__flying-element hero__flying-element--1"
        variants={floatingVariants}
        animate="float"
      >
        🛰️
      </motion.div>
      <motion.div
        className="hero__flying-element hero__flying-element--2"
        variants={floatingVariants}
        animate="float"
      >
        🚁
      </motion.div>
      <motion.div
        className="hero__flying-element hero__flying-element--3"
        variants={floatingVariants}
        animate="float"
      >
        ✈️
      </motion.div>
    </section>
  )
}


import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInViewport } from '../../../hooks/useInViewport'
import './About.css'

// Animated counter component
function AnimatedCounter({ end, duration = 2, label, icon }) {
  const [count, setCount] = useState(0)
  const { ref, hasBeenInViewport } = useInViewport()

  useEffect(() => {
    if (!hasBeenInViewport) return

    let startValue = 0
    const increment = end / (duration * 100)
    let timer

    timer = setInterval(() => {
      startValue += increment
      if (startValue >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(startValue))
      }
    }, duration * 10)

    return () => clearInterval(timer)
  }, [end, duration, hasBeenInViewport])

  return (
    <motion.div
      ref={ref}
      className="counter-card"
      initial={{ opacity: 0, y: 20 }}
      animate={hasBeenInViewport ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="counter-card__icon">{icon}</div>
      <div className="counter-card__value">{count}+</div>
      <div className="counter-card__label">{label}</div>
    </motion.div>
  )
}

// Interest card component
function InterestCard({ title, description, icon, index }) {
  const { ref, hasBeenInViewport } = useInViewport()

  return (
    <motion.div
      ref={ref}
      className="interest-card"
      initial={{ opacity: 0, x: -20 }}
      animate={hasBeenInViewport ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ x: 10, y: -5 }}
    >
      <div className="interest-card__header">
        <span className="interest-card__icon">{icon}</span>
        <h3 className="interest-card__title">{title}</h3>
      </div>
      <p className="interest-card__description">{description}</p>
      <div className="interest-card__line" />
    </motion.div>
  )
}

export function About() {
  const { ref: mainRef, hasBeenInViewport } = useInViewport()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const interests = [
    {
      title: 'Networking Enthusiast',
      description: 'Passionate about network protocols, configurations, and building robust IT infrastructure.',
      icon: '🌐',
    },
    {
      title: 'System Troubleshooter',
      description: 'Skilled in diagnosing and resolving complex system issues with methodical approaches.',
      icon: '🔧',
    },
    {
      title: 'IT Systems Architect',
      description: 'Designing and implementing efficient IT systems for optimal performance and reliability.',
      icon: '🏗️',
    },
    {
      title: 'UAV Innovator',
      description: 'Exploring aerospace and drone technology, learning UAV design and control systems.',
      icon: '🚁',
    },
  ]

  return (
    <section id="about" className="about" ref={mainRef}>
      <div className="about__container">
        {/* Header */}
        <motion.div
          className="about__header"
          variants={containerVariants}
          initial="hidden"
          animate={hasBeenInViewport ? 'visible' : 'hidden'}
        >
          <motion.div
            className="about__accent-line"
            initial={{ scaleX: 0 }}
            animate={hasBeenInViewport ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.h2 className="about__title" variants={itemVariants}>
            About Me
          </motion.h2>
          <motion.p className="about__subtitle" variants={itemVariants}>
            Computer & Communication Engineering Student | Continuous Learner
          </motion.p>
        </motion.div>

        {/* Bio section */}
        <motion.div
          className="about__bio"
          variants={itemVariants}
          initial="hidden"
          animate={hasBeenInViewport ? 'visible' : 'hidden'}
        >
          <p className="about__bio-text">
            I'm a dedicated Computer & Communication Engineering student with a passion for networking,
            IT systems, and troubleshooting. My journey is driven by curiosity and a commitment to
            building reliable technical solutions. I actively seek opportunities to develop expertise in
            network protocols, system diagnostics, and emerging aerospace technologies.
          </p>
        </motion.div>

        {/* Stats section */}
        <motion.div
          className="about__stats"
          variants={containerVariants}
          initial="hidden"
          animate={hasBeenInViewport ? 'visible' : 'hidden'}
        >
          <AnimatedCounter end={3} duration={2} label="Projects Completed" icon="🎯" />
          <AnimatedCounter end={8} duration={2} label="Technologies Mastered" icon="⭐" />
          <AnimatedCounter end={500} duration={2.5} label="Development Hours" icon="⏱️" />
          <AnimatedCounter end={4} duration={2} label="Years of Learning" icon="📚" />
        </motion.div>

        {/* Interests grid */}
        <motion.div
          className="about__interests"
          variants={containerVariants}
          initial="hidden"
          animate={hasBeenInViewport ? 'visible' : 'hidden'}
        >
          <motion.h3 className="about__section-title" variants={itemVariants}>
            Areas of Focus
          </motion.h3>
          <div className="about__interests-grid">
            {interests.map((interest, index) => (
              <InterestCard
                key={interest.title}
                title={interest.title}
                description={interest.description}
                icon={interest.icon}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Skills highlight */}
        <motion.div
          className="about__skills-highlight"
          variants={containerVariants}
          initial="hidden"
          animate={hasBeenInViewport ? 'visible' : 'hidden'}
        >
          <motion.h3 className="about__section-title" variants={itemVariants}>
            Core Competencies
          </motion.h3>
          <motion.div className="about__competencies" variants={containerVariants}>
            {[
              'Network Design',
              'System Administration',
              'Network Security',
              'IoT Development',
              'Embedded Systems',
              'Technical Troubleshooting',
              'Network Protocols',
              'System Diagnostics',
            ].map((skill, index) => (
              <motion.span
                key={skill}
                className="about__competency-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={hasBeenInViewport ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Education highlight */}
        <motion.div
          className="about__education-highlight"
          variants={itemVariants}
          initial="hidden"
          animate={hasBeenInViewport ? 'visible' : 'hidden'}
        >
          <div className="about__education-card">
            <div className="about__education-icon">🎓</div>
            <h3 className="about__education-degree">Bachelor of Technology</h3>
            <p className="about__education-field">Computer and Communication Engineering</p>
            <p className="about__education-institution">NMAM Institute of Technology, NITTE</p>
            <p className="about__education-period">2023 - 2027 | Karnataka, India</p>
            <div className="about__education-accent" />
          </div>
        </motion.div>

        {/* Current focus */}
        <motion.div
          className="about__current-focus"
          variants={containerVariants}
          initial="hidden"
          animate={hasBeenInViewport ? 'visible' : 'hidden'}
        >
          <motion.h3 className="about__section-title" variants={itemVariants}>
            Current Focus
          </motion.h3>
          <motion.div className="about__focus-content" variants={containerVariants}>
            <div className="about__focus-item">
              <motion.div
                className="about__focus-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                🛰️
              </motion.div>
              <div>
                <h4>Aerospace Technology</h4>
                <p>Exploring UAV design and drone technology with Aeroclub Nitte</p>
              </div>
            </div>
            <div className="about__focus-item">
              <motion.div
                className="about__focus-icon"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🔬
              </motion.div>
              <div>
                <h4>Continuous Learning</h4>
                <p>Developing expertise in networking and embedded systems through hands-on projects</p>
              </div>
            </div>
            <div className="about__focus-item">
              <motion.div
                className="about__focus-icon"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.div>
              <div>
                <h4>Innovation & Growth</h4>
                <p>Building reliable technical solutions and contributing to the tech community</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

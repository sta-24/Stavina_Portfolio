import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { usePortfolio } from '../../../hooks/usePortfolio'
import { useInViewport } from '../../../hooks/useInViewport'
import './Dashboard.css'

// Animated progress bar component
function ProgressBar({ skill, proficiency, delay }) {
  const { ref, hasBeenInViewport } = useInViewport()
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!hasBeenInViewport) return

    let current = 0
    const increment = proficiency / 50
    const interval = setInterval(() => {
      current += increment
      if (current >= proficiency) {
        setDisplayValue(proficiency)
        clearInterval(interval)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, 20)

    return () => clearInterval(interval)
  }, [proficiency, hasBeenInViewport])

  return (
    <motion.div
      ref={ref}
      className="progress-item"
      initial={{ opacity: 0, x: -20 }}
      animate={hasBeenInViewport ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="progress-header">
        <h4 className="progress-title">{skill}</h4>
        <motion.span
          className="progress-value"
          initial={{ opacity: 0 }}
          animate={hasBeenInViewport ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 + delay }}
        >
          {displayValue}%
        </motion.span>
      </div>
      <div className="progress-bar-container">
        <motion.div
          className="progress-bar-fill"
          initial={{ width: 0 }}
          animate={hasBeenInViewport ? { width: `${proficiency}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: 0.3 + delay, ease: 'easeOut' }}
        >
          <motion.div
            className="progress-bar-glow"
            animate={{
              boxShadow: [
                '0 0 10px rgba(0, 217, 255, 0.5)',
                '0 0 20px rgba(0, 217, 255, 0.8)',
                '0 0 10px rgba(0, 217, 255, 0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

// Radar circle component
function RadarCircle({ delay, size }) {
  return (
    <motion.div
      className={`radar-circle radar-circle--${size}`}
      animate={{
        scale: [1, 1.5],
        opacity: [1, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: delay,
      }}
    />
  )
}

export function Dashboard() {
  const { updateActiveSection } = usePortfolio()
  const { ref: sectionRef } = useInViewport()

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('mission-control')
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2) {
          updateActiveSection('mission-control')
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [updateActiveSection])

  const learningData = [
    { skill: 'Networking', proficiency: 85 },
    { skill: 'React.js', proficiency: 78 },
    { skill: 'FastAPI', proficiency: 72 },
    { skill: 'Data Structures & Algorithms', proficiency: 80 },
    { skill: 'UAV Systems', proficiency: 65 },
  ]

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
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="mission-control" className="dashboard">
      <div className="dashboard__container">
        {/* Radar background effect */}
        <motion.div className="dashboard__radar">
          <RadarCircle delay={0} size="1" />
          <RadarCircle delay={0.5} size="2" />
          <RadarCircle delay={1} size="3" />
          <div className="radar-center" />
          <div className="radar-grid" />
        </motion.div>

        {/* Header */}
        <motion.div
          className="dashboard__header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="dashboard__accent-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <motion.h2 className="dashboard__title" variants={itemVariants}>
            Mission Control Dashboard
          </motion.h2>
          <motion.p className="dashboard__subtitle" variants={itemVariants}>
            Tracking Learning Progress & System Status
          </motion.p>
        </motion.div>

        {/* Learning Progress Section */}
        <motion.div
          className="dashboard__learning"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          ref={sectionRef}
        >
          <motion.h3 className="dashboard__section-title" variants={itemVariants}>
            📚 Learning Progress
          </motion.h3>

          <div className="dashboard__progress-list">
            {learningData.map((item, index) => (
              <ProgressBar
                key={item.skill}
                skill={item.skill}
                proficiency={item.proficiency}
                delay={0.1 * index}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="dashboard__stats"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="dashboard__stat-card" variants={itemVariants}>
            <div className="stat-icon">🚀</div>
            <div className="stat-content">
              <h4 className="stat-label">Projects Deployed</h4>
              <motion.p
                className="stat-value"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                3+
              </motion.p>
            </div>
          </motion.div>

          <motion.div className="dashboard__stat-card" variants={itemVariants}>
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <h4 className="stat-label">Skills Mastered</h4>
              <motion.p
                className="stat-value"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                8+
              </motion.p>
            </div>
          </motion.div>

          <motion.div className="dashboard__stat-card" variants={itemVariants}>
            <div className="stat-icon">⏱️</div>
            <div className="stat-content">
              <h4 className="stat-label">Development Hours</h4>
              <motion.p
                className="stat-value"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                500+
              </motion.p>
            </div>
          </motion.div>

          <motion.div className="dashboard__stat-card" variants={itemVariants}>
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h4 className="stat-label">Continuous Learning</h4>
              <motion.p
                className="stat-value"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                4+ Years
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* System Status */}
        <motion.div
          className="dashboard__status"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h3 className="dashboard__section-title" variants={itemVariants}>
            🛰️ System Status
          </motion.h3>

          <div className="status-grid">
            <motion.div className="status-item" variants={itemVariants}>
              <div className="status-indicator online" />
              <span className="status-text">System Online</span>
            </motion.div>
            <motion.div className="status-item" variants={itemVariants}>
              <div className="status-indicator online" />
              <span className="status-text">All Systems Operational</span>
            </motion.div>
            <motion.div className="status-item" variants={itemVariants}>
              <div className="status-indicator online" />
              <span className="status-text">Learning Mode Active</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { usePortfolio } from '../../../hooks/usePortfolio'
import { useInViewport } from '../../../hooks/useInViewport'
import './Dashboard.css'

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
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="progress-header">
        <h4 className="progress-title">{skill}</h4>

        <span className="progress-value">
          {displayValue}%
        </span>
      </div>

      <div className="progress-bar-container">
        <motion.div
          className="progress-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{
            duration: 1.5,
            delay: 0.3 + delay,
            ease: 'easeOut',
          }}
          viewport={{ once: true }}
        >
          <div className="progress-bar-glow" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Dashboard() {
  const { updateActiveSection } = usePortfolio()
  const { ref: sectionRef } = useInViewport()

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('mission-control')

      if (!section) return

      const rect = section.getBoundingClientRect()

      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        updateActiveSection('mission-control')
      }
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () =>
      window.removeEventListener('scroll', handleScroll)
  }, [updateActiveSection])

  const learningData = [
    { skill: 'Networking', proficiency: 85 },
    { skill: 'React.js', proficiency: 78 },
    { skill: 'FastAPI', proficiency: 72 },
    { skill: 'Data Structures & Algorithms', proficiency: 80 },
    { skill: 'UAV Systems', proficiency: 65 },
  ]

  return (
    <section
      id="mission-control"
      className="dashboard"
      ref={sectionRef}
    >
      <div className="dashboard__container">

        {/* Header */}

        <div className="dashboard__header">
          <h2 className="dashboard__title">
            Learning Dashboard
          </h2>

          <p className="dashboard__subtitle">
            Technologies, projects and continuous growth
          </p>
        </div>

        {/* Learning Progress */}

        <div className="dashboard__learning">
          <h3 className="dashboard__section-title">
            Learning Progress
          </h3>

          <div className="dashboard__progress-list">
            {learningData.map((item, index) => (
              <ProgressBar
                key={item.skill}
                skill={item.skill}
                proficiency={item.proficiency}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Stats */}

        <div className="dashboard__stats">

          <div className="dashboard__stat-card">
            <div className="stat-icon">🚀</div>
            <div className="stat-content">
              <p className="stat-label">
                Projects Built
              </p>
              <p className="stat-value">
                5+
              </p>
            </div>
          </div>

          <div className="dashboard__stat-card">
            <div className="stat-icon">⚡</div>
            <div className="stat-content">
              <p className="stat-label">
                Technologies Learned
              </p>
              <p className="stat-value">
                12+
              </p>
            </div>
          </div>

          <div className="dashboard__stat-card">
            <div className="stat-icon">💻</div>
            <div className="stat-content">
              <p className="stat-label">
                Development Hours
              </p>
              <p className="stat-value">
                500+
              </p>
            </div>
          </div>

          <div className="dashboard__stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-content">
              <p className="stat-label">
                Years Learning
              </p>
              <p className="stat-value">
                4+
              </p>
            </div>
          </div>

        </div>

        {/* Focus Areas */}

        <div className="dashboard__focus">
          <h3 className="dashboard__section-title">
            Current Focus Areas
          </h3>

          <div className="focus-grid">

            <div className="focus-card">
              <h4>Networking</h4>
              <p>
                Routing, switching, network
                architecture and troubleshooting.
              </p>
            </div>

            <div className="focus-card">
              <h4>React Development</h4>
              <p>
                Building scalable and interactive
                frontend applications.
              </p>
            </div>

            <div className="focus-card">
              <h4>FastAPI</h4>
              <p>
                Developing backend services,
                APIs and integrations.
              </p>
            </div>

            <div className="focus-card">
              <h4>DSA</h4>
              <p>
                Strengthening problem-solving and
                interview preparation skills.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
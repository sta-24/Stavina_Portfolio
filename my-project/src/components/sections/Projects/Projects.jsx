import { useState } from 'react'
import { useInViewport } from '../../../hooks/useInViewport'
import './Projects.css'

export function Projects() {
  const { ref, hasBeenInViewport } = useInViewport()
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const projects = [
    {
      id: 'proj-1',
      title: 'Smart Parcel Lock System',
      description: 'IoT-enabled parcel locker with OTP-based authentication',
      category: 'iot',
      icon: '🔐',
      tech: ['ESP32', 'C++', 'Arduino IDE'],
      highlights: [
        'OTP-based access authentication',
        'Secure timeout handling',
        'Owner-triggered unlock commands',
      ],
    },
    {
      id: 'proj-2',
      title: 'UAV-Based Stray Animal Monitoring',
      description: 'Concept research on drone-based animal counting',
      category: 'research',
      icon: '🚁',
      tech: ['Research', 'Data Analysis'],
      highlights: [
        'Developed concept paper',
        'Analyzed problem scope and methodology',
        'Presented at campus competition',
      ],
    },
    {
      id: 'proj-3',
      title: 'Study Helper App',
      description: 'Android productivity app with task management and Pomodoro timer',
      category: 'mobile',
      icon: '📚',
      tech: ['Android Studio', 'Java', 'XML'],
      highlights: [
        'Task-based study assistant',
        'Dynamic progress tracker',
        'Pomodoro timer and deep focus mode',
      ],
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'iot', label: 'IoT' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'research', label: 'Research' },
  ]

  const filteredProjects = selectedCategory 
    ? projects.filter(p => p.category === selectedCategory)
    : projects

  return (
    <section id="projects" className="section section--projects" ref={ref}>
      <div className="section__container">
        <h2 className="section__title">Projects</h2>

        <div className="projects__filter">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`projects__filter-btn ${
                (category.id === 'all' && !selectedCategory) || 
                selectedCategory === category.id 
                  ? 'projects__filter-btn--active' 
                  : ''
              }`}
              onClick={() => setSelectedCategory(category.id === 'all' ? null : category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="projects__card"
              style={{
                opacity: hasBeenInViewport ? 1 : 0,
                transform: hasBeenInViewport ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease-out ${index * 0.1}s`,
              }}
            >
              <div className="projects__card-header">
                <div className="projects__card-icon">{project.icon}</div>
              </div>

              <div className="projects__card-content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">{project.description}</p>

                <div className="projects__card-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="projects__tech-tag">{t}</span>
                  ))}
                </div>

                <ul className="projects__highlights">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <button
                className="projects__card-btn"
                onClick={() => setSelectedProject(project)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="projects__modal">
            <div className="projects__modal-overlay" onClick={() => setSelectedProject(null)}></div>
            <div className="projects__modal-content">
              <button 
                className="projects__modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>

              <div className="projects__modal-icon">{selectedProject.icon}</div>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>

              <div className="projects__modal-highlights">
                <h4>Key Highlights:</h4>
                <ul>
                  {selectedProject.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="projects__modal-tech">
                <h4>Technologies Used:</h4>
                <div>
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="projects__tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

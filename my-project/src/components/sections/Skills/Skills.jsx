import { useInViewport } from '../../../hooks/useInViewport'

export function Skills() {
  const { ref, hasBeenInViewport } = useInViewport()

  const skillCategories = [
    {
      id: 'cat-1',
      name: 'Languages',
      skills: [
        { name: 'Python', proficiency: 85 },
        { name: 'C/C++', proficiency: 80 },
        { name: 'Java', proficiency: 75 },
        { name: 'SQL', proficiency: 70 },
      ],
    },
    {
      id: 'cat-2',
      name: 'Developer Tools',
      skills: [
        { name: 'Android Studio', proficiency: 80 },
        { name: 'VS Code', proficiency: 90 },
        { name: 'NS-3', proficiency: 65 },
        { name: 'Arduino IDE', proficiency: 85 },
      ],
    },
    {
      id: 'cat-3',
      name: 'Areas of Interest',
      skills: [
        { name: 'IoT', proficiency: 75 },
        { name: 'Networking', proficiency: 70 },
        { name: 'Embedded Systems', proficiency: 75 },
        { name: 'UAV Design', proficiency: 65 },
      ],
    },
  ]

  return (
    <section id="skills" className="section section--skills" ref={ref}>
      <div className="section__container">
        <h2 className="section__title">Technical Skills</h2>

        <div className="skills__grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skills__category">
              <h3 className="skills__category-title">{category.name}</h3>

              <div className="skills__list">
                {category.skills.map((skill, index) => (
                  <div key={`${category.id}-${index}`} className="skills__item">
                    <div className="skills__name-row">
                      <span className="skills__name">{skill.name}</span>
                      <span className="skills__percentage">{skill.proficiency}%</span>
                    </div>
                    <div className="skills__bar">
                      <div 
                        className="skills__bar-fill"
                        style={{
                          width: hasBeenInViewport ? `${skill.proficiency}%` : '0%',
                          transition: hasBeenInViewport ? 'width 1s ease-out' : 'none',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

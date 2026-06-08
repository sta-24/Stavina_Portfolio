import { useInViewport } from '../../../hooks/useInViewport'

export function Timeline() {
  const { ref, hasBeenInViewport } = useInViewport()

  const experiences = [
    {
      id: 'exp-1',
      title: 'Executive Member',
      organization: 'Aeroclub Nitte',
      location: 'Karnataka, India',
      period: 'August 2024 - Present',
      description: 'Learning and working on aircraft and UAV design',
      items: [
        'Learning Aircraft and UAV design basics',
        'Participating in hands-on workshops',
        'Working with peers on electronics and drone components',
      ],
      side: 'left',
    },
  ]

  const education = [
    {
      id: 'edu-1',
      title: 'Bachelor of Technology',
      organization: 'NMAM Institute of Technology, NITTE',
      location: 'Karnataka, India',
      period: '2023 - 2027',
      description: 'Computer and Communication Engineering',
      items: [
        'Currently pursuing degree',
        'GPA: (To be updated)',
      ],
      side: 'right',
    },
  ]

  const allItems = [...experiences, ...education]

  return (
    <section id="experience" className="section section--timeline" ref={ref}>
      <div className="section__container">
        <h2 className="section__title">Experience & Education</h2>

        <div className="timeline__wrapper">
          <div className="timeline__line"></div>

          <div className="timeline__items">
            {allItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`timeline__item timeline__item--${item.side}`}
                style={{
                  opacity: hasBeenInViewport ? 1 : 0,
                  transition: `opacity 0.6s ease-out ${index * 0.1}s`,
                }}
              >
                <div className="timeline__marker"></div>

                <div className="timeline__content">
                  <h3 className="timeline__title">{item.title}</h3>
                  <p className="timeline__organization">{item.organization}</p>
                  <p className="timeline__period">{item.period}</p>
                  <p className="timeline__description">{item.description}</p>

                  <ul className="timeline__list">
                    {item.items.map((listItem, idx) => (
                      <li key={idx}>{listItem}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

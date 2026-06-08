import { useInViewport } from '../../../hooks/useInViewport'

export function MissionControl() {
  const { ref, hasBeenInViewport } = useInViewport()

  const stats = [
    {
      id: 'stat-1',
      label: 'Projects Completed',
      value: 3,
      icon: '🚀',
    },
    {
      id: 'stat-2',
      label: 'Skills Mastered',
      value: 8,
      icon: '⭐',
    },
    {
      id: 'stat-3',
      label: 'Development Hours',
      value: 500,
      icon: '⏱️',
      unit: 'hrs',
    },
    {
      id: 'stat-4',
      label: 'Current Focus',
      value: 'Networking',
      icon: '🎯',
      isString: true,
    },
  ]

  return (
    <section id="mission-control" className="section section--mission-control" ref={ref}>
      <div className="section__container">
        <h2 className="section__title">Mission Control Dashboard</h2>

        <div className="dashboard__grid">
          {stats.map((stat) => (
            <div key={stat.id} className="dashboard__card">
              <div className="dashboard__card-icon">{stat.icon}</div>
              <div className="dashboard__card-label">{stat.label}</div>
              <div className="dashboard__card-value">
                {stat.isString ? stat.value : (
                  <>
                    <span className="dashboard__card-number">
                      {hasBeenInViewport ? stat.value : 0}
                    </span>
                    {stat.unit && <span className="dashboard__card-unit">{stat.unit}</span>}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="dashboard__info">
          <p>Key metrics and statistics about the journey so far</p>
        </div>
      </div>
    </section>
  )
}

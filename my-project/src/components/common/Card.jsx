export function Card({ 
  children, 
  className = '',
  title = null,
  subtitle = null,
  ...props 
}) {
  return (
    <div className={`card ${className}`.trim()} {...props}>
      {title && <div className="card__header"><h3 className="card__title">{title}</h3></div>}
      {subtitle && <p className="card__subtitle">{subtitle}</p>}
      <div className="card__content">
        {children}
      </div>
    </div>
  )
}

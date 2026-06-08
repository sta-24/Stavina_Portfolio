export function Badge({ 
  children, 
  variant = 'default',
  icon = null,
  className = '',
  ...props 
}) {
  return (
    <span className={`badge badge--${variant} ${className}`.trim()} {...props}>
      {icon && <span className="badge__icon">{icon}</span>}
      {children}
    </span>
  )
}

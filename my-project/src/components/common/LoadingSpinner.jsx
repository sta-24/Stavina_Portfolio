export function LoadingSpinner({ 
  size = 'md',
  message = 'Loading...',
  className = '',
  ...props 
}) {
  return (
    <div className={`spinner spinner--${size} ${className}`.trim()} {...props}>
      <div className="spinner__inner"></div>
      {message && <p className="spinner__message">{message}</p>}
    </div>
  )
}

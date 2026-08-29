export default function Card({ icon, title, children, className = '', id, variant = 'default' }) {
  const variants = {
    default: 'glass-card',
    solid: 'bg-dark-700 border border-dark-500 rounded-2xl',
    glow: 'glass-card animate-pulse-glow',
  }

  return (
    <div id={id} className={`${variants[variant]} p-6 sm:p-8 ${className}`}>
      {icon && (
        <div className="text-4xl mb-4">{icon}</div>
      )}
      {title && (
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      )}
      <div className="text-dark-100 leading-relaxed">{children}</div>
    </div>
  )
}

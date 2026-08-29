import { Link } from 'react-router-dom'

export default function Button({ to, onClick, children, variant = 'primary', size = 'md', className = '', id }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer'

  const variants = {
    primary: 'bg-gradient-to-r from-electric-500 to-electric-600 text-white hover:from-electric-400 hover:to-electric-500 shadow-lg shadow-electric-500/25 hover:shadow-electric-500/40 hover:-translate-y-0.5',
    secondary: 'bg-dark-600 text-white border border-dark-400 hover:border-electric-500/50 hover:bg-dark-500 hover:-translate-y-0.5',
    accent: 'bg-gradient-to-r from-neon-500 to-electric-500 text-white hover:from-neon-400 hover:to-electric-400 shadow-lg shadow-neon-500/25 hover:shadow-neon-500/40 hover:-translate-y-0.5',
    ghost: 'text-electric-400 hover:bg-electric-500/10 hover:text-electric-300',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} id={id} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} id={id} className={classes}>
      {children}
    </button>
  )
}

export default function InfoBox({ type = 'info', title, children, id }) {
  const styles = {
    info: {
      bg: 'bg-electric-500/10',
      border: 'border-electric-500/30',
      icon: 'ℹ️',
      titleColor: 'text-electric-400',
    },
    warning: {
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      icon: '⚠️',
      titleColor: 'text-amber-400',
    },
    success: {
      bg: 'bg-green-500/10',
      border: 'border-green-500/30',
      icon: '✅',
      titleColor: 'text-green-400',
    },
    important: {
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
      icon: '📌',
      titleColor: 'text-purple-400',
    },
  }

  const s = styles[type]

  return (
    <div
      id={id}
      className={`${s.bg} border ${s.border} rounded-2xl p-6 sm:p-8`}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{s.icon}</span>
        <div>
          {title && (
            <h4 className={`${s.titleColor} font-bold text-lg mb-2`}>{title}</h4>
          )}
          <div className="text-dark-100 leading-relaxed text-sm">{children}</div>
        </div>
      </div>
    </div>
  )
}

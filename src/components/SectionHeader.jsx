export default function SectionHeader({ badge, title, subtitle, centered = true, id }) {
  return (
    <div id={id} className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-electric-500/10 text-electric-400 border border-electric-500/20 mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-dark-100 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

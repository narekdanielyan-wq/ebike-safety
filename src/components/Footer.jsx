import { Link } from 'react-router-dom'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/why-13', label: 'Why 13?' },
  { to: '/safety', label: 'Safety Guide' },
  { to: '/parents', label: 'Parent Guide' },
  { to: '/basics', label: 'E-Bike Basics' },
  { to: '/quiz', label: 'Quiz' },
]

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-dark-800 border-t border-dark-600/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-500 to-neon-500 flex items-center justify-center font-extrabold text-white text-xs">
                13+
              </div>
              <span className="text-lg font-bold text-white">
                E-Bike Safety <span className="gradient-text">13+</span>
              </span>
            </div>
            <p className="text-dark-100 text-sm leading-relaxed">
              Helping young riders and parents make informed decisions about e-bike safety. Education first, always.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-dark-100 hover:text-electric-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-white font-semibold mb-4">Important Notice</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-3">
              This website provides educational information only. It does not constitute legal advice.
            </p>
            <p className="text-dark-100 text-sm leading-relaxed">
              Always check your local laws and regulations regarding e-bike usage and age requirements.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-dark-600/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-200 text-xs">
            © {new Date().getFullYear()} E-Bike Safety 13+. Educational information only.
          </p>
          <p className="text-dark-200 text-xs">
            Always check local laws and regulations.
          </p>
        </div>
      </div>
    </footer>
  )
}

import Button from '../components/Button'
import Card from '../components/Card'
import SectionHeader from '../components/SectionHeader'

const features = [
  {
    icon: '🧠',
    title: 'Why 13?',
    description: 'Understand the reasoning behind recommending age 13 as a safety minimum — including maturity, traffic awareness, judgment, and responsibility.',
    link: '/why-13',
  },
  {
    icon: '🛡️',
    title: 'Ride Safer',
    description: 'Practical safety checklists, gear recommendations, and riding best practices to help every e-bike rider stay protected on the road.',
    link: '/safety',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Parents',
    description: 'A detailed checklist and discussion guide for parents deciding whether their child is ready for the responsibility of riding an e-bike.',
    link: '/parents',
  },
]

const reasons = [
  {
    icon: '📚',
    title: 'Learn E-Bike Safety',
    description: 'Explore comprehensive guides on safe riding practices, equipment checks, and traffic awareness.',
  },
  {
    icon: '🧪',
    title: 'Test Your Knowledge',
    description: 'Take our interactive quiz to see how well you understand e-bike safety fundamentals.',
  },
  {
    icon: '🎮',
    title: 'Understand E-Bike Controls',
    description: 'Learn what makes an e-bike different from a regular bicycle — motors, batteries, throttles, and more.',
  },
  {
    icon: '📋',
    title: 'Safety Recommendations',
    description: 'Find useful, evidence-informed safety recommendations for riders of all experience levels.',
  },
  {
    icon: '❓',
    title: 'Parent Discussion Guide',
    description: 'Discover what questions parents should consider before allowing their child to ride an e-bike.',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-500/20 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-slide-up">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-electric-500/10 text-electric-400 border border-electric-500/20 mb-6">
                Safety First · Education Always
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-tight">
                E-Bikes Are Fun.{' '}
                <span className="gradient-text">Safety Comes First.</span>
              </h1>
              <p className="text-lg sm:text-xl text-dark-100 mb-8 leading-relaxed max-w-lg">
                Learn why age 13 can be a reasonable minimum safety recommendation for young e-bike riders.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/why-13" variant="primary" size="lg" id="hero-why-13-btn">
                  Why 13?
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button to="/quiz" variant="secondary" size="lg" id="hero-quiz-btn">
                  Take the Safety Quiz
                </Button>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="animate-slide-up hidden lg:flex justify-center" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="w-80 h-80 xl:w-96 xl:h-96 rounded-3xl bg-gradient-to-br from-electric-500/10 to-neon-500/10 border border-electric-500/20 flex items-center justify-center animate-float">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🚲</div>
                    <div className="text-6xl font-extrabold gradient-text">13+</div>
                    <p className="text-dark-100 mt-2 text-sm font-medium">Recommended Minimum Age</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center text-3xl animate-float" style={{ animationDelay: '0.5s' }}>
                  ⛑️
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-neon-500/10 border border-neon-500/20 flex items-center justify-center text-2xl animate-float" style={{ animationDelay: '1s' }}>
                  ✅
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section id="features" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What We Cover"
            title="Everything You Need to Ride Safely"
            subtitle="From understanding why age matters to practical safety gear checklists — we've got you covered."
          />
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 stagger-children">
            {features.map((f) => (
              <div key={f.title} className="animate-slide-up">
                <Card icon={f.icon} title={f.title} id={`feature-${f.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                  <p className="mb-4">{f.description}</p>
                  <Button to={f.link} variant="ghost" size="sm">
                    Learn More →
                  </Button>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why People Visit */}
      <section id="why-visit" className="py-20 lg:py-28 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why People Visit"
            title="What You'll Discover Here"
            subtitle="Whether you're a young rider, parent, or just curious — this site has resources for you."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {reasons.map((r) => (
              <div key={r.title} className="animate-slide-up">
                <Card icon={r.icon} title={r.title} variant="solid">
                  {r.description}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-10 sm:p-14 animate-pulse-glow">
            <div className="text-5xl mb-6">🏆</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Think You're Ready?
            </h2>
            <p className="text-dark-100 text-lg mb-8 max-w-lg mx-auto">
              Test your e-bike safety knowledge with our interactive quiz. See how well you understand the rules of the road.
            </p>
            <Button to="/quiz" variant="accent" size="lg" id="cta-quiz-btn">
              Take the Safety Quiz
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

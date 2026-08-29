import Card from '../components/Card'
import SectionHeader from '../components/SectionHeader'
import InfoBox from '../components/InfoBox'

const reasons = [
  {
    icon: '🧠',
    title: 'Maturity',
    description: 'Young riders need sufficient cognitive development and emotional maturity to make safe decisions in real-time. This includes the ability to assess risk, remain calm under pressure, and consistently follow safety protocols — even when unsupervised. Research suggests that judgment and impulse control continue to develop well into adolescence, and by age 13 many young people have developed a stronger foundation for responsible behavior.',
  },
  {
    icon: '🚦',
    title: 'Traffic Awareness',
    description: 'Navigating roads and intersections safely requires an understanding of traffic signals, right-of-way rules, pedestrian zones, and how to share space with larger vehicles. Riders need to predict what other road users might do, check blind spots, and respond quickly to changing traffic conditions. These skills build over time through experience and developmental readiness.',
  },
  {
    icon: '⚡',
    title: 'Speed & Control',
    description: 'E-bikes can reach higher speeds than traditional bicycles and are often heavier due to batteries and motors. This means riders need greater physical strength and coordination to steer, balance, and stop safely — especially in emergencies. Younger children may not have the physical development to control an e-bike reliably at higher speeds or on uneven terrain.',
  },
  {
    icon: '🛑',
    title: 'Emergency Decisions',
    description: 'When something unexpected happens — a car pulls out, a pedestrian steps into the path, or road conditions suddenly change — riders need to react quickly and correctly. This requires split-second decision making, knowledge of proper braking technique, and the ability to stay calm rather than panic. These skills are closely tied to both experience and developmental maturity.',
  },
]

const stats = [
  { value: '25+', label: 'MPH top speed on many e-bikes', icon: '⚡' },
  { value: '50+', label: 'lbs heavier than regular bikes', icon: '⚖️' },
  { value: '360°', label: 'awareness needed while riding', icon: '👁️' },
  { value: '< 1s', label: 'to make emergency decisions', icon: '⏱️' },
]

export default function Why13() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section id="why13-hero" className="mb-20">
          <SectionHeader
            badge="Understanding the Recommendation"
            title={<>Why We Recommend <span className="gradient-text">Age 13</span></>}
            subtitle="E-bikes are powerful machines. Here's why we believe 13 is a reasonable minimum age for riders to start using them safely."
          />

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 stagger-children">
            {stats.map((s) => (
              <div key={s.label} className="animate-slide-up glass-card p-5 text-center">
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="text-2xl sm:text-3xl font-extrabold gradient-text mb-1">{s.value}</div>
                <p className="text-dark-100 text-xs sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reason Cards */}
        <section id="why13-reasons" className="mb-20">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 stagger-children">
            {reasons.map((r) => (
              <div key={r.title} className="animate-slide-up">
                <Card icon={r.icon} title={r.title} className="h-full">
                  {r.description}
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Important Note */}
        <section id="why13-disclaimer" className="max-w-3xl mx-auto">
          <InfoBox type="important" title="Important Note" id="why13-important-note">
            <p className="mb-2">
              Age requirements and e-bike laws differ by location. Some jurisdictions set minimum ages for e-bike use; others do not. Regulations may also vary based on the class or type of e-bike.
            </p>
            <p>
              This website recommends 13 as a <strong className="text-white">safety-focused minimum</strong>, not as a statement of universal law. Always check and follow the rules that apply in your area, and make decisions based on the individual rider's maturity and experience.
            </p>
          </InfoBox>
        </section>
      </div>
    </div>
  )
}

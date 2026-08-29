import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import InfoBox from '../components/InfoBox'

const checklist = [
  { id: 'traffic', label: 'Does your child understand basic traffic rules?' },
  { id: 'controls', label: 'Can they operate the e-bike controls responsibly?' },
  { id: 'braking', label: 'Do they understand how to brake safely at various speeds?' },
  { id: 'gear', label: 'Will they wear appropriate safety equipment every ride?' },
  { id: 'where', label: 'Do they understand where riding is appropriate and where it is not?' },
  { id: 'conditions', label: 'Do they know when conditions are unsafe for riding?' },
  { id: 'laws', label: 'Have you checked your local e-bike laws and regulations?' },
]

const discussionQuestions = [
  {
    icon: '🗣️',
    question: 'What would you do if a car didn\'t see you at an intersection?',
    tip: 'Look for awareness of defensive riding — slowing down, making eye contact with drivers, and not assuming vehicles will stop.',
  },
  {
    icon: '🤔',
    question: 'How would you handle it if your friend wanted to ride recklessly?',
    tip: 'Helps gauge peer pressure resistance and personal responsibility. Does your child know when to say no?',
  },
  {
    icon: '🌧️',
    question: 'What would you do if it started raining heavily while you were riding?',
    tip: 'Tests awareness of weather-related hazards: reduced traction, visibility, and the importance of finding shelter or slowing down significantly.',
  },
  {
    icon: '🔋',
    question: 'What should you do if the battery dies while you\'re far from home?',
    tip: 'Checks planning and problem-solving skills. Do they know the bike still pedals? Can they navigate home without motor assist?',
  },
  {
    icon: '🚶',
    question: 'How should you behave when riding near pedestrians or in shared spaces?',
    tip: 'Assesses respect for others and understanding of speed management in mixed-use areas.',
  },
  {
    icon: '📱',
    question: 'When is it okay to use your phone while on the e-bike?',
    tip: 'The answer should be: never while riding. Phones should be stored safely. If they need to use one, they should stop completely first.',
  },
]

export default function Parents() {
  const [checked, setChecked] = useState({})

  const toggle = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const completedCount = Object.values(checked).filter(Boolean).length
  const allChecked = completedCount === checklist.length

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Parent Guide"
          title={<>Parents: Before Your Child <span className="gradient-text">Rides an E-Bike</span></>}
          subtitle="Use this guide to assess readiness and have meaningful conversations about e-bike safety with your child."
        />

        {/* Readiness Checklist */}
        <section id="parent-checklist" className="max-w-3xl mx-auto mb-20">
          <div className="glass-card p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-electric-500/20 flex items-center justify-center text-xl">📋</div>
                <h3 className="text-xl font-bold text-white">Readiness Checklist</h3>
              </div>
              <span className={`text-sm font-bold ${allChecked ? 'text-neon-400' : 'text-dark-100'}`}>
                {completedCount}/{checklist.length}
              </span>
            </div>

            {/* Progress */}
            <div className="h-2 bg-dark-700 rounded-full overflow-hidden border border-dark-500 mb-6">
              <div
                className="h-full bg-gradient-to-r from-electric-500 to-neon-500 rounded-full transition-all duration-500"
                style={{ width: `${(completedCount / checklist.length) * 100}%` }}
              />
            </div>

            <div className="space-y-3">
              {checklist.map((item) => (
                <label
                  key={item.id}
                  htmlFor={`parent-${item.id}`}
                  className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                    checked[item.id]
                      ? 'bg-neon-500/10 border border-neon-500/20'
                      : 'bg-dark-700/50 border border-transparent hover:border-dark-400'
                  }`}
                >
                  <input
                    type="checkbox"
                    id={`parent-${item.id}`}
                    checked={!!checked[item.id]}
                    onChange={() => toggle(item.id)}
                    className="safety-checkbox"
                  />
                  <span className={`text-sm transition-colors ${checked[item.id] ? 'text-white font-medium' : 'text-dark-100'}`}>
                    {item.label}
                  </span>
                </label>
              ))}
            </div>

            {allChecked && (
              <div className="mt-6 p-4 rounded-xl bg-neon-500/10 border border-neon-500/20 text-center animate-scale-in">
                <p className="text-neon-400 font-medium">
                  ✅ All items checked! These are good indicators that your child may be ready. Continue with the discussion questions below.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Discussion Questions */}
        <section id="discussion-questions" className="mb-20">
          <SectionHeader
            badge="Talk It Out"
            title={<>Questions Parents <span className="gradient-text">Can Ask</span></>}
            subtitle="Have an open conversation with your child using these questions. Their responses can help you gauge readiness."
          />

          <div className="grid md:grid-cols-2 gap-6 stagger-children">
            {discussionQuestions.map((dq) => (
              <div key={dq.question} className="animate-slide-up">
                <Card icon={dq.icon} className="h-full">
                  <p className="text-white font-semibold mb-3 text-base">{dq.question}</p>
                  <p className="text-dark-200 text-sm italic">💡 What to look for: {dq.tip}</p>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section id="parent-disclaimer" className="max-w-3xl mx-auto">
          <InfoBox type="warning" title="Important Reminder" id="parent-important-note">
            <p className="mb-2">
              Parents and guardians should make the final decision based on the child's maturity, experience, local laws, and riding environment.
            </p>
            <p>
              No checklist or quiz can substitute for a parent's judgment. This guide is a starting point for discussion, not a definitive assessment of readiness. Consider starting with supervised rides in safe areas before allowing independent riding.
            </p>
          </InfoBox>
        </section>
      </div>
    </div>
  )
}

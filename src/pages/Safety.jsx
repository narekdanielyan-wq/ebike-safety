import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import Button from '../components/Button'

const beforeRide = [
  { id: 'helmet', label: 'Wear a properly fitted helmet' },
  { id: 'brakes', label: 'Check that both brakes are working correctly' },
  { id: 'tires', label: 'Check tire pressure and condition' },
  { id: 'lights', label: 'Check that lights and reflectors are working' },
  { id: 'battery', label: 'Make sure the battery is securely installed and charged' },
  { id: 'function', label: 'Make sure the bike is functioning properly overall' },
]

const whileRiding = [
  { id: 'focused', label: 'Stay focused and alert at all times' },
  { id: 'traffic', label: 'Follow applicable traffic laws and signals' },
  { id: 'watch', label: 'Watch for cars, cyclists, and pedestrians' },
  { id: 'distracted', label: 'Avoid distracted riding (no phones, headphones, etc.)' },
  { id: 'speed', label: 'Ride at a speed appropriate for the environment and conditions' },
]

const gearItems = [
  {
    icon: '⛑️',
    title: 'Helmet',
    description: 'A properly fitted, certified helmet is the single most important piece of safety gear. It should sit level on your head and the straps should be snug under your chin.',
  },
  {
    icon: '💡',
    title: 'Lights & Reflectors',
    description: 'Front white light and rear red light are essential for visibility. Add reflectors to your wheels, pedals, and clothing for maximum visibility at night.',
  },
  {
    icon: '🧤',
    title: 'Gloves',
    description: 'Cycling gloves improve grip on handlebars, reduce vibration fatigue, and protect your hands in case of a fall.',
  },
  {
    icon: '👟',
    title: 'Appropriate Footwear',
    description: 'Wear closed-toe shoes with good grip. Avoid sandals, flip-flops, or loose footwear that could catch on pedals or the chain.',
  },
  {
    icon: '🦺',
    title: 'Optional Protective Equipment',
    description: 'Consider knee pads, elbow pads, and high-visibility vests — especially for newer riders or when riding near heavy traffic.',
  },
]

export default function Safety() {
  const [checkedBefore, setCheckedBefore] = useState({})
  const [checkedWhile, setCheckedWhile] = useState({})

  const toggleBefore = (id) => {
    setCheckedBefore((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const toggleWhile = (id) => {
    setCheckedWhile((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const checkAll = () => {
    const allBefore = {}
    beforeRide.forEach((item) => (allBefore[item.id] = true))
    const allWhile = {}
    whileRiding.forEach((item) => (allWhile[item.id] = true))
    setCheckedBefore(allBefore)
    setCheckedWhile(allWhile)
  }

  const uncheckAll = () => {
    setCheckedBefore({})
    setCheckedWhile({})
  }

  const totalChecked = Object.values(checkedBefore).filter(Boolean).length + Object.values(checkedWhile).filter(Boolean).length
  const totalItems = beforeRide.length + whileRiding.length
  const allChecked = totalChecked === totalItems

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Safety Guide"
          title={<>Your E-Bike <span className="gradient-text">Safety Checklist</span></>}
          subtitle="Go through this checklist before every ride. Preparation is the foundation of safe riding."
        />

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-dark-100">Safety Check Progress</span>
            <span className="text-sm font-bold text-electric-400">{totalChecked}/{totalItems}</span>
          </div>
          <div className="h-3 bg-dark-700 rounded-full overflow-hidden border border-dark-500">
            <div
              className="h-full bg-gradient-to-r from-electric-500 to-neon-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(totalChecked / totalItems) * 100}%` }}
            />
          </div>
          {allChecked && (
            <p className="text-neon-400 text-sm mt-2 text-center font-medium animate-scale-in">
              ✅ All checks complete! You're ready to ride safely.
            </p>
          )}
        </div>

        {/* Checklist Sections */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Before You Ride */}
          <div className="glass-card p-6 sm:p-8" id="checklist-before">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-electric-500/20 flex items-center justify-center text-xl">🔧</div>
              <h3 className="text-xl font-bold text-white">Before You Ride</h3>
            </div>
            <div className="space-y-4">
              {beforeRide.map((item) => (
                <label
                  key={item.id}
                  htmlFor={`before-${item.id}`}
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                    checkedBefore[item.id]
                      ? 'bg-neon-500/10 border border-neon-500/20'
                      : 'bg-dark-700/50 border border-transparent hover:border-dark-400'
                  }`}
                >
                  <input
                    type="checkbox"
                    id={`before-${item.id}`}
                    checked={!!checkedBefore[item.id]}
                    onChange={() => toggleBefore(item.id)}
                    className="safety-checkbox"
                  />
                  <span className={`text-sm transition-colors ${checkedBefore[item.id] ? 'text-white' : 'text-dark-100'}`}>
                    {item.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* While Riding */}
          <div className="glass-card p-6 sm:p-8" id="checklist-while">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-neon-500/20 flex items-center justify-center text-xl">🚴</div>
              <h3 className="text-xl font-bold text-white">While Riding</h3>
            </div>
            <div className="space-y-4">
              {whileRiding.map((item) => (
                <label
                  key={item.id}
                  htmlFor={`while-${item.id}`}
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                    checkedWhile[item.id]
                      ? 'bg-neon-500/10 border border-neon-500/20'
                      : 'bg-dark-700/50 border border-transparent hover:border-dark-400'
                  }`}
                >
                  <input
                    type="checkbox"
                    id={`while-${item.id}`}
                    checked={!!checkedWhile[item.id]}
                    onChange={() => toggleWhile(item.id)}
                    className="safety-checkbox"
                  />
                  <span className={`text-sm transition-colors ${checkedWhile[item.id] ? 'text-white' : 'text-dark-100'}`}>
                    {item.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Check Button */}
        <div className="text-center mb-20">
          <Button
            onClick={allChecked ? uncheckAll : checkAll}
            variant={allChecked ? 'secondary' : 'accent'}
            size="lg"
            id="quick-safety-check-btn"
          >
            {allChecked ? '↩️  Reset Checklist' : '⚡  Quick Safety Check — Mark All Complete'}
          </Button>
        </div>

        {/* Safety Gear */}
        <section id="safety-gear">
          <SectionHeader
            badge="Essential Gear"
            title={<>Safety <span className="gradient-text">Gear</span></>}
            subtitle="The right equipment can make a significant difference. Here's what every rider should have."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {gearItems.map((gear) => (
              <div key={gear.title} className="animate-slide-up">
                <Card icon={gear.icon} title={gear.title} className="h-full">
                  {gear.description}
                </Card>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

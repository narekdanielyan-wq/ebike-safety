import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'

const components = [
  {
    icon: '⚙️',
    title: 'Motor',
    description: 'The electric motor provides power to assist your pedaling or drive the bike independently. Most e-bikes use hub motors (in the wheel) or mid-drive motors (at the pedals). Hub motors are simpler and more affordable, while mid-drive motors provide better balance and hill-climbing ability.',
    detail: 'E-bike motors are measured in watts (W). Common ratings range from 250W to 750W. Higher wattage generally means more power, but local regulations may limit the maximum allowed.',
  },
  {
    icon: '🔋',
    title: 'Battery',
    description: 'The rechargeable battery stores the electrical energy that powers the motor. Most e-bikes use lithium-ion batteries, which are lightweight and long-lasting. Battery capacity is measured in watt-hours (Wh) — higher numbers mean more range per charge.',
    detail: 'Always charge the battery with the provided charger, store it at room temperature, and follow the manufacturer\'s guidelines. Never use a damaged battery.',
  },
  {
    icon: '🎛️',
    title: 'Controller',
    description: 'The controller is the electronic brain of the e-bike. It manages how much power flows from the battery to the motor based on your input (pedal assist level or throttle position). It also handles safety features like speed limiting and motor cutoff.',
    detail: 'You usually interact with the controller through a handlebar-mounted display or control panel.',
  },
  {
    icon: '🛑',
    title: 'Brakes',
    description: 'E-bikes typically use disc brakes (mechanical or hydraulic) for stronger, more reliable stopping power. This is important because e-bikes are heavier and faster than regular bicycles. Many e-bikes also have motor cutoff switches connected to the brake levers.',
    detail: 'When you squeeze the brake lever, the motor automatically shuts off to help you stop quickly and safely.',
  },
  {
    icon: '🏍️',
    title: 'Throttle',
    description: 'Some e-bikes have a throttle — a twist grip or thumb lever on the handlebar — that lets you power the motor without pedaling. This can be useful for starting from a stop or climbing steep hills, but it also requires careful control.',
    detail: 'Not all e-bikes have throttles. In some areas, throttle-equipped e-bikes may be classified differently and have different legal requirements.',
  },
  {
    icon: '🦿',
    title: 'Pedal Assist',
    description: 'Pedal assist (PAS) detects when you\'re pedaling and automatically engages the motor to help. You can usually choose different levels of assistance (low, medium, high). The motor only runs while you pedal, giving you a natural riding feel with extra power.',
    detail: 'Start with lower assist levels to learn how the bike responds. Higher levels deliver more power but drain the battery faster.',
  },
  {
    icon: '📊',
    title: 'Display',
    description: 'The handlebar-mounted display shows important information like current speed, battery level, assist mode, distance traveled, and sometimes navigation. Some displays are basic with simple readouts, while others have full-color screens.',
    detail: 'Learn to read your display before riding, but avoid staring at it while in motion — keep your eyes on the road.',
  },
  {
    icon: '💡',
    title: 'Lights',
    description: 'Many e-bikes come with built-in front and rear lights powered by the main battery. These are essential for visibility in low light conditions. Front lights illuminate your path, while rear lights (often with brake light function) make you visible to others.',
    detail: 'If your e-bike doesn\'t have built-in lights, add battery-powered ones before riding. Always use lights when visibility is reduced.',
  },
]

const controls = [
  {
    name: 'Power Button',
    icon: '🔘',
    purpose: 'Turns the e-bike\'s electrical system on and off. Always turn off when parking to conserve battery.',
  },
  {
    name: 'Assist Level (+/−)',
    icon: '⬆️⬇️',
    purpose: 'Increases or decreases the amount of motor assistance while pedaling. Start low and increase as needed.',
  },
  {
    name: 'Brake Levers',
    icon: '✋',
    purpose: 'Stops the bike. The left lever usually controls the rear brake, the right controls the front. Use both together for safest stopping. Motor cuts off automatically when brakes are engaged.',
  },
  {
    name: 'Throttle (if equipped)',
    icon: '👍',
    purpose: 'Provides motor power without pedaling. Use gently — sudden full throttle can cause the bike to surge forward unexpectedly.',
  },
  {
    name: 'Gear Shifter',
    icon: '🔄',
    purpose: 'Changes the mechanical gear ratio for easier pedaling uphill or faster pedaling on flat ground. Shift while pedaling lightly.',
  },
  {
    name: 'Bell / Horn',
    icon: '🔔',
    purpose: 'Alerts pedestrians and other riders of your presence. Use it politely when approaching from behind or at blind corners.',
  },
]

export default function Basics() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="E-Bike Basics"
          title={<>Understand Your <span className="gradient-text">E-Bike</span></>}
          subtitle="An e-bike has more parts than a regular bicycle. Learn what each component does and why it matters for safe riding."
        />

        {/* Components Grid */}
        <section id="ebike-components" className="mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {components.map((comp) => (
              <div key={comp.title} className="animate-slide-up">
                <div className="glass-card p-6 h-full group">
                  <div className="text-4xl mb-4">{comp.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{comp.title}</h3>
                  <p className="text-dark-100 text-sm leading-relaxed mb-3">{comp.description}</p>
                  <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100">
                    <p className="text-electric-400/80 text-xs leading-relaxed pt-3 border-t border-dark-500/50">
                      💡 {comp.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Know Your Controls */}
        <section id="know-controls">
          <SectionHeader
            badge="Essential Knowledge"
            title={<>Know Your <span className="gradient-text">Controls</span></>}
            subtitle="Before your first ride, make sure you can identify and understand every control on the handlebar."
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4 stagger-children">
              {controls.map((ctrl) => (
                <div key={ctrl.name} className="animate-slide-up">
                  <div className="glass-card p-5 flex items-start gap-4 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500/20 to-neon-500/20 border border-electric-500/20 flex items-center justify-center text-xl flex-shrink-0">
                      {ctrl.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">{ctrl.name}</h4>
                      <p className="text-dark-100 text-sm leading-relaxed">{ctrl.purpose}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

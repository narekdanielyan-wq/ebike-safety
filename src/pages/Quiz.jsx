import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import InfoBox from '../components/InfoBox'

const questions = [
  {
    id: 1,
    question: 'What should you always do before riding an e-bike?',
    options: [
      'Just hop on and go',
      'Check helmet, brakes, tires, lights, and battery',
      'Only check the battery level',
      'Ask a friend if the bike looks okay',
    ],
    correct: 1,
    explanation: 'A proper pre-ride check includes your helmet fit, brake function, tire condition, lights, and battery — every time.',
  },
  {
    id: 2,
    question: 'Why are intersections particularly important for e-bike riders?',
    options: [
      'They are good places to speed up',
      'Other vehicles may not see you or may not expect your speed',
      'You can ignore traffic signals on an e-bike',
      'Intersections are only dangerous for cars',
    ],
    correct: 1,
    explanation: 'Intersections are where most conflicts with other road users happen. Drivers may not expect how fast an e-bike moves, so extra caution is essential.',
  },
  {
    id: 3,
    question: 'What should you do if your brakes aren\'t working correctly?',
    options: [
      'Ride slowly and carefully to your destination',
      'Use only the front brake',
      'Stop riding immediately and get the brakes repaired before riding again',
      'Drag your feet to slow down',
    ],
    correct: 2,
    explanation: 'Riding with faulty brakes is extremely dangerous. Never ride an e-bike until the brakes are fully functional.',
  },
  {
    id: 4,
    question: 'Why should you avoid using your phone while riding?',
    options: [
      'It drains your phone battery faster',
      'It takes your attention away from the road and reduces reaction time',
      'It\'s only a problem for car drivers',
      'It makes the e-bike go slower',
    ],
    correct: 1,
    explanation: 'Distracted riding dramatically reduces your ability to react to hazards. Keep your phone stored safely and focus on the road.',
  },
  {
    id: 5,
    question: 'What should you do when approaching pedestrians?',
    options: [
      'Speed past them quickly to get out of the way',
      'Honk or yell to make them move',
      'Slow down, give them space, and pass carefully — they have the right of way',
      'Ride on the sidewalk next to them',
    ],
    correct: 2,
    explanation: 'Pedestrians are vulnerable road users. Always slow down, give them ample space, and pass with care. They generally have the right of way.',
  },
  {
    id: 6,
    question: 'Why is wearing a helmet important when riding an e-bike?',
    options: [
      'It keeps your head warm',
      'It protects your brain from serious injury in a crash — e-bikes travel at higher speeds than regular bikes',
      'It\'s only for beginners',
      'It makes you go faster',
    ],
    correct: 1,
    explanation: 'E-bikes can reach higher speeds than regular bicycles, meaning crashes can be more severe. A helmet significantly reduces the risk of serious head injury.',
  },
  {
    id: 7,
    question: 'What should you do if weather or road conditions become unsafe while riding?',
    options: [
      'Keep riding but go faster to get home sooner',
      'Find a safe place to stop and wait, or carefully ride to the nearest safe location',
      'Close your eyes during rain to protect them',
      'Conditions don\'t affect e-bikes',
    ],
    correct: 1,
    explanation: 'Wet, icy, or windy conditions reduce traction and visibility. Find a safe place to stop, or reduce speed significantly and ride with extreme caution.',
  },
  {
    id: 8,
    question: 'Why should riders understand local e-bike rules?',
    options: [
      'Rules are the same everywhere',
      'Because laws about where you can ride, speed limits, and age restrictions vary by location',
      'There are no rules for e-bikes',
      'Only adults need to know the rules',
    ],
    correct: 1,
    explanation: 'E-bike regulations vary significantly between cities, states, and countries. Knowing the local rules helps you ride legally and safely.',
  },
  {
    id: 9,
    question: 'What should you check on an e-bike before riding?',
    options: [
      'Only the color of the bike',
      'Helmet fit, brakes, tires, lights, battery, and overall bike function',
      'Just the seat height',
      'Nothing — e-bikes are always ready to ride',
    ],
    correct: 1,
    explanation: 'A thorough pre-ride inspection covers helmet, brakes, tires, lights, battery security, and overall mechanical function.',
  },
  {
    id: 10,
    question: 'What should you do if you are not confident controlling the bike?',
    options: [
      'Ride in heavy traffic to practice',
      'Practice in a safe, controlled area before riding on roads — or do not ride until you feel confident',
      'Have someone push you',
      'Just go fast and hope for the best',
    ],
    correct: 1,
    explanation: 'If you\'re not confident, practice in a safe area like an empty parking lot. Never ride on roads until you can control the bike reliably at various speeds.',
  },
]

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  const q = questions[currentQuestion]
  const isAnswered = selectedAnswers[q.id] !== undefined
  const isCorrect = selectedAnswers[q.id] === q.correct

  const handleSelect = (optionIndex) => {
    if (isAnswered) return
    setSelectedAnswers((prev) => ({ ...prev, [q.id]: optionIndex }))
    setShowExplanation(true)
  }

  const handleNext = () => {
    setShowExplanation(false)
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const handlePrev = () => {
    setShowExplanation(false)
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResult(false)
    setShowExplanation(false)
  }

  const score = questions.reduce((acc, q) => {
    return acc + (selectedAnswers[q.id] === q.correct ? 1 : 0)
  }, 0)

  const percentage = Math.round((score / questions.length) * 100)

  const getGrade = () => {
    if (score >= 8) return { emoji: '🟢', label: 'Strong Safety Knowledge', color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30' }
    if (score >= 5) return { emoji: '🟡', label: 'Review Some Safety Topics', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' }
    return { emoji: '🔴', label: 'Learn More Before Riding', color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30' }
  }

  const getReviewTopics = () => {
    const missed = questions.filter((q) => selectedAnswers[q.id] !== q.correct)
    return missed
  }

  if (showResult) {
    const grade = getGrade()
    const reviewTopics = getReviewTopics()

    return (
      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-scale-in">
            <div className="glass-card p-8 sm:p-12 text-center mb-8">
              <div className="text-6xl mb-4">{grade.emoji}</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Quiz Complete!</h2>
              <div className="text-6xl font-extrabold gradient-text my-6">
                {score}/{questions.length}
              </div>
              <p className="text-dark-100 text-lg mb-2">{percentage}% Correct</p>
              <div className={`inline-block px-6 py-2 rounded-full text-sm font-semibold ${grade.color} ${grade.bg} border ${grade.border} mt-4`}>
                {grade.label}
              </div>
            </div>

            {/* Review Topics */}
            {reviewTopics.length > 0 && (
              <div className="glass-card p-6 sm:p-8 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">📖 Topics to Review</h3>
                <div className="space-y-3">
                  {reviewTopics.map((topic) => (
                    <div key={topic.id} className="flex items-start gap-3 p-3 rounded-xl bg-dark-700/50 border border-dark-500/50">
                      <span className="text-red-400 mt-0.5">✗</span>
                      <div>
                        <p className="text-white text-sm font-medium mb-1">Q{topic.id}: {topic.question}</p>
                        <p className="text-dark-100 text-xs">{topic.explanation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <InfoBox type="info" title="About This Quiz" id="quiz-disclaimer">
              This quiz tests general e-bike safety knowledge. A passing score does not mean you are legally or physically ready to ride. Always consider your own experience, maturity, local laws, and riding environment.
            </InfoBox>

            <div className="text-center mt-8 flex flex-wrap gap-4 justify-center">
              <Button onClick={handleRestart} variant="primary" size="lg" id="quiz-restart-btn">
                ↩️  Retake Quiz
              </Button>
              <Button to="/safety" variant="secondary" size="lg" id="quiz-safety-btn">
                📋  Review Safety Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Safety Quiz"
          title={<>Are You <span className="gradient-text">Ready?</span></>}
          subtitle="Test your e-bike safety knowledge with 10 questions. Choose the best answer for each."
        />

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-dark-100">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-bold text-electric-400">
              {Object.keys(selectedAnswers).length}/{questions.length} answered
            </span>
          </div>
          <div className="h-2 bg-dark-700 rounded-full overflow-hidden border border-dark-500">
            <div
              className="h-full bg-gradient-to-r from-electric-500 to-neon-500 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
          {/* Dot indicators */}
          <div className="flex gap-1.5 mt-3 justify-center flex-wrap">
            {questions.map((_, i) => (
              <button
                key={i}
                onClick={() => { setShowExplanation(false); setCurrentQuestion(i) }}
                className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                  i === currentQuestion
                    ? 'bg-electric-400 scale-125'
                    : selectedAnswers[questions[i].id] !== undefined
                    ? selectedAnswers[questions[i].id] === questions[i].correct
                      ? 'bg-green-500'
                      : 'bg-red-500'
                    : 'bg-dark-400'
                }`}
                aria-label={`Go to question ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Question Card */}
        <div className="glass-card p-6 sm:p-8 mb-6 animate-fade-in" key={q.id}>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-6">
            <span className="text-electric-400 mr-2">Q{q.id}.</span>
            {q.question}
          </h3>

          <div className="space-y-3">
            {q.options.map((option, idx) => {
              let optionStyle = 'bg-dark-700/50 border border-dark-500/50 hover:border-electric-500/50 hover:bg-dark-600/50 cursor-pointer'

              if (isAnswered) {
                if (idx === q.correct) {
                  optionStyle = 'bg-green-500/15 border border-green-500/40'
                } else if (idx === selectedAnswers[q.id]) {
                  optionStyle = 'bg-red-500/15 border border-red-500/40'
                } else {
                  optionStyle = 'bg-dark-700/30 border border-dark-500/30 opacity-50'
                }
              }

              return (
                <button
                  key={idx}
                  id={`quiz-q${q.id}-option-${idx}`}
                  onClick={() => handleSelect(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${optionStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                      isAnswered && idx === q.correct
                        ? 'bg-green-500 text-white'
                        : isAnswered && idx === selectedAnswers[q.id]
                        ? 'bg-red-500 text-white'
                        : 'bg-dark-500 text-dark-100'
                    }`}>
                      {isAnswered && idx === q.correct ? '✓' : isAnswered && idx === selectedAnswers[q.id] ? '✗' : String.fromCharCode(65 + idx)}
                    </span>
                    <span className={`text-sm ${isAnswered && idx === q.correct ? 'text-green-300 font-medium' : isAnswered && idx === selectedAnswers[q.id] && !isCorrect ? 'text-red-300' : 'text-dark-100'}`}>
                      {option}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Explanation */}
          {showExplanation && isAnswered && (
            <div className={`mt-6 p-4 rounded-xl animate-scale-in ${isCorrect ? 'bg-green-500/10 border border-green-500/20' : 'bg-amber-500/10 border border-amber-500/20'}`}>
              <p className={`text-sm font-medium mb-1 ${isCorrect ? 'text-green-400' : 'text-amber-400'}`}>
                {isCorrect ? '✅ Correct!' : '💡 Not quite — here\'s why:'}
              </p>
              <p className="text-dark-100 text-sm">{q.explanation}</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            onClick={handlePrev}
            variant="ghost"
            size="md"
            id="quiz-prev-btn"
            className={currentQuestion === 0 ? 'invisible' : ''}
          >
            ← Previous
          </Button>

          {isAnswered && (
            <Button
              onClick={handleNext}
              variant="primary"
              size="md"
              id="quiz-next-btn"
            >
              {currentQuestion === questions.length - 1 ? 'See Results' : 'Next →'}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

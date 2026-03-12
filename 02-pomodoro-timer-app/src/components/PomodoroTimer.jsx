import { useEffect, useRef, useState } from 'react';

const radius = 120;
const circumference = 2 * Math.PI * radius;

function PomodoroTimer({ time = 1500 }) {
  const [started, setStarted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(time)
  let timerId = useRef(null)

  useEffect(() => {
    return () => clearInterval(timerId)
  }, [started])

  useEffect(() => {

  })

  const progress = timeLeft / time
  const offset = circumference * (1 - progress)

  const handleStartTimer = () => {
    setStarted(true)
    timerId.current = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0))
    }, 1000)
  }

  const handlePauseTimer = () => {
    setStarted(false)
    clearInterval(timerId.current)
  }

  const handleResetTimer = () => {
    setStarted(false)
    clearInterval(timerId.current)
    setTimeLeft(time)
  }

  return (
    <div className="text-center">
      <div className="relative w-72 h-72 mx-auto flex items-center justify-center">
        <svg className="absolute w-full h-full -rotate-90">
          <circle
            cx="144"
            cy="144"
            r={radius}
            stroke="#4B4F73"
            strokeWidth="8"
            fill="transparent"
          />

          <circle
            cx="144"
            cy="144"
            r={radius}
            stroke="#FF6B6B"
            strokeWidth="8"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>

        <div className="text-center text-white">
          <div className="text-5xl font-semibold">
            {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
          </div>
          <div className="text-lg opacity-80">minutes left</div>
        </div>
      </div>
      <div className="flex justify-center gap-10">
        <button
          className="cursor-pointer text-[#9c9fd4] px-2 py-1 border-b hover:text-white focus:text-white w-15"
          onClick={started ? handlePauseTimer : handleStartTimer}
          title={started ? 'Pause Timer' : 'Start Timer'}
          aria-keyshortcuts="S"
        >
          {started ? 'pause' : 'start'}
        </button>
        <button
          className="cursor-pointer text-[#9c9fd4] px-2 py-1 border-b hover:text-white focus:text-white w-15"
          onClick={handleResetTimer}
          title="Reset Timer"
          aria-keyshortcuts="R"
        >
          reset
        </button>
      </div>
    </div>
  )
}

export default PomodoroTimer

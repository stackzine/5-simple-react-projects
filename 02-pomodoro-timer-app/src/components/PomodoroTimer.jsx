import { useEffect, useRef, useState } from 'react'
import alarmSound from '../assets/alarm.mp3'

const radius = 120;
const circumference = 2 * Math.PI * radius;

function PomodoroTimer({ type, time = 1500 }) {
  const [started, setStarted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(time)
  let timerId = useRef(null)
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current = new Audio(alarmSound)
    audioRef.current.volume = 0.5
  }, [])

  useEffect(() => {
    if (timeLeft === 0 && audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
  
      const stopAudio = setTimeout(() => {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
        handleResetTimer()
      }, 11000)
  
      return () => clearTimeout(stopAudio)
    }
  }, [timeLeft])

  useEffect(() => {
    function handleKeyDown(e) {
      if(e.key.toLowerCase() === 's') {
        handleStartTimer()
      }

      if(e.key.toLowerCase() === 'p') {
        handlePauseTimer()
      }

      if(e.key.toLowerCase() === 'r') {
        handleResetTimer()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
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
    <section className="text-center" aria-describedby="timer-shortcuts">
      <p className="sr-only" id="timer-shortcuts">
        Keyboard shortcuts: press S to start, P to pause, and R to reset the timer, press F for focus timer and B for break timer
      </p>
      <div className="relative w-72 h-72 mx-auto flex items-center justify-center">
        <svg className="absolute w-full h-full -rotate-90">
          <circle
            cx="144"
            cy="144"
            r={radius}
            stroke={'#4B4F73'}
            strokeWidth="8"
            fill="transparent"
          />

          <circle
            cx="144"
            cy="144"
            className="motion-reduce:transition-none"
            r={radius}
            stroke={type === 'focus' ? '#FF6B6B' : '#51D88A'}
            strokeWidth="8"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>

        <div 
          className="text-center text-white"
          role="timer"
          aria-live="polite"
          aria-atomic="true"
        >
          <div 
            className="text-5xl font-semibold"
            aria-label={`${
              type === 'focus' ? 'Focus timer' : 'Break timer'
            } ${Math.floor(timeLeft / 60)} minutes ${timeLeft % 60} seconds remaining`}
          >
            {timeLeft === 0 ? 
              <span className="text-2xl">
                {focus ? 'Focus timer finished' : 'Break timer finished'}
              </span> : 
              <>
                {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
              </>
            }
          </div>
          <div className="text-lg opacity-80">minutes left</div>
        </div>
      </div>
      <div className="flex justify-center gap-10">
        <button
          className="cursor-pointer text-[#9c9fd4] px-2 py-1 border-b hover:text-white focus:text-white w-15"
          onClick={started ? handlePauseTimer : handleStartTimer}
          title={started ? 'Press P to pause timer' : 'Press S to start timer'}
          aria-keyshortcuts={started ? 'P' : 'S'}
          aria-label={started ? 'Pause timer' : 'Start timer'}
        >
          {started ? 'pause' : 'start'}
        </button>
        <button
          className="cursor-pointer text-[#9c9fd4] px-2 py-1 border-b hover:text-white focus:text-white w-15"
          onClick={handleResetTimer}
          title="Press R to reset timer"
          aria-keyshortcuts="R"
          aria-label="Reset timer"
        >
          reset
        </button>
      </div>
      <audio ref={audioRef} src={alarmSound} preload="auto" />
    </section>
  )
}

export default PomodoroTimer

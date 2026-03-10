function PomodoroTimer() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-medium mb-6">focus</h2>
      <div>
        25:00
        <span>minutes left</span>
      </div>
      <div>
      <button class="flex items-center gap-2 bg-white text-gray-800 px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 5l5 5-5 5V5z"/>
        </svg>
        Start Timer
      </button>
        <button>reset</button>
      </div>
    </div>
  )
}

export default PomodoroTimer

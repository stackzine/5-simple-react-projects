import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PomodoroTimer from './components/PomodoroTimer'
import PomodoroInfo from './components/PomodoroInfo'
import FancyButton from './components/FancyButton'

function App() {
  const [focus, setFocus] = useState(true)

  return (
    <div className="h-screen flex flex-col justify-between p-16 bg-linear-to-t from-[#1E2140] to-[#232750] text-white">
      <Header />
      <main className="flex flex-col justify-center">
        <PomodoroInfo />
        
        <div className="flex justify-center items-baseline gap-6 pb-4">
          <FancyButton name="focus" focus={focus} onclick={() => setFocus(true)} />
          <FancyButton name="break" focus={!focus} onclick={() => setFocus(false)} />
        </div>
    
        { focus ? <PomodoroTimer key="focus" time="1500" /> : <PomodoroTimer key="break" time="300" />}
      </main>
      <Footer />
    </div>
  )
}

export default App

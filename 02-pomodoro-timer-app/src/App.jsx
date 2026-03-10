import Header from './components/Header'
import Footer from './components/Footer'
import PomodoroTimer from './components/PomodoroTimer'
import PomodoroInfo from './components/PomodoroInfo'

function App() {
  return (
    <div className="h-screen flex flex-col justify-between p-16 bg-linear-to-t from-[#1E2140] to-[#232750] text-white">
      <Header />
      <main className="flex justify-center">
        <PomodoroTimer />
        <PomodoroInfo />
      </main>
      <Footer />
    </div>
  )
}

export default App

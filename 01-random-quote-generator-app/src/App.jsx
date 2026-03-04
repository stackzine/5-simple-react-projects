import Header from './components/Header';
import Quote from './components/Quote';
import Footer from './components/Footer';

function App() {
  return (
    <div className="h-screen flex flex-col justify-between p-16 bg-indigo-950">
      <Header />
      <main>
        <Quote />
      </main>
      <Footer />
    </div>
  )
}

export default App

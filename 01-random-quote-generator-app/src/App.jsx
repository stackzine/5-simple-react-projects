import Header from './components/Header';
import Quote from './components/Quote';
import Footer from './components/Footer';

function App() {
  return (
    <main className="h-screen flex flex-col justify-between p-16 bg-indigo-950">
      <Header />
      <Quote />
      <Footer />
    </main>
  )
}

export default App

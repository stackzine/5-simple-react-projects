import React from 'react'
import './styles.css'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col justify-between max-h-[80vh] h-[80vh] w-[80vw] xl:max-h-[70vh] xl:max-w-[60vw] p-4 bg-white rounded shadow-lg">
        <Header />
        <Footer />
      </div>
    </div>
  )
}

import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Footer from './components/Footer'
import EventPage from './pages/EventPage'
import EventEntry from './pages/EventEntry'
import './index.css'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/events/cse/:eventname" element={<EventPage department="cse" />} />
          <Route path="/events/aiml/:eventname" element={<EventPage department="aiml" />} />
          <Route path="/events/civil/:eventname" element={<EventPage department="civil" />} />
          <Route path="/events/arch/:eventname" element={<EventPage department="arch" />} />
          <Route path="/events/mech/:eventname" element={<EventPage department="mech" />} />
          <Route path="/events/chem/:eventname" element={<EventPage department="chem" />} />
          <Route path="/events/e&tc/:eventname" element={<EventPage department="e&tc" />} />
          <Route path="/events/ecell/:eventname" element={<EventPage department="ecell" />} />
          <Route path="/events/entry/" element={<EventEntry/>} />
          <Route path="*" element={<div className='flex flex-col justify-center items-center w-screen min-h-screen bg-[#e3e3e3] bg-[radial-gradient(#00000089,transparent_2px)] [background-size:20px_20px] p-4'>
  <h1 className='text-8xl sm:text-8xl md:text-8xl lg:text-9xl font-bold text-center gradient mb-6 sm:mb-8 fustat-heading'>
    404
  </h1>
  <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black/80 font-bold text-center manrope-paragraph max-w-4xl'>
    Page Not Found
  </p>
</div>
} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App

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
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App

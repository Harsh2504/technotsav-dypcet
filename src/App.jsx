import { useState, useEffect, Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import './index.css';
import { Analytics } from '@vercel/analytics/react';
import { FaArrowUp } from 'react-icons/fa';

// Lazy load components
const Landing = lazy(() => import('./pages/Landing'));
const EventPage = lazy(() => import('./pages/EventPage'));
const EventEntry = lazy(() => import('./pages/EventEntry'));

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = window.innerHeight * 1; // 20% of viewport height
      setShowScrollToTop(scrollPosition > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Analytics />
      <Router>
      <Suspense
          fallback={
            <div className="flex flex-col gap-6 justify-center items-center w-screen h-screen bg-[#e3e3e3]   p-4">
            <img
              src="https://res.cloudinary.com/dan454ywo/image/upload/v1744450467/f3f786dc-77ea-4d4a-b707-fbf5b358b046.png"
              className="w-35 h-35"
              alt="DYP Logo"
            />
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
          </div>
          }
        > 
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/events/cse/:eventname" element={<EventPage department="cse" />} />
            <Route path="/events/aiml/:eventname" element={<EventPage department="aiml" />} />
            <Route path="/events/civil/:eventname" element={<EventPage department="civil" />} />
            <Route path="/events/arch/:eventname" element={<EventPage department="arch" />} />
            <Route path="/events/mech/:eventname" element={<EventPage department="mech" />} />
            <Route path="/events/chem/:eventname" element={<EventPage department="chem" />} />
            <Route path="/events/e&tc/:eventname" element={<EventPage department="e&tc" />} />
            <Route path="/events/techl/:eventname" element={<EventPage department="techl" />} />
            <Route path="/events/entry/" element={<EventEntry />} />
            <Route
              path="*"
              element={
                <div className="flex flex-col justify-center items-center w-screen min-h-screen bg-[#e3e3e3] bg-[radial-gradient(#00000089,transparent_2px)] [background-size:20px_20px] p-4">
                  <h1 className="text-8xl sm:text-8xl md:text-8xl lg:text-9xl font-bold text-center gradient mb-6 sm:mb-8 fustat-heading">
                    404
                  </h1>
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black/80 font-bold text-center manrope-paragraph max-w-4xl">
                    Page Not Found
                  </p>
                </div>
              }
            />
          </Routes>
      <Footer />

        </Suspense>

      </Router>
      {showScrollToTop && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-white hover:bg-[#4e78da] transition-all ease-in rounded-full p-3 shadow-lg cursor-pointer group"
          style={{ zIndex: 1000 }}
        >
          <FaArrowUp className="text-[#4e78da]  group-hover:text-white  text-xl transition-all ease-in " />
        </div>
      )}
    </>
  );
}

export default App;
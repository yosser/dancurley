import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedWork from './components/FeaturedWork'
import Footer from './components/Footer'
import Portfolio from './pages/Portfolio'
import Loaded from './pages/Loaded'
//import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    window.scrollTo(0, 0);

    switch (currentPage) {
      case 'tv':
        return (
          <>
            <Portfolio primaryCategory="TV & Streaming" onNavigate={setCurrentPage} />
            <Footer setCurrentPage={setCurrentPage} />
          </>
        )
      case 'video-games':
        return (
          <>
            <Portfolio primaryCategory="Video Games" onNavigate={setCurrentPage} />
            <Footer setCurrentPage={setCurrentPage} />
          </>
        )
      case 'journalism':
        return (
          <>
            <Portfolio primaryCategory="Journalism" onNavigate={setCurrentPage} />
            <Footer setCurrentPage={setCurrentPage} />
          </>
        )
      case 'Loaded':
        return (
          <>
            <Loaded onNavigate={setCurrentPage} />
            <Footer setCurrentPage={setCurrentPage} />
          </>
        )
      /*case 'about':
        return (
          <>
            <About />
            <Footer setCurrentPage={setCurrentPage} />
          </>
        ) */
      case 'contact':
        return (
          <>
            <Contact />
            <Footer setCurrentPage={setCurrentPage} />
          </>
        )
      default:
        return (
          <>
            <Hero />
            <FeaturedWork onNavigate={setCurrentPage} />
            {/*<Testimonial />*/}
            {/*<Services /> */}
            <Footer setCurrentPage={setCurrentPage} />
          </>
        )
    }
    window.scrollTo(0, 0);
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
    </div>
  )
}

export default App

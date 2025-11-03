import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedWork from './components/FeaturedWork'
// import Footer from './components/Footer'
import Portfolio from './pages/Portfolio'
import Gallery from './pages/Gallery'
//import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [gallery, setGallery] = useState('');

  const renderPage = () => {
    window.scrollTo(0, 0);
    let portfolioName = ''
    if (currentPage === 'tv') {
      portfolioName = 'TV & Streaming';
    } else if (currentPage === 'video-games') {
      portfolioName = 'Video Games';
    } else if (currentPage === 'journalism') {
      portfolioName = 'Journalism';
    }

    if (portfolioName.length > 0) {
      return (
        <>
          <Portfolio primaryCategory={portfolioName as 'TV & Streaming' | 'Video Games' | 'Journalism'} setGallery={setGallery} />
          {gallery.length > 0 ? <Gallery gallery={gallery} onClose={() => setGallery('')} /> : null}

        </>
      )
    }
    else {
      switch (currentPage) {
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
              {/*<Footer setCurrentPage={setCurrentPage} />*/}
            </>
          )
        default:
          return (
            <>
              <Hero />
              <FeaturedWork onNavigate={setCurrentPage} />
              {/*<Testimonial />*/}
              {/*<Services /> */}
              {/*<Footer setCurrentPage={setCurrentPage} />*/}
            </>
          )
      }
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
    </div>
  )
}

export default App

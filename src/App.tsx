import { useState, useEffect, useRef } from 'react';
//import { usePocket } from './hooks/usePocket'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedWork from './components/FeaturedWork'
// import Footer from './components/Footer'
import Portfolio from './pages/Portfolio'
import Gallery from './pages/Gallery'
//import About from './pages/About'
import Contact from './pages/Contact';
import { useGetCollection } from './hooks/useGetCollection';
import { usePocket } from './hooks/usePocket';


function App() {
  const loginRef = useRef(false);
  const { pb, login, token } = usePocket();
  const [currentPage, setCurrentPage] = useState('home');
  const [gallery, setGallery] = useState('');
  const allPrimaryCategories = useGetCollection(pb, token, 'category', 'image');

  useEffect(() => {
    if (!loginRef.current) {
      loginRef.current = true;
      login(import.meta.env.VITE_USER_EMAIL, import.meta.env.VITE_USER_PASSWORD);
    }
  }, [login]);

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
          <Portfolio primaryCategory={portfolioName as 'TV & Streaming' | 'Video Games' | 'Journalism'} setGallery={setGallery} show={gallery.length === 0} />
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
              <FeaturedWork onNavigate={setCurrentPage} categories={allPrimaryCategories} />
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
      <Header onNavigate={setCurrentPage} currentPage={currentPage} categories={allPrimaryCategories} />
      {renderPage()}
    </div>
  )
}

export default App

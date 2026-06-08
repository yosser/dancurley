import { useState, useEffect } from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedWork from './components/FeaturedWork'
// import Footer from './components/Footer'
import Portfolio from './pages/Portfolio'
import Gallery from './pages/Gallery'
//import About from './pages/About'
import Contact from './pages/Contact';
import { useSubscribe } from './hooks/useSubscribe';
import { usePocket } from './hooks/usePocket';
import type { ICategory } from './interfaces';


function App() {
  const { pb, login, token } = usePocket();
  const [currentPage, setCurrentPage] = useState('home');
  const [gallery, setGallery] = useState('');
  const allPrimaryCategories = useSubscribe(pb, 'category', false, undefined, 'image') as ICategory[];

  useEffect(() => {
    if (token.length === 0) {
      login(import.meta.env.VITE_USER_EMAIL, import.meta.env.VITE_USER_PASSWORD);
    }
  }, [login, token]);

  const renderPage = () => {
    window.scrollTo(0, 0);
    const primaryCategory = allPrimaryCategories.find(pc => pc.nav === currentPage);

    if (primaryCategory) {
      return (
        <>
          <Portfolio primaryCategoryId={primaryCategory.id} setGallery={setGallery} show={gallery.length === 0} />
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

  return ((allPrimaryCategories.length > 0) && (pb !== null)) ? <div className="min-h-screen bg-black text-white">
    <Header onNavigate={setCurrentPage} currentPage={currentPage} categories={allPrimaryCategories} />
    {renderPage()}
  </div>
    : null
}

export default App

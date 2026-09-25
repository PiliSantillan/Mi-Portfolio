import React, { useState, useEffect } from 'react';
import './index.css';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#050b12', color: '#ffffff' }}>
      
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.35,
          pointerEvents: 'none'
        }}
      >
        <source src="/bg-cyberpunk.mp4" type="video/mp4" />
      </video>

      {/* Contenido principal */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {loading && <Preloader />}
        <Navbar />
        <Hero /> 
        <About />
        <Experience />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}

export default App;
import React from 'react';

function Header({ nombre = "PILAR.DEV" }) {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '300%',
        backgroundColor: 'rgba(18, 18, 26, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #ff0055',
        boxShadow: '0 0 15px rgba(255, 0, 85, 0.25)',
        padding: '10px 12px',
        boxSizing: 'border-box'
      }}
    >
      <style>{`
        .nav-container::-webkit-scrollbar {
          display: none;
        }
        .nav-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
          gap: '10px',
          width: '100%'
        }}
      >
        
        <h2
          style={{
            margin: 0,
            color: '#ff0055',
            fontFamily: "'Rajdhani', 'Monaco', monospace, sans-serif",
            fontSize: 'clamp(0.95rem, 4vw, 1.2rem)',
            fontWeight: 'bold',
            letterSpacing: '1px',
            textShadow: '0 0 10px rgba(255, 0, 85, 0.5)',
            whiteSpace: 'nowrap',
            flexShrink: 0
          }}
        >
           {nombre}
        </h2>

      
        <nav
          className="nav-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            padding: '4px 0'
          }}
        >
          <a
            href="#About"
            style={{
              color: '#a0a0b0',
              textDecoration: 'none',
              fontSize: 'clamp(0.7rem, 3vw, 0.85rem)',
              fontFamily: 'monospace',
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap'
            }}
          >
            SOBRE MÍ
          </a>
          <a
            href="#experience"
            style={{
              color: '#a0a0b0',
              textDecoration: 'none',
              fontSize: 'clamp(0.7rem, 3vw, 0.85rem)',
              fontFamily: 'monospace',
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap'
            }}
          >
            EXPERIENCIA
          </a>
          <a
            href="#contact"
            style={{
              color: '#a0a0b0',
              textDecoration: 'none',
              fontSize: 'clamp(0.7rem, 3vw, 0.85rem)',
              fontFamily: 'monospace',
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap'
            }}
          >
            CONTACTO
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
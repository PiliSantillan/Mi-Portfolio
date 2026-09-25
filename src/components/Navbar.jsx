import React from 'react';

function Navbar() {
  return (
    <div className="custom-navbar-capsule">
      <style>{`
      
        .custom-navbar-capsule {
          position: fixed;
          top: 15px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          width: 150%;
          max-width: 750px;
          background-color: rgba(10, 10, 18, 0.9);
          backdrop-filter: blur(12px);
          border: 1px solid #ff0077; 
          box-shadow: 0 0 15px rgba(255, 0, 119, 0.35);
          padding: 10px 44px;
          box-sizing: border-box;
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 16px;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #ffffff;
          font-family: monospace;
          font-weight: bold;
          font-size: 1.05rem;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .nav-links-container {
          display: flex;
          align-items: center;
          gap: 20px;
          overflow-x: auto;
          white-space: nowrap;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .nav-links-container::-webkit-scrollbar {
          display: none;
        }

        .nav-item {
          color: #ffffff;
          text-decoration: none;
          font-family: monospace;
          font-size: 0.85rem;
          font-weight: bold;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

      

        @media (max-width: 600px) {
          .custom-navbar-capsule {
            top: 10px;
            width: 94%;
            padding: 8px 12px;
            border-radius: 20px;
          }

          .nav-inner {
            gap: 8px;
          }

          .nav-brand {
            font-size: 0.82rem;
            gap: 4px;
          }

          .nav-links-container {
            gap: 10px;
          }

          .nav-item {
            font-size: 0.68rem;
            letter-spacing: 0px;
          }
        }
      `}</style>

      <div className="nav-inner">
        {/* LOGO: • PILAR .DEV */}
        <div className="nav-brand">
          <span style={{ color: '#ff0077', fontSize: '1.1rem' }}>•</span>
          <span>PILAR</span>
          <span style={{ color: '#ff0077' }}>.DEV</span>
        </div>

        
        <nav className="nav-links-container">
          <a href="#hero" className="nav-item">
            SOBRE MÍ
          </a>
          <a href="#experience" className="nav-item">
            EXPERIENCIA
          </a>
          <a href="#contact" className="nav-item">
            CONTACTO
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
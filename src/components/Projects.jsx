import React from 'react';

function Projects() {
  return (
    <div style={{
      backgroundColor: 'rgba(10, 18, 30, 0.85)',
      border: '1px solid #00f0ff',
      borderRadius: '16px',
      padding: '28px 24px',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 0 25px rgba(0, 240, 255, 0.25)',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '100%',
      maxWidth: '420px',
      boxSizing: 'border-box'
    }}>
      


      


      <style>{`
        @keyframes cyberSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes barPulse {
          0%, 100% { width: 35%; opacity: 0.6; }
          50% { width: 85%; opacity: 1; }
        }
        @keyframes textGlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>




      

      <div>
        <div style={{
          fontFamily: 'monospace',
          color: '#00f0ff',
          fontSize: '0.85rem',
          letterSpacing: '2px',
          marginBottom: '4px'
        }}>
          // RECENT WORK
        </div>
        <h3 style={{
          fontFamily: 'monospace',
          color: '#ffffff',
          fontSize: '1.8rem',
          fontWeight: 900,
          margin: 0,
          letterSpacing: '2px',
          textShadow: '0 0 10px rgba(0, 240, 255, 0.5)'
        }}>
          PROYECTOS
        </h3>
      </div>


      

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '24px 16px',
        gap: '16px',
        backgroundColor: 'rgba(5, 11, 18, 0.6)',
        border: '1px dashed rgba(0, 240, 255, 0.3)',
        borderRadius: '12px'
      }}>




        <div style={{ position: 'relative', width: '60px', height: '60px' }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '2px solid transparent',
            borderTopColor: '#00f0ff',
            borderRightColor: '#ff007f',
            animation: 'cyberSpin 1.5s linear infinite'
          }} />
          <div style={{
            position: 'absolute',
            inset: '8px',
            borderRadius: '50%',
            border: '2px solid transparent',
            borderBottomColor: '#00ff66',
            borderLeftColor: '#00f0ff',
            animation: 'cyberSpin 1s linear infinite reverse'
          }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem'
          }}>
            ⚙️
          </div>
        </div>




        <div style={{
          fontFamily: 'monospace',
          fontSize: '0.7rem',
          color: '#ff007f',
          backgroundColor: 'rgba(255, 0, 127, 0.1)',
          border: '1px solid rgba(255, 0, 127, 0.5)',
          padding: '3px 10px',
          borderRadius: '12px',
          letterSpacing: '1px',
          fontWeight: 'bold',
          animation: 'textGlow 2s infinite'
        }}>
          [ STATUS: TRABAJANDO... ]
        </div>






        <div>
          <p style={{
            color: '#cbd5e1',
            fontSize: '0.85rem',
            margin: '0 0 12px 0',
            lineHeight: '1.4',
            fontFamily: 'sans-serif'
          }}>
            Finalizando la web de <b>Motorepuestos</b> ¡Pronto en vivo!
          </p>

          <div style={{
            width: '100%',
            height: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              backgroundColor: '#00f0ff',
              boxShadow: '0 0 8px #00f0ff',
              borderRadius: '10px',
              animation: 'barPulse 2.5s ease-in-out infinite'
            }} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Projects;
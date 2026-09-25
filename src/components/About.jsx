import React from 'react';

function About() {
  return (
    <section 
      id="about"
      style={{
        width: '100%',
        minHeight: '100vh',
        padding: '100px 20px 60px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box'
      }}
    >
      <div style={{
        maxWidth: '1100px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        gap: 'clamp(20px, 4vw, 60px)',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <div style={{
          flexShrink: 0,
          width: '350px',
          maxWidth: '100%',
          height: '500px',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 0 40px rgba(0, 240, 255, 0.25)'
        }}>
          <img 
            src="/fotoPili.jpg" 
            alt="Pilar"
            style={{
              width: '350px',
              height: '500px',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block'
            }}
          />
        </div>

        <div style={{ flex: '1 1 300px', maxWidth: '600px' }}>
          <h2 style={{
            fontFamily: 'monospace',
            color: '#00f0ff',
            textShadow: '0 0 12px #47bae8',
            fontSize: 'clamp(2.5rem, 5vw, 4.1rem)',
            fontWeight: 950,
            letterSpacing: '3px',
            margin: '0 0 15px 0'
          }}>
            SOBRE MÍ
          </h2>

          <h3 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: 'bold',
            color: '#dee3e9',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            <span style={{ color: '#eddde5' }}>
              Código, creatividad
            </span>{' '}
            y curiosidad.
          </h3>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#cbd5e1',
            fontFamily: 'sans-serif',
            marginBottom: '30px'
          }}>
            Estoy construyendo mi camino en el mundo de la programación, creando proyectos que combinan tecnología, diseño y una mirada propia. Siempre aprendiendo, experimentando y buscando convertir una idea en algo que cobre vida.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
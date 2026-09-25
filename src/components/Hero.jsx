import React from 'react';
import Projects from './Projects';

function Hero() {
  const techSkills = [
    { name: 'Java', desc: 'Programación y desarrollo orientado a objetos.' },
    { name: 'JavaScript', desc: 'Desarrollo web, manejo del DOM, funciones, módulos y consumo de APIs.' },
    { name: 'HTML5', desc: 'Estructura y desarrollo de páginas web.' },
    { name: 'CSS3', desc: 'Estilos, diseño responsive, animaciones e interfaces.' },
    { name: 'SQL / SQLite', desc: 'Consultas, filtros, conteos y manejo de bases de datos.' }
  ];

  const toolSkills = [
    { name: 'Axios', desc: 'Consumo de APIs desde JavaScript.' },
    { name: 'UML', desc: 'Modelado y análisis de sistemas.' },
    { name: 'Canva', desc: 'Diseño visual y contenido.' },
  ];

  return (
    <section 
      id="hero"
      style={{
        width: '100%',
        minHeight: '100vh',
        padding: '120px 20px 60px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <style>{`
        @keyframes floatCenterAvatar {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        
        /* barrita neón para la lista de skills */
        .cyber-skills-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .cyber-skills-scroll::-webkit-scrollbar-track {
          background: rgba(5, 11, 18, 0.5);
        }
        .cyber-skills-scroll::-webkit-scrollbar-thumb {
          background: #00f0ff;
          border-radius: 4px;
          box-shadow: 0 0 8px #00f0ff;
        }
      `}</style>


      {/*parto la pantaalla rn tres columans */}
      <div style={{
        maxWidth: '1280px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        alignItems: 'center',
        gap: '30px',
        position: 'relative',
        zIndex: 1
      }}>

        {/* izquierda*/}

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <div>

            <h1 style={{
              fontFamily: 'monospace',
              color: '#00f0ff',
              fontSize: '2.8rem',
              margin: 0,
              textShadow: '0 0 18px #00f0ff',
              fontWeight: 950,
              letterSpacing: '8px'
            }}>
              ¡HOLA, SOY PILAR!
            </h1>
          </div>



          <div style={{
            backgroundColor: 'rgba(10, 18, 30, 0.85)',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            borderRadius: '16px',
            padding: '20px',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
            maxWidth: '380px'
          }}>
            <div style={{
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              color: '#00f0ff',
              letterSpacing: '2px',
              marginBottom: '14px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(0, 240, 255, 0.15)',
              paddingBottom: '8px'
            }}>
              <span>// TECH STACK & TOOLS</span>
              <span style={{ fontSize: '0.7rem', color: '#ff007f' }}>v2.4</span>
            </div>
           
            <div 
              className="cyber-skills-scroll"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                maxHeight: '320px',
                overflowY: 'auto',
                paddingRight: '6px'
              }}
            >
                

              <div>
                <div style={{
                  fontFamily: 'monospace',
                  fontSize: '0.75rem',
                  color: '#ff007f',
                  fontWeight: 'bold',
                  letterSpacing: '1.5px',
                  marginBottom: '10px'
                }}>
                  &gt; LENGUAJES Y TECNOLOGÍAS
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {techSkills.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: 'rgba(0, 240, 255, 0.03)',
                        borderLeft: '3px solid #00f0ff',
                        padding: '8px 12px',
                        borderRadius: '0 8px 8px 0'
                      }}
                    >
                      <div style={{
                        fontFamily: 'monospace',
                        color: '#00f0ff',
                        fontSize: '0.85rem',
                        fontWeight: 'bold'
                      }}>
                        {item.name}
                      </div>
                      <div style={{
                        color: '#cbd5e1',
                        fontSize: '0.75rem',
                        marginTop: '2px',
                        lineHeight: '1.3'
                      }}>
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              
              <div>
                <div style={{
                  fontFamily: 'monospace',
                  fontSize: '0.75rem',
                  color: '#ff007f',
                  fontWeight: 'bold',
                  letterSpacing: '1.5px',
                  marginBottom: '10px'
                }}>
                  &gt; HERRAMIENTAS Y ADICIONALES
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {toolSkills.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: 'rgba(255, 0, 127, 0.03)',
                        borderLeft: '3px solid #ff007f',
                        padding: '8px 12px',
                        borderRadius: '0 8px 8px 0'
                      }}
                    >
                      <div style={{
                        fontFamily: 'monospace',
                        color: '#ffffff',
                        fontSize: '0.85rem',
                        fontWeight: 'bold'
                      }}>
                        {item.name}
                      </div>
                      <div style={{
                        color: '#cbd5e1',
                        fontSize: '0.75rem',
                        marginTop: '2px',
                        lineHeight: '1.3'
                      }}>
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

       
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          animation: 'floatCenterAvatar 4s ease-in-out infinite'
        }}>
          <img 
            src="/nuevoAvatarPili.png" 
            alt="Pilar Avatar"
            style={{
              width: '100%',
              maxWidth: '380px',
              maxHeight: '500px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 25px rgba(0, 240, 255, 0.45))'
            }}
          />
        </div>

        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Projects />
        </div>

      </div>
    </section>
  );
}

export default Hero;
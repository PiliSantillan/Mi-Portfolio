import React, { useState } from 'react';

const CONTACT_LINKS = [
  {
    id: 1,
    name: 'EMAIL',
    value: 'pilarsantillanlescano@gmail.com',
    copyValue: 'pilarsantillanlescano@gmail.com',
    link: 'mailto:pilarsantillanlescano@gmail.com',
    color: '#00f0ff'
  },
  {
    id: 2,
    name: 'INSTAGRAM',
    value: '@pili.santillan__',
    copyValue: 'https://instagram.com/pili.santillan__',
    link: 'https://instagram.com/pili.santillan__',
    color: '#ff007f'
  },
  {
    id: 3,
    name: 'WHATSAPP',
    value: '+54 9 381 355-4980',
    copyValue: '+5493813554980',
    link: 'https://wa.me/5493813554980',
    color: '#00ff66'
  },
  {
    id: 4,
    name: 'GITHUB',
    value: 'github.com/PiliSantillan',
    copyValue: 'https://github.com/PiliSantillan',
    link: 'https://github.com/PiliSantillan',
    color: '#00f0ff'
  }
];

function Contact() {
  const [copiedId, setCopiedId] = useState(null);
  const [activeColor, setActiveColor] = useState('#00f0ff');

  const handleCopy = async (e, item) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(item.copyValue);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (error) {
      console.error('Error al copiar al portapapeles:', error);
    }
  };

  return (
    <section 
      id="contact"
      style={{
        width: '100%',
        minHeight: '85vh',
        padding: '100px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box'
      }}
    >
      <style>{`
        @keyframes floatAvatar {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
        .avatar-img {
          width: 100%;
          max-height: 460px;
          object-fit: contain;
          animation: floatAvatar 4s ease-in-out infinite;
          transition: filter 0.4s ease, transform 0.3s ease;
          cursor: pointer;
        }
        .avatar-img:hover {
          transform: scale(1.04);
        }
      `}</style>

      <div style={{
        maxWidth: '1100px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '60px',
        flexWrap: 'wrap'
      }}>
        <div style={{
          flex: '1 1 320px',
          maxWidth: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            backgroundColor: activeColor,
            filter: 'blur(80px)',
            opacity: 0.25,
            transition: 'background-color 0.5s ease, opacity 0.5s ease',
            pointerEvents: 'none'
          }} />

          <img 
            src="/pilarAbout.png" 
            alt="Avatar de Pilar"
            className="avatar-img"
            style={{
              filter: `drop-shadow(0 0 25px ${activeColor}88)`
            }}
          />
        </div>

        <div style={{
          flex: '1 1 480px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '20px',
            backgroundColor: 'rgba(0, 255, 102, 0.08)',
            border: '1px solid rgba(0, 255, 102, 0.4)',
            width: 'fit-content'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#00ff66',
              boxShadow: '0 0 8px #00ff66',
              animation: 'pulseDot 1.8s infinite'
            }} />
            <span style={{
              fontFamily: 'monospace',
              fontSize: '0.8rem',
              color: '#00ff66',
              letterSpacing: '1px',
              fontWeight: 'bold'
            }}>
              STATUS: DISPONIBLE / CONTACTO DIRECTO
            </span>
          </div>

          <div>
            <h2 style={{
              fontFamily: 'monospace',
              color: '#00f0ff',
              textShadow: '0 0 16px #00f0ff',
              fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
              fontWeight: 950,
              letterSpacing: '3px',
              margin: 0
            }}>
              CONTACTO
            </h2>
            <p style={{
              fontSize: '1.05rem',
              color: '#cbd5e1',
              fontFamily: 'sans-serif',
              marginTop: '10px',
              lineHeight: '1.6'
            }}>
              Selecciona cualquier canal para acceder directamente o copiar la información con un clic.
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}>
            {CONTACT_LINKS.map((item) => {
              const isCopied = copiedId === item.id;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveColor(item.color)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 18px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(10, 18, 30, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${activeColor === item.color ? item.color : 'rgba(255, 255, 255, 0.1)'}`,
                    transition: 'all 0.3s ease',
                    boxShadow: activeColor === item.color ? `0 0 15px ${item.color}33` : 'none'
                  }}
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      textDecoration: 'none',
                      flex: 1
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{
                        fontFamily: 'monospace',
                        fontSize: '0.75rem',
                        color: '#94a3b8',
                        letterSpacing: '1px'
                      }}>
                        {item.name}
                      </span>
                      <span style={{
                        fontFamily: 'monospace',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        color: item.color,
                        letterSpacing: '0.5px'
                      }}>
                        {item.value}
                      </span>
                    </div>
                  </a>

                  <button
                    onClick={(e) => handleCopy(e, item)}
                    title="Copiar al portapapeles"
                    aria-label={`Copiar ${item.name} al portapapeles`}
                    style={{
                      backgroundColor: isCopied ? item.color : 'transparent',
                      color: isCopied ? '#050b12' : item.color,
                      border: `1px solid ${item.color}`,
                      borderRadius: '8px',
                      padding: '6px 14px',
                      fontFamily: 'monospace',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      outline: 'none',
                      letterSpacing: '1px'
                    }}
                  >
                    {isCopied ? 'COPIADO!' : 'COPIAR'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
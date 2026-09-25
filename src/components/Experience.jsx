import React, { useState } from 'react';

const EXPERIENCES = [
  {
    id: 1,
    code: 'LOG_01',
    role: 'Estudiante de Programación',
    company: 'Tecnicatura Universitaria en Programación',
    period: '2024 — PRESENTE',
    location: 'Argentina',
    description:
      'Actualmente estoy cursando la Tecnicatura Universitaria en Programación, construyendo mis bases en programación, desarrollo de aplicaciones, bases de datos y análisis de sistemas.',
    highlights: [
      'Aprendizaje de programación orientada a objetos y resolución de problemas.',
      'Trabajo con Java, JavaScript, HTML, CSS y SQL/SQLite.',
      'Estudio de análisis y diseño de sistemas utilizando UML.',
      'Desarrollo de trabajos y proyectos como parte de mi formación académica.'
    ],
    technologies: ['Java', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'SQLite', 'UML']
  },
  {
    id: 2,
    code: 'LOG_02',
    role: 'Proyectos Académicos & Personales',
    company: 'Laboratorio Personal',
    period: '2024 — PRESENTE',
    location: 'En desarrollo',
    description:
      'Utilizo proyectos académicos y personales para poner en práctica lo aprendido, experimentar con nuevas ideas y descubrir qué áreas de la programación despiertan mayor interés en mí.',
    highlights: [
      'Creación de pequeños proyectos para practicar programación.',
      'Desarrollo de interfaces utilizando HTML, CSS y JavaScript.',
      'Trabajo con datos, consultas y bases de datos SQLite.',
      'Experimentación con diseño, lógica y diferentes tecnologías.'
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Java', 'SQLite']
  },
  {
    id: 3,
    code: 'LOG_03',
    role: 'Próximo objetivo',
    company: 'Explorando Ciberseguridad',
    period: 'PRÓXIMAMENTE',
    location: 'En aprendizaje',
    description:
      'Uno de mis objetivos a futuro es orientar mi formación hacia la Ciberseguridad y el Hacking Ético. Actualmente es un área que me genera curiosidad y que quiero comenzar a explorar a medida que avance en mi formación.',
    highlights: [
      'Interés por comprender cómo funcionan los sistemas y las redes.',
      'Curiosidad por la seguridad informática y las vulnerabilidades.',
      'Objetivo de comenzar a formarme en Ciberseguridad.',
      'Construcción progresiva de conocimientos antes de especializarme.'
    ],
    technologies: ['Ciberseguridad', 'Redes', 'Linux', 'Hacking Ético']
  }
];

function Experience() {
  const [activeId, setActiveId] = useState(1);

  const activeExp = EXPERIENCES.find(exp => exp.id === activeId) || EXPERIENCES[0];

  return (
    <section
      id="experience"
      style={{
        width: '100%',
        minHeight: '100vh',
        padding: '120px 20px 80px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box'
      }}
    >
      <style>{`
        .exp-tab-btn {
          background-color: rgba(10, 18, 30, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 18px 20px;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
        }
        .exp-tab-btn:hover:not(.active) {
          border-color: rgba(0, 240, 255, 0.4);
          background-color: rgba(0, 240, 255, 0.05);
          transform: translateX(4px);
        }
        .exp-tab-btn.active {
          background-color: rgba(0, 240, 255, 0.12);
          border: 1px solid #00f0ff;
          box-shadow: 0 0 15px rgba(0, 240, 255, 0.3);
        }
        @keyframes fadeInPanel {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .panel-anim {
          animation: fadeInPanel 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      <div style={{ maxWidth: '1050px', width: '100%' }}>
        <h2
          style={{
            fontFamily: 'monospace',
            color: '#00f0ff',
            textShadow: '0 0 16px #00f0ff',
            fontSize: 'clamp(2.5rem, 5vw, 4.1rem)',
            fontWeight: 950,
            letterSpacing: '3px',
            margin: '0 0 10px 0'
          }}
        >
          MI RECORRIDO
        </h2>

        <p
          style={{
            fontSize: '1.1rem',
            color: '#cbd5e1',
            fontFamily: 'sans-serif',
            marginBottom: '50px'
          }}
        >
          Explorá mi formación, mis proyectos y el camino que estoy construyendo.
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '30px',
            flexWrap: 'wrap',
            alignItems: 'stretch'
          }}
        >
          <div
            role="tablist"
            aria-label="Selección de experiencia"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              flex: '1 1 260px'
            }}
          >
            {EXPERIENCES.map((exp) => {
              const isActive = exp.id === activeId;

              return (
                <button
                  key={exp.id}
                  id={`tab-${exp.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${exp.id}`}
                  onClick={() => setActiveId(exp.id)}
                  className={`exp-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <div
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.8rem',
                      color: isActive ? '#ff007f' : '#8892b0',
                      fontWeight: 'bold',
                      marginBottom: '4px'
                    }}
                  >
                    [{exp.code}]
                  </div>

                  <div
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      color: isActive ? '#ffffff' : '#cbd5e1',
                      lineHeight: '1.2'
                    }}
                  >
                    {exp.role}
                  </div>

                  <div
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.85rem',
                      color: '#00f0ff',
                      marginTop: '6px'
                    }}
                  >
                    {exp.period}
                  </div>
                </button>
              );
            })}
          </div>

          <div
            key={activeExp.id}
            id={`panel-${activeExp.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeExp.id}`}
            className="panel-anim"
            style={{
              flex: '2 2 500px',
              backgroundColor: 'rgba(10, 18, 30, 0.75)',
              backdropFilter: 'blur(14px)',
              borderRadius: '16px',
              border: '1px solid rgba(0, 240, 255, 0.25)',
              padding: '35px',
              boxShadow: '0 10px 35px rgba(0,0,0,0.5), inset 0 0 20px rgba(0, 240, 255, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '10px',
                  marginBottom: '15px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '0.85rem',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    backgroundColor: 'rgba(255, 0, 127, 0.15)',
                    border: '1px solid #ff007f',
                    color: '#ff007f',
                    fontWeight: 'bold'
                  }}
                >
                  {activeExp.period}
                </span>

                <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '0.85rem',
                    color: '#8892b0'
                  }}
                >
                  📍 {activeExp.location}
                </span>
              </div>

              <h3
                style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: '#ffffff',
                  marginBottom: '6px',
                  marginTop: 0
                }}
              >
                {activeExp.role}
              </h3>

              <div
                style={{
                  fontFamily: 'monospace',
                  fontSize: '1.1rem',
                  color: '#00f0ff',
                  marginBottom: '20px',
                  fontWeight: 'bold'
                }}
              >
                ⚡ {activeExp.company}
              </div>

              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: '#cbd5e1',
                  fontFamily: 'sans-serif',
                  marginBottom: '25px'
                }}
              >
                {activeExp.description}
              </p>

              <div style={{ marginBottom: '25px' }}>
                <div
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                    color: '#ff007f',
                    marginBottom: '12px',
                    fontWeight: 'bold'
                  }}
                >
                  // EN_PROCESO:
                </div>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  {activeExp.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        color: '#cbd5e1',
                        fontSize: '0.95rem',
                        lineHeight: '1.5'
                      }}
                    >
                      <span
                        style={{
                          color: '#00f0ff',
                          fontFamily: 'monospace'
                        }}
                      >
                        &gt;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {activeExp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '0.8rem',
                    padding: '6px 14px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(0, 240, 255, 0.08)',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    color: '#00f0ff'
                  }}
                >
                  #{tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
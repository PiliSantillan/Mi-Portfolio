import React from 'react';

function Skills() {
  const skills = [
    { name: 'React.js', level: '85%', color: '#ff007f' },
    { name: 'JavaScript (ES6+)', level: '80%', color: '#ff007f' },
    { name: 'HTML5 & CSS3', level: '95%', color: '#ff007f' },
    { name: 'Git & GitHub', level: '75%', color: '#00f0ff' }
  ];

  return (
    <section 
      id="skills"
      style={{
        width: '100%',
        padding: '80px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box'
      }}
    >
      <div style={{
        maxWidth: '900px',
        width: '100%'
      }}>




        <div style={{
          fontFamily: 'monospace',
          color: '#ff007f',
          textShadow: '0 0 12px #ff007f',
          fontSize: '1.2rem',
          letterSpacing: '3px',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          [ HABILIDADES TÉCNICAS ]
        </div>

        

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px'
        }}>
          {skills.map((skill, index) => (
            <div key={index} style={{ width: '100%' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8px',
                fontFamily: 'monospace',
                fontSize: '1rem',
                color: '#dee3e9',
                fontWeight: 'bold'
              }}>
                <span>⚡ {skill.name}</span>
                <span style={{ color: skill.color }}>{skill.level}</span>
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: skill.level,
                  height: '100%',
                  backgroundColor: skill.color,
                  boxShadow: `0 0 12px ${skill.color}`,
                  borderRadius: '10px'
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
import React, { useState, useEffect } from 'react';

function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 400);
          setTimeout(() => setIsLoading(false), 900);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  
  const binaryRow = "01001001 01101110 01101001 01110100 01101001 01100001 01101100 01101001 01111010 01101001 01101110 01100111 00100000 01010011 01011001 01010011 01010100 01000101 00110001 01000011 01010010 01011001 01010000 01010100 01001111 01001110";

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#050b12',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 0.5s ease-in-out',
      pointerEvents: fadeOut ? 'none' : 'all',
      overflow: 'hidden'
    }}>

      

      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scanLine {
          0% { top: 0%; opacity: 0.8; }
          50% { top: 95%; opacity: 1; }
          100% { top: 0%; opacity: 0.8; }
        }
        .fingerprint-svg {
          width: 150px;
          height: 180px;
          filter:
            drop-shadow(0 0 5px #00d9ff)
            drop-shadow(0 0 15px #008cff)
            drop-shadow(0 0 30px rgba(0, 217, 255, 0.5));
        }
        .fingerprint-svg path {
          fill: none;
          stroke: #00d9ff;
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .fingerprint-svg .soft {
          opacity: 0.55;
        }
        .fingerprint-svg .strong {
          opacity: 0.95;
        }
      `}</style>

  

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '200%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.18,
        animation: 'scrollUp 10s linear infinite'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          fontFamily: 'monospace',
          fontSize: '0.8rem',
          lineHeight: '1.3',
          wordBreak: 'break-all',
          padding: '10px'
        }}>
          {Array(50).fill(0).map((_, i) => (
            <div key={i} style={{ color: i % 3 === 0 ? '#ff007f' : '#00f0ff' }}>
              {binaryRow} {binaryRow}
            </div>
          ))}
        </div>
      </div>


    


      <div style={{
        position: 'absolute', top: '25px', left: '25px', width: '50px', height: '50px',
        borderTop: '2px solid #00f0ff', borderLeft: '2px solid #00f0ff', pointerEvents: 'none', zIndex: 2
      }} />
      <div style={{
        position: 'absolute', top: '25px', right: '25px', width: '50px', height: '50px',
        borderTop: '2px solid #ff007f', borderRight: '2px solid #ff007f', pointerEvents: 'none', zIndex: 2
      }} />
      <div style={{
        position: 'absolute', bottom: '25px', left: '25px', width: '50px', height: '50px',
        borderBottom: '2px solid #ff007f', borderLeft: '2px solid #ff007f', pointerEvents: 'none', zIndex: 2
      }} />
      <div style={{
        position: 'absolute', bottom: '25px', right: '25px', width: '50px', height: '50px',
        borderBottom: '2px solid #00f0ff', borderRight: '2px solid #00f0ff', pointerEvents: 'none', zIndex: 2
      }} />



   


      <div style={{
        position: 'relative',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(2, 6, 16, 0.75)',
        padding: '35px 45px',
        borderRadius: '20px',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 0 35px rgba(0, 0, 0, 0.85)'
      }}>


      
        


        <div style={{
          position: 'relative',
          width: '150px',
          height: '180px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>

          
          <svg
            className="fingerprint-svg"
            viewBox="0 0 300 360"
            xmlns="http://www.w3.org/2000/svg"
          >
          
            <path className="soft" d="M150 25 C75 25 25 90 25 170 C25 255 75 325 150 335" />
            <path className="soft" d="M150 40 C85 40 42 98 42 170 C42 240 88 305 150 320" />


            
            <path className="strong" d="M150 55 C100 55 62 105 62 165 C62 215 80 250 105 280" />
            <path className="strong" d="M150 70 C112 70 80 110 80 162 C80 210 98 245 125 265" />
            <path d="M150 85 C122 85 98 118 98 160 C98 198 112 225 140 245" />



            
            <path className="strong" d="M150 98 C130 98 113 125 113 158 C113 188 125 208 145 220" />
            <path d="M150 112 C138 112 128 132 128 157 C128 178 136 191 150 201" />



            
            <path className="strong" d="M150 55 C200 55 238 105 238 165 C238 215 220 255 195 280" />
            <path className="strong" d="M150 70 C188 70 220 110 220 162 C220 210 202 245 175 265" />
            <path d="M150 85 C178 85 202 118 202 160 C202 198 188 225 160 245" />
            <path className="strong" d="M150 98 C170 98 187 125 187 158 C187 188 175 208 155 220" />
            <path d="M150 112 C162 112 172 132 172 157 C172 178 164 191 150 201" />

            
            <path className="soft" d="M70 225 C85 275 115 305 150 315" />
            <path className="soft" d="M230 225 C215 275 185 305 150 315" />
            

            
            <path d="M52 190 C55 235 75 270 100 295" />
            <path d="M248 190 C245 235 225 270 200 295" />
            <path d="M45 155 C45 130 52 110 65 92" />
            <path d="M255 155 C255 130 248 110 235 92" />
          </svg>



          

          <div style={{
            position: 'absolute',
            left: '0%',
            width: '100%',
            height: '3px',
            backgroundColor: '#ff007f',
            boxShadow: '0 0 12px #ff007f, 0 0 25px #ff007f',
            borderRadius: '2px',
            animation: 'scanLine 2s infinite ease-in-out'
          }} />
        </div>



      


        <div style={{ textAlign: 'center', fontFamily: 'monospace', marginBottom: '20px', letterSpacing: '2px' }}>
          <div style={{ fontSize: '0.75rem', color: '#00f0ff', marginBottom: '4px', opacity: 0.85 }}>
            [   PILAR_SANTILLAN    ]
          </div>


          <div style={{ fontSize: '1.3rem', color: '#ff007f', fontWeight: 'bold', textShadow: '0 0 12px #ff007f' }}>
            ACCESO BIOMÉTRICO
          </div>


          <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>
            VERIFYING USER CREDENTIALS...
          </div>


        </div>



      

        <div style={{
          width: '300px',
          height: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid #00f0ff',
          borderRadius: '4px',
          overflow: 'hidden',
          boxShadow: '0 0 15px rgba(0, 240, 255, 0.25)'
        }}>


          <div style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: '#ff007f',
            boxShadow: '0 0 15px #ff007f',
            transition: 'width 0.05s linear'
          }} />


        </div>



      

        <div style={{
          marginTop: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          width: '300px',
          color: '#00f0ff',
          fontFamily: 'monospace',
          fontSize: '0.85rem'
        }}>
          <span>STATUS: INITIALIZING...</span>
          <span style={{ color: '#ff007f', fontWeight: 'bold' }}>{progress}%</span>
        </div>



      </div>
    </div>
  );
}

export default Preloader;
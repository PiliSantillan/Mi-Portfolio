
function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '30px 20px',
      borderTop: '1px solid rgba(255, 0, 85, 0.3)',
      marginTop: '40px',
      backgroundColor: '#12121a',
      color: '#a0a0b0',
      fontSize: '0.9rem'
    }}>
      <p style={{ margin: '0 0 10px 0' }}>
        Desarrollado por <strong style={{ color: '#ff0055' }}>Pilar Santillán</strong>
      </p>
      <p style={{ margin: 0, fontSize: '0.8rem' }}>
      Facultad Regional Tucumán – UTN © 2026
      </p>
    </footer>
  );
}

export default Footer;
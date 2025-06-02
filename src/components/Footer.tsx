import styles from '../styles/Home.module.css';
import { FaEnvelope, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className={styles.footer}
      id="contact"
      style={{
        
        color: '#222',
        padding: '36px 16px 24px 16px',
        marginTop: 20,
        textAlign: 'center',
        
      }}
    >
      <div style={{ marginBottom: 18 }}>
        <a
          href="mailto:brianoko2002@gmail.com"
          style={{
            color: '#007BFF',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: 18,
            marginRight: 18,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <FaEnvelope /> support email
        </a>
        <a
          href="https://www.instagram.com/briotifx/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#007BFF',
            margin: '0 10px',
            fontSize: 22,
            verticalAlign: 'middle',
            opacity: 0.85,
            transition: 'opacity 0.2s',
          }}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@briotifx2"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#007BFF',
            margin: '0 10px',
            fontSize: 22,
            verticalAlign: 'middle',
            opacity: 0.85,
            transition: 'opacity 0.2s',
          }}
        >
          <FaTiktok />
        </a>
      </div>
      <div style={{ fontSize: 15, opacity: 0.92 }}>
        © {new Date().getFullYear()} <b>BRIOTIFX</b>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
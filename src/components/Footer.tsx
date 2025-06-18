import styles from '../styles/Home.module.css';
import { FaEnvelope, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <h2 className={styles['footer-title']}>
        Contact Support
      </h2>
      <div className={styles['footer-contact-row']}>
        <form
          action="https://formspree.io/f/meokzkgd"
          method="POST"
          className={styles['footer-form']}
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className={styles['footer-input']}
          />
          <input
            type="text"
            name="message"
            required
            placeholder="Your message"
            className={styles['footer-input']}
          />
          <button
            type="submit"
            className={styles['footer-button']}
          >
            Send
          </button>
        </form>
        <div className={styles['footer-social']}>
          <a
            href="https://www.instagram.com/briotifx/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['footer-social-link']}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@briotifx2"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['footer-social-link']}
          >
            <FaTiktok />
          </a>
        </div>
      </div>
      <div className={styles['footer-copyright']}>
        © {new Date().getFullYear()} <b>BRIOTIFX</b>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
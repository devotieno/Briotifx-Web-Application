import styles from '../styles/Home.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} id='contact'>
      <p>Contact us: <a href="mailto:brianoko2002@gmail.com">support@briotifx.com</a></p>
      <p>© {new Date().getFullYear()} BRIOTIFX. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
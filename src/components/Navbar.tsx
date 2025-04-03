import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="BRIOTIFX Logo" width={40} />
        <img src="/logo1.png" alt="BRIOTIFX Logo" width={60} />
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
        <a href="#features">Key Features</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
      </div>
      <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
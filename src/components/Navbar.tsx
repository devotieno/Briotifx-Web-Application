"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div
        className={styles.logo}
        style={{
          marginLeft: '70px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Image
          src="/logo.png"
          alt="BRIOTIFX Logo"
          width={40}
          height={40}
          style={{ marginRight: '0px' }}
        />
        <Image
          src="/logo1.png"
          alt="BRIOTIFX Logo"
          width={60}
          height={60}
        />
        <style jsx>{`
          @media (max-width: 768px) {
            .${styles.logo} {
              margin-left: 0px;
            }
          }
        `}</style>
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
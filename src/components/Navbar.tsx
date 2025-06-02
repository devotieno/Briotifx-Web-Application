"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Automatically close mobile menu on resize to large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <nav
      className={styles.navbar}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(8px)',
        borderRadius: '0 0 18px 18px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
        padding: '10px 32px',
        margin: '16px auto 32px auto',
        maxWidth: 1200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div
        className={styles.logo}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <Image
          src="/logo.png"
          alt="BRIOTIFX Logo"
          width={40}
          height={40}
          style={{ borderRadius: '8px', background: '#f8fafc' }}
        />
        <Image
          src="/logo1.png"
          alt="BRIOTIFX Logo"
          width={60}
          height={60}
        />
        
      </div>
      <div
        className={`${styles.menu} ${isOpen ? styles.open : ''}`}
        style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
          transition: 'all 0.3s',
        }}
      >
        <a href="#pricing" style={{ color: '#222', fontWeight: 500, fontSize: 17, textDecoration: 'none', transition: 'color 0.2s' }}>Pricing</a>
        <a href="#about" style={{ color: '#222', fontWeight: 500, fontSize: 17, textDecoration: 'none', transition: 'color 0.2s' }}>About</a>
        <a href="#features" style={{ color: '#222', fontWeight: 500, fontSize: 17, textDecoration: 'none', transition: 'color 0.2s' }}>Key Features</a>
        <a href="#reviews" style={{ color: '#222', fontWeight: 500, fontSize: 17, textDecoration: 'none', transition: 'color 0.2s' }}>Reviews</a>
        <a href="#contact" style={{ color: '#222', fontWeight: 500, fontSize: 17, textDecoration: 'none', transition: 'color 0.2s' }}>Contact</a>
      </div>
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          fontSize: 32,
          cursor: 'pointer',
          color: '#007BFF',
        }}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      {/* Responsive menu overlay */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 70,
            right: 32,
            background: 'rgba(255,255,255,0.97)',
            borderRadius: 16,
            boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
            padding: '24px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            zIndex: 200,
          }}
        >
          <a href="#pricing" onClick={() => setIsOpen(false)} style={{ color: '#007BFF', fontWeight: 600, fontSize: 18, textDecoration: 'none' }}>Pricing</a>
          <a href="#about" onClick={() => setIsOpen(false)} style={{ color: '#007BFF', fontWeight: 600, fontSize: 18, textDecoration: 'none' }}>About</a>
          <a href="#features" onClick={() => setIsOpen(false)} style={{ color: '#007BFF', fontWeight: 600, fontSize: 18, textDecoration: 'none' }}>Key Features</a>
          <a href="#reviews" onClick={() => setIsOpen(false)} style={{ color: '#007BFF', fontWeight: 600, fontSize: 18, textDecoration: 'none' }}>Reviews</a>
          <a href="#contact" onClick={() => setIsOpen(false)} style={{ color: '#007BFF', fontWeight: 600, fontSize: 18, textDecoration: 'none' }}>Contact</a>
        </div>
      )}
      <style jsx>{`
        @media (max-width: 900px) {
          nav {
            padding: 10px 10px;
          }
          .${styles.menu} {
            display: none !important;
          }
          .${styles.hamburger} {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
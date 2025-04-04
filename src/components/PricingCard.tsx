"use client";

import { useState } from 'react';
import styles from '../styles/Home.module.css';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  link: string;
}

const PricingCard = ({ title, price, features, link }: PricingCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    fontSize: '15px',
    borderRadius: '5px',
    backgroundColor: isHovered ? '#0056b3' : '#007BFF',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    width: '120px', // Increased width
    height: '40px', // Added height
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  };

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{price}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <a href={link}>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ display: 'inline-block' }}
        >
          <button style={buttonStyle}>Select Plan</button>
        </div>
      </a>
    </div>
  );
};

export default PricingCard;
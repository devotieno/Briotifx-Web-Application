import styles from '../styles/Home.module.css';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  link: string;
}

const PricingCard = ({ title, price, features, link }: PricingCardProps) => (
  <div className={styles.card}>
    <h2>{title}</h2>
    <p>{price}</p>
    <ul>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <a href={link}>
    <button 
    style={{ 
        fontSize: '15px', 
        borderRadius: '5px', 
        backgroundColor: '#007BFF', 
        color: '#fff', 
        border: 'none', 
        cursor: 'pointer', 
        width: '120px', // Increased width
        height: '40px', // Added height
        transition: 'transform 0.3s ease, background-color 0.3s ease' 
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.backgroundColor = '#0056b3';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.backgroundColor = '#007BFF';
      }}
    >Select Plan</button>
    </a>
  </div>
);

export default PricingCard;
import styles from '../styles/Home.module.css';

interface ReviewCardProps {
  name: string;
  review: string;
  
}

const ReviewCard = ({ name, review, }: ReviewCardProps) => (
  <div className={styles.card}>
    <h3 style={{ color: 'grey'}}>{name}</h3>
    <p style={{ color: 'grey'}}>{review}</p>
    
  </div>
);

export default ReviewCard;
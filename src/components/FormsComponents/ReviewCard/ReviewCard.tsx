import React from 'react';
import Review from './ReviewCard.types';
import styles from './ReviewCard.module.css';
import Rating from './Rating/Rating';
import { formatDate } from '../../../utils/utils';

const ReviewCard = (review: Review): JSX.Element => {
  const { image, name, hut, arrival, departure, rating } = review;
  return (
    <div data-testid="review" className={styles.card}>
      <div className={styles.user}>
        <img className={styles.image} alt="user avatar" src={image} />
        <div className={styles.info}>
          <p className={styles.name}>{name}</p>
          <div className={styles.consent}>
            <svg className={styles.icon} viewBox="0 0 321 323">
              <path d="M157.099 0.0334471C114.907 0.925686 74.7683 18.3816 45.366 48.624C15.9636 78.8638 -0.334301 119.456 0.0051996 161.614C-0.181796 189.877 7.11581 217.686 21.155 242.223C35.1917 266.763 55.4754 287.159 79.9471 301.343C104.416 315.528 132.207 323 160.501 323C188.794 323 216.582 315.528 241.055 301.343C265.529 287.159 285.808 266.763 299.848 242.223C313.887 217.686 321.182 189.878 320.995 161.614C321.226 132.942 313.754 104.733 299.36 79.9278C284.966 55.1201 264.176 34.6237 239.156 20.5719C214.135 6.52011 185.801 -0.571237 157.102 0.0359638L157.099 0.0334471ZM249.91 90.4843C254.245 90.2926 258.475 91.8632 261.631 94.8373C264.788 97.8114 266.606 101.936 266.67 106.272C266.734 110.607 265.039 114.783 261.971 117.848L145.602 234.084C141.587 238.096 136.144 240.347 130.468 240.347C124.793 240.347 119.347 238.096 115.335 234.084L58.6462 177.464C54.6111 173.409 53.0438 167.513 54.5299 161.989C56.0185 156.466 60.3365 152.153 65.865 150.668C71.3936 149.181 77.294 150.747 81.3561 154.778L130.469 203.85L239.26 95.1703C242.097 92.3314 245.896 90.66 249.909 90.4831L249.91 90.4843Z"></path>
              <path
                d="M249.91 90.4843C254.245 90.2926 258.475 91.8632 261.631 94.8373C264.788 97.8114 266.606 101.936 266.67 106.272C266.734 110.607 265.039 114.783 261.971 117.848L145.602 234.084C141.587 238.096 136.144 240.347 130.468 240.347C124.793 240.347 119.347 238.096 115.335 234.084L58.6462 177.464C54.6111 173.409 53.0438 167.513 54.5299 161.989C56.0185 156.466 60.3365 152.153 65.865 150.668C71.3936 149.181 77.294 150.747 81.3561 154.778L130.469 203.85L239.26 95.1703C242.097 92.3314 245.896 90.66 249.909 90.4831L249.91 90.4843Z"
                fill="#555B6E"
              ></path>
            </svg>
            <p className={styles.text}>data processing consent</p>
          </div>
        </div>
      </div>
      <div className={styles.review}>
        <div className={styles.hut}>
          <p className={styles.heading}>Hut:</p> {hut}
        </div>
        <div className={styles.stay}>
          <p className={styles.heading}>Travel period:</p> {formatDate(arrival)} -{' '}
          {formatDate(departure)}
        </div>
        <Rating rating={rating} />
      </div>
    </div>
  );
};

export default ReviewCard;

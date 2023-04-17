import React from 'react';
import Hut from './Card.types';
import styles from './Card.module.css';
import { useAppDispatch } from '../../../store/hooks';
import { fetchApi, setSelected } from '../../../store/slices/apiSlice';
import { API_PATH, ID_QUERY } from '../../../utils/consts';

type Props = {
  hut: Hut;
};

const Card = (props: Props): JSX.Element => {
  const { alt, image, name, altitude, id } = props.hut;
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(setSelected(true));
    dispatch(fetchApi(`${API_PATH}${ID_QUERY}${id}`));
  };

  return (
    <div className={styles.card} data-testid="catalogue-card" onClick={handleClick}>
      <img className={styles.image} alt={alt} src={image} />
      <div className={styles.bottom}>
        <p className={styles.name}>{name}</p>
        <p className={styles.altitude}>{altitude} mt</p>
        <div className={styles.wrapper}>
          Click for details
          <svg className={styles.icon} viewBox="0 0 719 664">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M266.947 0C119.505 0 0 119.507 0 266.933C0 414.369 119.507 533.87 266.947 533.88C330.311 533.88 388.517 511.804 434.294 474.923L433.514 475.86L637.101 652.313C655.72 668.453 684.164 666.423 700.304 647.803L707.626 639.349C723.767 620.731 721.736 592.287 703.116 576.147L498.899 399.143C521.16 360.166 533.88 315.036 533.88 266.933C533.88 119.505 414.373 0 266.947 0ZM465.387 266.933C465.387 374.672 378.063 462 270.333 462C162.605 462 75.2719 374.679 75.2667 266.933C75.2667 159.208 162.588 71.88 270.333 71.88C378.059 71.88 465.387 159.204 465.387 266.933Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;

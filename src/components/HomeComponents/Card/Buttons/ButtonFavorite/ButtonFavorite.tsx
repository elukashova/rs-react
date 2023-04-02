import React from 'react';
import styles from './ButtonFavorite.module.css';

const ButtonFavorite = (): JSX.Element => {
  return (
    <button type="button" className={styles.btn}>
      <svg className={styles.icon} viewBox="0 0 672 586">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M524.08 0C405.361 0 348.613 71.6827 335.92 90.3493C322.483 71.6827 265.732 0 147.76 0C10.3734 0 -53.0932 197.867 53.6814 327.04C160.457 456.961 335.175 585.387 335.175 585.387C335.175 585.387 508.401 459.949 617.415 326.293C724.191 197.121 660.721 0 524.081 0H524.08Z"
        />
      </svg>
    </button>
  );
};

export default ButtonFavorite;

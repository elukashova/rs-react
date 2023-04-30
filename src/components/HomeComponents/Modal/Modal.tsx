import React, { SyntheticEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setSelected } from '../../../store/slices/apiSlice';
import { RootState } from '../../../store/store';
import styles from './Modal.module.css';

const Modal = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { selectedHut } = useAppSelector((state: RootState) => state.api);

  const handleClick = (e: SyntheticEvent) => {
    if (
      e.target instanceof HTMLButtonElement ||
      (e.currentTarget instanceof HTMLDivElement && e.target === e.currentTarget)
    ) {
      dispatch(setSelected(false));
    }
  };

  return (
    <>
      {selectedHut && (
        <div className={styles.background} onClick={handleClick}>
          <div className={styles.modal} data-testid="modal" data-cy="modal">
            <button
              type="button"
              className={styles.btn}
              data-testid="close-btn"
              data-cy="close-btn"
              onClick={handleClick}
            ></button>
            <div className={styles.wrapper}>
              <img className={styles.image} alt={selectedHut.alt} src={selectedHut.image} />
              <div className={styles.details}>
                <h3 className={styles.hut}>{selectedHut.name}</h3>
                <div className={styles.altitude}>
                  <p className={styles.heading}>Altitude:</p> {selectedHut.altitude} mt
                </div>
                <div className={styles.province}>
                  <p className={styles.heading}>Province:</p> {selectedHut.province}
                </div>
                <div className={styles.location}>
                  <p className={styles.heading}>Location:</p> {selectedHut.location}
                </div>
                <p className={styles.description}>{selectedHut.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

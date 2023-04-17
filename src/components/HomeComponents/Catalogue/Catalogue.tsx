import React, { useEffect } from 'react';
import styles from './Catalogue.module.css';
import Card from '../Card/Card';
import Hut from '../Card/Card.types';
import { RootState } from '../../../store/store';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchApi } from '../../../store/slices/apiSlice';
import { API_PATH, SEARCH_QUERY } from '../../../utils/consts';
import ProgressIndicator from '../Loader/Loader';
import Modal from '../Modal/Modal';

const Catalogue = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { query, result, isLoading, isSelected } = useAppSelector((state: RootState) => state.api);

  useEffect(() => {
    const requestUrl = query ? `${API_PATH}${SEARCH_QUERY}${query}` : API_PATH;
    dispatch(fetchApi(requestUrl));
  }, [dispatch, query]);

  return (
    <div className={styles.wrapper}>
      {isLoading && <ProgressIndicator />}
      {!isLoading && (
        <div className={styles.catalogue}>
          {result.length > 0 && result.map((item: Hut) => <Card key={item.id} hut={item} />)}
          {result.length === 0 && <p className={styles.error}>No data found</p>}
          {isSelected && <Modal />}
        </div>
      )}
    </div>
  );
};

export default Catalogue;

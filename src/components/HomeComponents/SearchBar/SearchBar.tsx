import React, { ChangeEventHandler, KeyboardEventHandler, SyntheticEvent, useState } from 'react';
import { API_PATH, SEARCH_QUERY } from '../../../utils/consts';
import Hut from '../Card/Card.types';
import styles from './SearchBar.module.css';

type Props = {
  filterHuts: (huts: Hut[]) => void;
};

const SearchBar = ({ filterHuts }: Props): JSX.Element => {
  const sendQueryRequest = (query: string): void => {
    fetch(`${API_PATH}${SEARCH_QUERY}${query}`)
      .then((response: Response) => response.json())
      .then((result: Hut[]) => filterHuts(result));
  };

  const [searchValue, setSearchValue] = useState<string>(() => {
    const savedValue: string | null = localStorage.getItem('inputValue');
    if (savedValue) {
      sendQueryRequest(savedValue);
    }
    return savedValue || '';
  });

  const onValueChange: ChangeEventHandler = (event) => {
    if (event.target instanceof HTMLInputElement) {
      setSearchValue(event.target.value);
    }
  };

  const onEnterPress: KeyboardEventHandler<HTMLInputElement> = (
    event: SyntheticEvent<HTMLInputElement, KeyboardEvent>
  ): void => {
    if (event.target instanceof HTMLInputElement) {
      if (event.nativeEvent.code === 'Enter') {
        sendQueryRequest(event.target.value);
        localStorage.setItem('inputValue', event.target.value);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        onChange={onValueChange}
        onKeyDown={onEnterPress}
        className={styles.input}
        type="text"
        value={searchValue}
        placeholder="Search..."
        autoComplete="off"
      />
      <svg className={styles.icon} aria-hidden="true" viewBox="0 0 24 24">
        <g>
          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
      </svg>
    </div>
  );
};

export default SearchBar;

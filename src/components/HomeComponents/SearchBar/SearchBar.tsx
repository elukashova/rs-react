import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import ButtonSearch from './Button/ButtonSearch';
import styles from './SearchBar.module.css';

const SearchBar = (): JSX.Element => {
  const savedValue: string = localStorage.getItem('inputValue') || '';
  const [searchValue, setSearchValue] = useState<string>(savedValue);
  const inputRef: React.MutableRefObject<string> = useRef(searchValue);

  const onValueChange: ChangeEventHandler = (event) => {
    if (event.target instanceof HTMLInputElement) {
      setSearchValue(event.target.value);
    }
  };

  useEffect(() => {
    inputRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem('inputValue', inputRef.current);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <input
        onChange={onValueChange}
        className={styles.input}
        type="text"
        value={searchValue}
        placeholder="Search..."
        autoComplete="off"
      />
      <ButtonSearch />
    </div>
  );
};

export default SearchBar;

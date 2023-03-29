import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import ButtonSearch from './Button/ButtonSearch';
import styles from './SearchBar.module.css';

const SearchBar = (): JSX.Element => {
  const savedValue: string = localStorage.getItem('inputValue') || '';
  const [searchValue, setSearchValue] = useState<string>(savedValue);
  const inputRef: React.MutableRefObject<string> = useRef(searchValue);

  const onValueChange: ChangeEventHandler = (event) => {
    if (event.target instanceof HTMLInputElement) {
      const input: HTMLInputElement = event.target;
      setSearchValue(input.value);
    }
  };

  useEffect(() => {
    inputRef.current = searchValue;

    return () => {
      localStorage.setItem('inputValue', inputRef.current);
    };
  }, [searchValue]);

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

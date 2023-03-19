import React, { ChangeEvent, ChangeEventHandler, Component } from 'react';
import ButtonSearch from './Button/ButtonSearch';
import styles from './SearchBar.module.css';

class SearchBar extends Component<Record<string, never>, { value: string }> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      value: localStorage.getItem('inputValue') || '',
    };
  }

  saveInputValue: ChangeEventHandler = (event: ChangeEvent<Element>) => {
    if (event.target instanceof HTMLInputElement) {
      const input: HTMLInputElement = event.target;

      this.setState(() => ({
        value: input.value,
      }));
    }
  };

  componentWillUnmount(): void {
    localStorage.setItem('inputValue', this.state.value);
  }

  render(): JSX.Element {
    return (
      <div className={styles.wrapper}>
        <input
          onChange={this.saveInputValue}
          className={styles.input}
          type="text"
          value={this.state.value}
          placeholder="Search..."
          autoComplete="off"
        />
        <ButtonSearch />
      </div>
    );
  }
}

export default SearchBar;

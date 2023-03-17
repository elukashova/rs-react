import React, { ChangeEvent, ChangeEventHandler, Component } from 'react';
import './SearchBar.styles.css';

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
      <div className="search__wrapper">
        <input
          onChange={this.saveInputValue}
          className="search__input"
          type="text"
          value={this.state.value}
          placeholder="Search..."
          autoComplete="off"
        />
        <button className="search__button">
          <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
        </button>
      </div>
    );
  }
}

export default SearchBar;

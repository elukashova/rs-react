import React, { Component } from 'react';
import './Footer.styles.css';
import rsLogo from '../../assets/images/rsschool.png';
import githubLogo from '../../assets/images/github.svg';

class Footer extends Component {
  render(): JSX.Element {
    return (
      <header className="footer">
        <div className="footer__wrapper">
          <a
            className="footer__rs-link"
            href="https://rs.school/react/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={rsLogo} alt="The Rolling Scopes School logo" width="120" />
          </a>
          <div className="footer__info">
            2023
            <a
              className="footer__rs-link"
              href="https://github.com/elukashova"
              rel="noreferrer"
              target="_blank"
            >
              <img src={githubLogo} alt="Github Octocat logo" />
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Footer;

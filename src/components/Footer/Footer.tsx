import React, { Component } from 'react';
import styles from './Footer.module.css';
import rsLogo from '../../assets/images/rsschool.png';
import githubLogo from '../../assets/images/github.svg';

class Footer extends Component {
  render(): JSX.Element {
    return (
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <a
            className={styles['rss-link']}
            href="https://rs.school/react/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={rsLogo} alt="The Rolling Scopes School logo" className={styles['rss-img']} />
          </a>
          <div className={styles.info}>
            2023
            <a
              className={styles['gh-link']}
              href="https://github.com/elukashova"
              rel="noreferrer"
              target="_blank"
            >
              <img src={githubLogo} alt="Github Octocat logo" className={styles['gh-icon']} />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

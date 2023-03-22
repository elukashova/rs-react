import React, { Component } from 'react';
import styles from './Catalogue.module.css';
import Card from '../Card/Card';
import data from '../../../assets/data/cardsData';
import Hut from '../Card/Card.types';

class Catalogue extends Component {
  render(): JSX.Element {
    return (
      <div className={styles.catalogue}>
        {data.map((item: Hut) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

export default Catalogue;

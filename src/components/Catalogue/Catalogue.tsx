import React, { Component } from 'react';
import styles from './Catalogue.module.css';
import Card from '../Card/Card';
import data from '../../assets/data/cardsData';
import CardType from '../Card/Card.types';

class Catalogue extends Component {
  render(): JSX.Element {
    return (
      <div className={styles.catalogue}>
        {data.map((item: CardType) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

export default Catalogue;

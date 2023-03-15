import React, { Component } from 'react';
import './Catalogue.styles.css';
import Card from '../Card/Card';
import data from '../../assets/data/cards-data';
import CardType from '../Card/Card.types';

class Catalogue extends Component {
  render(): JSX.Element {
    return (
      <div className="catalogue">
        {data.map((item: CardType) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

export default Catalogue;

import React from 'react';
import './Catalogue.styles.css';
import Card from '../Card/Card';
import data from '../../assets/data/cards-data';
import CardType from '../Card/Card.types';

const Catalogue: React.FC = () => {
  return (
    <div className="catalogue">
      {data.map((item: CardType) => (
        <Card
          key={item.id}
          id={item.id}
          image={item.image}
          alt={item.alt}
          name={item.name}
          location={item.location}
          province={item.province}
          altitude={item.altitude}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Catalogue;

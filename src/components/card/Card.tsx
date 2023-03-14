import React from 'react';
import ButtonDetails from './Buttons/ButtonDetails/ButtonDetails';
import ButtonFavorite from './Buttons/ButtonFavorite/ButtonFavorite';
import './Card.styles.css';
import CardType from './Card.types';

export default class Card extends React.Component<CardType> {
  render() {
    return (
      <div className="card">
        <img className="card__image" alt={this.props.alt} src={this.props.image} />
        <div className="card__bottom">
          <p className="card__name">{this.props.name}</p>
          <p className="card__location">{this.props.location}</p>
          <div className="card__info_bottom">
            <p className="card__province">{this.props.province}</p>
            <p className="card__altitude">{this.props.altitude} mt</p>
          </div>
          <div className="card__description">{this.props.description}</div>
          <div className="card__buttons">
            <ButtonFavorite />
            <ButtonDetails />
          </div>
        </div>
      </div>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div>
        <h3 data-testid="name-card">{cardName}</h3>
        <h6 data-testid="description-card">{cardDescription}</h6>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <h5 data-testid="attr1-card">{cardAttr1}</h5>
        <h5 data-testid="attr2-card">{cardAttr2}</h5>
        <h5 data-testid="attr3-card">{cardAttr3}</h5>
        <h5 data-testid="rare-card">{cardRare}</h5>
        { cardTrunfo ? <h5 data-testid="trunfo-card">Super Trunfo</h5> : ''}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

Card.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardImage: '',
  cardRare: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardTrunfo: false,
};

export default Card;

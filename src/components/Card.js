import React from 'react';

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

export default Card;

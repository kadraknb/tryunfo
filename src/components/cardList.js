import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { infoCard, deleteLi } = this.props;
    return (
      <ol>
        {infoCard.map((aa) => (
          <li key={ aa.cardName }>
            <Card
              cardName={ aa.cardName }
              cardDescription={ aa.cardDescription }
              cardImage={ aa.cardImage }
              cardRare={ aa.cardRare }
              cardAttr1={ aa.cardAttr1 }
              cardAttr2={ aa.cardAttr2 }
              cardAttr3={ aa.cardAttr3 }
              cardTrunfo={ aa.cardTrunfo }
            />
            <button
              type="button"
              data-testid="delete-button"
              onClick={ () => deleteLi(aa.cardName) }
            >
              Excluir
            </button>
          </li>
        ))}
      </ol>
    );
  }
}

CardList.propTypes = {
  infoCard: PropTypes.arrayOf(PropTypes.object),
  deleteLi: PropTypes.func,
};

CardList.defaultProps = {
  infoCard: 'PropTypes.array',
  deleteLi: 'PropTypes.func',
};

export default CardList;

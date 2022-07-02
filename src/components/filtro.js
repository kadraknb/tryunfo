import React from 'react';
// import PropTypes from 'prop-types';

class Filtro extends React.Component {
  constructor() {
    super();

    this.state = {
      nomeAFiltra: '',
    };
  }

  passvalor = () => {
    const { passState } = this.props;
    const { nomeAFiltra } = this.state;
    passState(nomeAFiltra);
  }

  elteraState = (event) => {
    // this.passvalor();
    const { name, value } = event.target;
    this.setState(({ [name]: value }), this.passvalor);
  }

  render() {
    // const { filtoN } = this.props;
    const { nomeAFiltra } = this.state;

    return (
      <input
        type="text"
        name="nomeAFiltra"
        value={ nomeAFiltra }
        onChange={ this.elteraState }
        data-testid="name-filter"
      />
    );
  }
}
// Filtro.propTypes = {
//   infoCard: PropTypes.arrayOf(PropTypes.object),
//   deleteLi: PropTypes.func,
// };

// Filtro.defaultProps = {
//   infoCard: 'PropTypes.array',
//   deleteLi: 'PropTypes.func',
// };

export default Filtro;

// {infoCard.map((aa) => (
//     <li key={ aa.cardName }>
//       <Card
//         cardName={ aa.cardName }
//         cardDescription={ aa.cardDescription }
//         cardImage={ aa.cardImage }
//         cardRare={ aa.cardRare }
//         cardAttr1={ aa.cardAttr1 }
//         cardAttr2={ aa.cardAttr2 }
//         cardAttr3={ aa.cardAttr3 }
//         cardTrunfo={ aa.cardTrunfo }
//       />
//       <button
//         type="button"
//         data-testid="delete-button"
//         onClick={ () => deleteLi(aa.cardName) }
//       >
//         Excluir
//       </button>
//     </li>
//   ))}

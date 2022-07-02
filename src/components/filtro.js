import React from 'react';
// import PropTypes from 'prop-types';

class Filtro extends React.Component {
  constructor() {
    super();

    this.state = {
      nomeAFiltra: '',
      filtroRare: '',
    };
  }

  passvalor = () => {
    const { passState } = this.props;
    const { nomeAFiltra, filtroRare } = this.state;
    passState([nomeAFiltra, filtroRare]);
  }

  elteraState = (event) => {
    const { name, value } = event.target;
    this.setState(({ [name]: value }), this.passvalor);
  }

  render() {
    const { nomeAFiltra, filtroRare } = this.state;

    return (
      <>
        <input
          type="text"
          name="nomeAFiltra"
          value={ nomeAFiltra }
          onChange={ this.elteraState }
          data-testid="name-filter"
        />
        <select
          name="filtroRare"
          value={ filtroRare }
          onChange={ this.elteraState }
          data-testid="rare-filter"
        >
          <option value="">todas</option>
          <option>normal</option>
          <option value="lendario">raro</option>
          <option>muito raro</option>
        </select>
      </>
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

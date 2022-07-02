import React from 'react';
import PropTypes from 'prop-types';

class Filtro extends React.Component {
  constructor() {
    super();

    this.state = {
      nomeAFiltra: '',
      filtroRare: '',
      filtroCardTrunfo: '',
    };
  }

  passvalor = () => {
    const { passState } = this.props;
    const { nomeAFiltra, filtroRare, filtroCardTrunfo } = this.state;
    passState([
      nomeAFiltra,
      filtroRare,
      filtroCardTrunfo,
    ]);
  }

  elteraState = (event) => {
    const { name, value, checked, type } = event.target;
    const res = type === 'checkbox' ? checked : value;
    this.setState(({ [name]: res }), this.passvalor);
  }

  render() {
    const { nomeAFiltra, filtroRare, filtroCardTrunfo } = this.state;

    return (
      <>
        <input
          type="text"
          name="nomeAFiltra"
          value={ nomeAFiltra }
          onChange={ this.elteraState }
          disabled={ filtroCardTrunfo }
          data-testid="name-filter"
        />
        <select
          name="filtroRare"
          value={ filtroRare }
          onChange={ this.elteraState }
          disabled={ filtroCardTrunfo }
          data-testid="rare-filter"
        >
          <option value="">todas</option>
          <option>normal</option>
          <option>raro</option>
          <option value="lendario">muito raro</option>
        </select>
        <input
          type="checkbox"
          name="filtroCardTrunfo"
          data-testid="trunfo-filter"
          checked={ filtroCardTrunfo }
          onChange={ this.elteraState }
        />
      </>
    );
  }
}
Filtro.propTypes = {
  passState: PropTypes.func,
};

Filtro.defaultProps = {
  passState: 'PropTypes.func',
};

export default Filtro;

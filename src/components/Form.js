/* /* eslint-disable no-multiple-empty-lines */

import React from 'react';
/*

class ccccc extends React.Component {
  render() {
    return ();
  }
}

export default ccccc; */

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        inserir o nome da carta
        <input
          type="text"
          name="cardName"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />
        descrição da carta
        <textarea
          name="cardDescription"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        o atributo que mais combinar com o seu baralho
        <input
          type="number"
          name="cardAttr1"
          data-testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <input
          type="number"
          name="cardAttr2"
          data-testid="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <input
          type="number"
          name="cardAttr3"
          data-testid="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        o caminho para imagem da carta
        <input
          type="text"
          name="cardImage"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />
        inserir a raridade da carta
        <select
          name="cardRare"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        inserir se a carta é o Super Trunfo
        { hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' : <input
          type="checkbox"
          name="cardTrunfo"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        /> }
        <button
          type="submit"
          name="isSaveButtonDisabled"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;

import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import ButtonDisabled from './components/ButtonDisabled';
import CardList from './components/cardList';
import Filtro from './components/filtro';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      listaSalva: [],
      oqFiltra: ['', ''],
    };
  }

  temTriunfo = () => {
    const { state } = this;
    this.setState({ isSaveButtonDisabled: !ButtonDisabled(state) });

    if (state.cardTrunfo || state.listaSalva.some((bb) => bb.cardTrunfo)) {
      this.setState({ hasTrunfo: true });
    } else { this.setState({ hasTrunfo: false }); }
  }

  onInputChange = (event) => {
    const { value, name, checked, type } = event.target;
    const res = type === 'checkbox' ? checked : value;
    this.setState(({ [name]: res }), () => this.temTriunfo());
  };

  // ButtonDisabled(state)

  saveLista = (event, save) => {
    event.preventDefault();
    this.setState((prevState) => ({
      listaSalva: [...prevState.listaSalva, save],
    }));
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardTrunfo: false,
    }, () => this.temTriunfo());
  };

  deleteCard = (aa) => {
    this.setState((prevState) => ({
      listaSalva: prevState.listaSalva.filter((bb) => bb.cardName !== aa),
    }), () => this.temTriunfo());
  }

  lerFiltro = (seila) => {
    this.setState({ oqFiltra: seila });
  };

  render() {
    const { state } = this;
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = state;
    return (
      <>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ (event) => this.saveLista(event, state) }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
        />
        <Filtro passState={ this.lerFiltro } />
        <CardList
          oqFiltrar={ state.oqFiltra }
          infoCard={ state.listaSalva }
          deleteLi={ this.deleteCard }
        />
      </>
    );
  }
}

export default App;

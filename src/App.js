import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import ButtonDisabled from './components/ButtonDisabled';
import Button from './components/save-button';

const { saveButton, clickButton } = Button;

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
      isSaveButtonDisabled: false,
      listaSalva: [],
    };
  }

  onInputChange = (event) => {
    const { value, name, checked, type } = event.target;
    const res = type === 'checkbox' ? checked : value;
    this.setState({ [name]: res });
  };

  saveLista = (event, arr) => {
    event.preventDefault();
    this.setState((prevState) => ({
      listaSalva: [...prevState.listaSalva, arr],
    }));
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
    });
  };

  render() {
    const { state } = this;
    const arr = [
      state.cardName,
      state.cardDescription,
      state.cardImage,
      state.cardRare,
      state.cardAttr1,
      state.cardAttr2,
      state.cardAttr3,
    ];

    return (
      <>
        <Form
          cardName={arr[0]}
          cardDescription={arr[1]}
          cardImage={arr[2]}
          cardRare={arr[3]}
          cardAttr1={arr[4]}
          cardAttr2={arr[5]}
          cardAttr3={arr[6]}
          onInputChange={this.onInputChange}
          isSaveButtonDisabled={!ButtonDisabled(arr)}
          onSaveButtonClick={(event) => this.saveLista(event, arr)}
        />
        <Card
          cardName={arr[0]}
          cardDescription={arr[1]}
          cardImage={arr[2]}
          cardRare={arr[3]}
          cardAttr1={arr[4]}
          cardAttr2={arr[5]}
          cardAttr3={arr[6]}
          cardTrunfo={state.cardTrunfo}
        />
      </>
    );
  }
}

export default App;

import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import ButtonDisabled from './components/ButtonDisabled';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
    };
  }

  onInputChange = (event) => {
    const { value, name, checked, type } = event.target;
    const res = type === 'checkbox' ? checked : value;
    this.setState({ [name]: res });
  };

  render() {
    const { state } = this;
    const destr = (aa) => state[aa];
    return (
      <>
        <Form
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ !ButtonDisabled(state) }
        />
        <Card
          cardName={ destr('cardName') }
          cardDescription={ destr('cardDescription') }
          cardAttr1={ destr('cardAttr1') }
          cardAttr2={ destr('cardAttr2') }
          cardAttr3={ destr('cardAttr3') }
          cardImage={ destr('cardImage') }
          cardRare={ destr('cardRare') }
          cardTrunfo={ destr('cardTrunfo') }
        />
      </>
    );
  }
}

export default App;

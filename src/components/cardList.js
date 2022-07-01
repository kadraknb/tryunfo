import React from 'react';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { infoCard } = this.props;
    return (
      <ol>
        {infoCard.map((aa) => (
          <li key={aa[0]}>
            <Card
              cardName={aa[0]}
              cardDescription={aa[1]}
              cardImage={aa[2]}
              cardRare={aa[3]}
              cardAttr1={aa[4]}
              cardAttr2={aa[5]}
              cardAttr3={aa[6]}
              cardTrunfo={aa[7]}
            />
            {/* <button onClick={} >Excluir</button> */}
          </li>
        ))}
      </ol>
    );
  }
}

export default CardList;

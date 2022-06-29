const limite = (...aa) => {
  const limiteN = 91;
  const limite210 = 211;
  if (aa.every((bb) => bb < limiteN && bb >= 0)) {
    return parseFloat(aa[0]) + parseFloat(aa[1]) + parseFloat(aa[2]) < limite210;
  }
  return false;
};
const ButtonDisabled = (aa) => {
  const {
    cardName,
    cardDescription,
    cardImage,
    cardRare,
    cardAttr1,
    cardAttr2,
    cardAttr3,
  } = aa;
  const arr = [
    cardName,
    cardDescription,
    cardImage,
    cardRare,
    cardAttr1,
    cardAttr2,
    cardAttr3,
  ];

  if (!arr.some((bb) => !bb)) {
    return limite(cardAttr1, cardAttr2, cardAttr3);
  }

  return false;
};

export default ButtonDisabled;

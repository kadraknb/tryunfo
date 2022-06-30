const limite = (...aa) => {
  const limiteN = 91;
  const limite210 = 211;
  if (aa.every((bb) => bb < limiteN && bb >= 0)) {
    return parseFloat(aa[0]) + parseFloat(aa[1]) + parseFloat(aa[2]) < limite210;
  }
  return false;
};
const ButtonDisabled = (aa) => {
  if (!aa.some((bb) => !bb)) {
    return limite(aa[4], aa[5], aa[6]);
  }

  return false;
};

export default ButtonDisabled;

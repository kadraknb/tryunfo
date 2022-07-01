const N91 = 91;
const N211 = 211;
const N7 = 7;
const limite = (...aa) => {
  if (aa.every((bb) => bb < N91 && bb >= 0)) {
    return parseFloat(aa[0]) + parseFloat(aa[1]) + parseFloat(aa[2]) < N211;
  }
  return false;
};
const ButtonDisabled = (aa) => {
  const arr = Object.values(aa);
  if (!arr.slice(0, N7).some((bb) => !bb)) {
    return limite(arr[4], arr[5], arr[6]);
  }

  return false;
};

export default ButtonDisabled;

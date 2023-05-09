export default function addComma(value) {
  //   return value
  //     .toString()
  //     .split('')
  //     .reverse()
  //     .reduce((a, s, index) => ((index + 1) % 3 ? [...a, s] : [...a, s, ',']), [])
  //     .reverse()
  //     .join('');

  let newString = '';
  while (value > 999) {
    newString += ',' + value.toString().substr(-3, 3);
    value = Math.floor(value / 1e3);
  }
  return value.toString().concat(newString);
}

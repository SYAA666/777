module.exports = function getZerosCount(number) {
  var counterOfZeros = 0
    while(number > 0) {
      number = Math.floor(number  / 5);
      counterOfZeros += number;
    }
    return counterOfZeros;
}

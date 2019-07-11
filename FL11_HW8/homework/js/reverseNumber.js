function reverseNumber(numberResult) {
  let result = 0, basis;
  do {
    basis = numberResult % 10;
    result = (result * 10) + basis;
    numberResult = ~~(numberResult / 10);
  } while (numberResult);
  return result;
} 
reverseNumber(123);

function reverseNumber(number) {
  let result = 0, basis;
  do {
    basis = number % 10;
    result = (result * 10) + basis;
    number = ~~(number/10);
  } while (number);
  return result;
} 
reverseNumber(123);

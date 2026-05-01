function highestDigit(num) {
  return Math.max(...num.toString().split("").map(Number));
}

console.log(highestDigit(39482));

function mean(num) {
  const digits = num.toString().split("").map(Number);

  const sum = digits.reduce((a, b) => a + b, 0);

  return sum / digits.length;
}

console.log(mean(12345));

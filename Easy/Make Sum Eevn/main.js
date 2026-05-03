function makeSumEevn(num1, num2) {
  const sum = num1 + num2;
  if (sum % 2 !== 0) {
    return sum + 1;
  } else {
    return sum;
  }
}

console.log(makeSumEevn(4, 3));

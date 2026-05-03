function longestConsecutiveZeros(str) {
  let max = 0;
  let current = 0;

  for (let char of str) {
    if (char === "0") {
      current++;
      if (current > max) max = current;
    } else {
      current = 0;
    }
  }

  return max;
}

console.log(longestConsecutiveZeros("1010010001"));

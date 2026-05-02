function largestAfterSwap(num) {
  let digits = num.toString().split("").map(Number);

  let last = new Array(10).fill(-1);

  for (let i = 0; i < digits.length; i++) {
    last[digits[i]] = i;
  }

  for (let i = 0; i < digits.length; i++) {
    for (let d = 9; d > digits[i]; d--) {
      if (last[d] > i) {
        // swap
        let j = last[d];
        [digits[i], digits[j]] = [digits[j], digits[i]];
        return Number(digits.join(""));
      }
    }
  }

  return num;
}

console.log(largestAfterSwap(2736));
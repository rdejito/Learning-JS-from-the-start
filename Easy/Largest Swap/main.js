function largestSwap(num) {
  const reversed = Number(num.toString().split("").reverse().join(""));

  return num >= reversed;
}

console.log(largestSwap(27));

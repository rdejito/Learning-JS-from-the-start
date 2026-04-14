function addingArrayEnds(arr) {
  if (arr.length === 0) return 0; //if there's nothing in the array then it returns 0
  if (arr.length === 1) return arr[0]; // if there's an index in the array it return that index
  return arr[0] + arr[arr.length - 1]; // returns the sum of the first and last index of the array
}

console.log(addingArrayEnds([10, 20, 30])); // 40

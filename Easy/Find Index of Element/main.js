function findIndex(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}

// test
console.log(findIndex([2, 4, 6, 8, 10], 6)); // 2
console.log(findIndex([2, 4, 6, 8, 10], 3)); // -1

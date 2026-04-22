function arraySort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return "Not Sorted";
    }
  }
  return "Sorted";
}

console.log(arraySort([10, 20, 50, 40]));

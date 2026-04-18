function dashingNumbers(num) {
  return num.toString().split("").join("-");
}

console.log(dashingNumbers(12345)); //"1-2-3-4-5"

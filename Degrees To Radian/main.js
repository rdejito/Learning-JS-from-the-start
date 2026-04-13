function degreesToRadians(degrees) {
  return (Math.PI / 180) * degrees;
}

const radian = degreesToRadians(90).toFixed(3);
// I added .toFixed method to have 3 decimal places only.
console.log(radian);

function getDiscount(originalPrice, discountedPrice) {
  const discountReceived = originalPrice - discountedPrice;
  return `${originalPrice} - ${discountedPrice} = ${discountReceived}`;
}

console.log(getDiscount(500, 400));

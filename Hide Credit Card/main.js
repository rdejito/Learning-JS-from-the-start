function hideCreditCard(cardNumber) {
  const lastFour = cardNumber.slice(-4);
  const hiddenPart = "*".repeat(12);
  return hiddenPart + lastFour;
}

console.log(hideCreditCard("1234567890123456"));

function profitLossAmount(sellingPrice, costPrice) {
  const profitOrLoss = sellingPrice - costPrice;
  if (profitOrLoss > 0) return "Profit";
  if (profitOrLoss < 0) return "Loss";
  if (profitOrLoss == 0) return "Break-even";
}

console.log(profitLossAmount(100, 150));

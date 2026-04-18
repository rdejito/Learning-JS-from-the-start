function checkPronic(num) {
  if (num < 0) return false;
  
  for (let i = 0; i <= Math.sqrt(num); i++) {
    if (i * (i + 1) === num) {
      return "Pronic";
    }
  }
  return "Not Pronic";
}

console.log(checkPronic(12));

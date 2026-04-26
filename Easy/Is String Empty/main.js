function isStringEmpty(str) {
  return str.includes(" ") ? "Not Empty" : "Empty";
}

console.log(isStringEmpty("Hello World!")); // Not Empty

function isStringNotEmpty(str) {
  return str.includes(" ") ? "Not Empty" : "Empty";
}

console.log(isStringNotEmpty(" ")); // Not Empty

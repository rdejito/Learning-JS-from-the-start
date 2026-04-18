function convertToTitleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
}

console.log(convertToTitleCase("hello world")); // "Hello World"

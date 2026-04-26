function identicalSublists(list1, list2) {
  if (list1.length !== list2.length) return "Not Identical";

  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]) return "Not Identical";
  }

  return "Identical";
}

console.log(identicalSublists([1, 2, 3], [1, 2, 3]));

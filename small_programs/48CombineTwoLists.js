function interleave(array1, array2) {
  return array1.reduce((acc, elem, idx) => {
    acc.push(elem, array2[idx]);
    return acc;
  }, []);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
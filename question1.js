function sortByStrings(s, t) {
  //Initialize an object that will store the priority of each letter. Objects offer constant (O(1)) look up time.
  const tObj = {};
  for (let i = 0; i < t.length; i++) {
    const currentLetter = t[i];
    tObj[currentLetter] = i;
  }
  // Sort by the priority of each element based on its value in tObj.
  const sortedStr = s
    .split('')
    .sort((a, b) => tObj[a] - tObj[b])
    .join('');
  return sortedStr;
}

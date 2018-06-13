function changePossibilities(amount, denominations) {
  let counter = 0;
  for (let i = 0; i < denominations.length; i++) {
    const currentElem = denominations[i];
    const target = amount - currentElem;
    if (amount === currentElem) {
      counter++;
      break;
    } else if (target > 0) {
      //Eliminate coins whose combinations have already been exhausted through previous iterations to avoid repeats.
      counter += changePossibilities(target, denominations.slice(i));
    }
  }
  return counter;
}

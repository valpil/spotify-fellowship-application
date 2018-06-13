function decodeString(s) {
  let decodedStr = '';
  const intStack = [];
  const charStack = [];

  for (let i = 0; i < s.length; i++) {
    const currentElem = s[i];
    if (Number(currentElem)) {
      intStack.push(+currentElem);
    }
    //Once we hit a close bracket, we want to start popping off the most recently added characters until we hit an open bracket and add these characters to a string.
    else if (currentElem === ']') {
      let count = intStack.pop();
      let currentChar = charStack.pop();
      let strToAdd = '';
      while (currentChar !== '[') {
        strToAdd += currentChar;
        currentChar = charStack.pop();
      }
      //Call helper function repeatStr to repeat the string to add N times - N being the most last number in the integer stack.
      const repeatedStr = repeatStr(count, strToAdd);
      //Push each character in the repeated string back into the character stack to be added to the decoded string at the end.
      for (let j = 0; j < repeatedStr.length; j++) {
        charStack.push(repeatedStr[j]);
      }
    } else {
      charStack.push(currentElem);
    }
  }
  while (charStack.length) {
    decodedStr += charStack.pop();
  }
  return decodedStr;
}

function repeatStr(num, str) {
  let repeatedStr = '';
  while (num) {
    repeatedStr += str;
    num--;
  }
  return repeatedStr;
}

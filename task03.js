console.group("Task 3");
const findLongestWord = function (string) {
  const newString = string.split(" ");
  let theBiggestWord = "";
  for (let i = 0; i < newString.length; i += 1) {
    if (newString[i].length > theBiggestWord.length) {
      theBiggestWord = newString[i];
    }
  }
  return theBiggestWord;
};
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
console.groupEnd();

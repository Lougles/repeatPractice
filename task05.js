console.group("Task 5");
const checkForSpam = function (message) {
  const lowerCase = message.toLowerCase();
  if (lowerCase.includes("spam") || lowerCase.includes("sale")) {
    return true;
  }
  return false;
};
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
console.groupEnd();

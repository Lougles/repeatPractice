console.group("Task 4");
const formatString = function (string) {
  const newString = string.split("");
  if (newString.length > 40) {
    return `${newString.slice(0, 39).join("")}...`;
  }
  return newString.join("");
};
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
console.groupEnd();

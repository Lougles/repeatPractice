console.group("Task 6");
const numbers = [];
let i = 1;
let total = 0;
do {
  let input = prompt("Input a number");
  if (input === null) {
    for (const number of numbers) {
      if (numbers.length > 0) {
        total += number;
      }
    }
    console.log(`Общая сумма: ${total}`);
    break;
  }
  input = Number(input);
  if (Number.isNaN(input) === true) {
    alert("Это не число");
    continue;
  }
  numbers.push(input);
  console.log(numbers);
  console.log(`========== ${i}-я итерация. ============`);
  i += 1;
} while (true);
console.groupEnd();

console.group("Task 6");
let total = 0;
let i = 1;
do {
  let input = prompt("input number");
  if (input === null) {
    break;
  }
  input = Number(input);
  if (Number.isNaN(input) === true) {
    prompt("Было введено не число, попробуйте еще раз ");
    continue;
  }
  total += input;
  console.log(`Input ${i}-й: `, input);
  console.log(`Total ${i}-й: `, total);
  console.log(`========== Закончена ${i}-я итерация ========== `);
  i += 1;
} while (true);
console.groupEnd();

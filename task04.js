console.group("Task 4");
let credits = 23580;
const pricePerDroid = 3000;
const title = "How many droids do you want to buy?";
let message = prompt(title);
let totalPrice = 0;
if (message === null) {
  message = "Отменено пользователем!";
} else if (message * pricePerDroid > credits) {
  message = "Недостаточно средств на счету!";
} else if (message * pricePerDroid < credits && message.length > 0) {
  credits = credits - message * pricePerDroid;
  message = `Вы купили ${message} дроидов, на счету осталось ${credits} кредитов.`;
} else {
  message = "incorrect input";
}
console.log(message);
console.groupEnd();

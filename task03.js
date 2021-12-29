console.group("Task 3");
const password = "java";
const title = "Input a admin password";
let message = prompt(title);
if (message === null) {
  message = "Отменено пользователем!";
} else if (message !== password) {
  message = "Доступ запрещен, неверный пароль!";
} else if (message === password) {
  message = "Добро пожаловать!";
}
console.log(message);

console.groupEnd();

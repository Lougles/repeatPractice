console.group("Task 7");
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
};
const isLoginUnique = function (allLogins, login) {
  if (allLogins.includes(login) === false) {
    return true;
  }
  return false;
};
const addLogin = function (allLogins, login) {
  const isValid = isLoginValid(login);
  const isUnique = isLoginUnique(allLogins, login);
  if (isValid === false) {
    return `Ошибка! Ваш логин ${login} должен быть от 4 до 16 символов`;
  }
  if (isUnique === false) {
    return `Такой логин ${login} уже используется!`;
  }
  allLogins.push(login);
  return `${login} успешно добавлен`;
};
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(logins);
console.groupEnd();

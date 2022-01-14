import users from './users.js';
console.group("Task 1");


const getUserNames = arr => {
  return arr.map(user => user.name);
}

console.log(getUserNames(users));

console.groupEnd();

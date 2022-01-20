import users from './users.js';
console.group("Task 1");


const getUserNames = arr => {
  return arr.map(({name}) => name);
}

console.log(getUserNames(users));

console.groupEnd();

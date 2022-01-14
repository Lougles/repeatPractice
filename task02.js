import users from './users.js';
console.group("Task 2");

const getUserWithEyeColor = (arr, color) => {
  return arr.filter(user => user.eyeColor === color);
}

console.log(getUserWithEyeColor(users, 'blue'));

console.groupEnd();

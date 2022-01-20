import users from './users.js';
console.group("Task 3");

const getUsersWithGender = (arr, gend) => {
    return arr.filter(({gender}) => gender === gend).map(({name}) => name);
}
console.log(getUsersWithGender(users, 'male'));
console.groupEnd();

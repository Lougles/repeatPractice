import users from './users.js';
console.group("Task 8");
const getUsersWithFriend = (arr, friendName) => {
    return arr.filter(({friends}) => friends.includes(friendName)).map(({name}) => name);
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

console.groupEnd();

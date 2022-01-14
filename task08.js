import users from './users.js';
console.group("Task 8");
const getUsersWithFriend = (arr, friendName) => {
    const temp = arr.filter(user => user.friends.includes(friendName));
    return temp.map(user => user.name);
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

console.groupEnd();

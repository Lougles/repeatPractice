import users from './users.js';
console.group("Task 5");


const getUserWithEmail = (arr, email) => {
    return arr.find(user => user.email === email);
  };
  
console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));


console.groupEnd();

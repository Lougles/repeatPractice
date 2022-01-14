import users from './users.js';
console.group("Task 7");

const calculateTotalBalance = arr => {
    return arr.reduce((temp, user) => temp += user.balance ,0);
  };
  
  console.log(calculateTotalBalance(users)); // 20916
  

console.groupEnd();

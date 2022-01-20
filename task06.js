import users from './users.js';
console.group("Task 6");
const getUsersWithAge = (arr, min, max) => {
    return arr.filter(({age}) => age >= min && age <= max)
  };
  
  console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
  
  console.log(getUsersWithAge(users, 30, 40));
  // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
  
console.groupEnd();

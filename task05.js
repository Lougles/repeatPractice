import users from './users.js';
console.group("Task 5");


const getUserWithEmail = (arr, mail) => {
    return arr.find(({email}) => email === mail);
  };
  
console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));


console.groupEnd();

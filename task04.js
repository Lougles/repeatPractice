import users from './users.js';
console.group("Task 4");

const getInactiveUsers = users => {
    const temp =  users.filter(user => user.isActive === false);
    return temp.map(user => user);
}

console.log(getInactiveUsers(users));

console.groupEnd();

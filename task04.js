import users from './users.js';
console.group("Task 4");

const getInactiveUsers = users => {
    return users.filter(({isActive}) => !isActive);
}

console.log(getInactiveUsers(users));

console.groupEnd();

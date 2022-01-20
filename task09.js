import users from './users.js';
console.group("Task 9");

const getNamesSortedByFriendsCount = arr => {
    return arr.sort((a,b) => a.friends.length > b.friends.length ? 1 : -1).map(({name}) => name);
}

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


console.groupEnd();

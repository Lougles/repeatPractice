import users from './users.js';
console.group("Task 9");

const getNamesSortedByFriendsCount = qq => {
    const qwer = qq.sort((a,b) => a.friends.length > b.friends.length ? 1 : -1);
    return qwer.map(item => item.name);
}

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


console.groupEnd();

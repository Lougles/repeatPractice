import users from './users.js';
console.group("Task 3");

const getUsersWithGender = (arr, gender) => {
    const qwer = arr.filter(temp => temp.gender === gender);
    return qwer.map(temp => temp.name);
}
console.log(getUsersWithGender(users, 'male'));
console.groupEnd();

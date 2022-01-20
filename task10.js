import users from './users.js';
console.group("Task 10");

const getSortedUniqueSkills = arr => {
    // const newArr = [];
    // arr.map(({skills}) => newArr.push(...skills));
    // const resultArr = [];
    // newArr.filter((current) => !resultArr.includes(current) ? resultArr.push(current) : -1 );
    // return resultArr.sort();
    return arr.reduce((acc, {skills}) => {
        acc.push(...skills);
        return acc;
    }, []).filter((current, index, arr) => arr.indexOf(current) === index).sort();
}
  
  console.log(getSortedUniqueSkills(users));
  [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
  
console.groupEnd();

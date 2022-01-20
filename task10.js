import users from './users.js';
console.group("Task 10");

const getSortedUniqueSkills = arr => {
    const newArr = [];
    arr.map(item => {
        return newArr.push(item.skills);
    })
    const arrFlat = newArr.flat();
    const resultArr = [];
    arrFlat.filter((current) => {
        if (!resultArr.includes(current)){
            resultArr.push(current);
        }
    });
    return resultArr.sort();
  };
  
  console.log(getSortedUniqueSkills(users));
  [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
  
console.groupEnd();

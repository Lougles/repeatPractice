console.group('test task');
const words = ['pepsi', 'route', 'react', 'puppy', 'drama'];

const CountFirstLetters = arr => {
    return arr.reduce((acc, item) => {
        const split = item.split('')[0];
        acc[split] ? acc[split]++ : acc[split] = 1;
        return acc;
    }, {});
}
console.log(CountFirstLetters(words));

console.groupEnd();
console.group('test task');
const words = ['pepsi', 'route', 'react', 'puppy', 'drama'];

const CountFirstLetters = arr => {
    const letterObj = {}
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const split = element.split('');
        letterObj[split[0]] ? letterObj[split[0]]++ : letterObj[split[0]] = 1;
    }
    return letterObj;
}
console.log(CountFirstLetters(words));

console.groupEnd();
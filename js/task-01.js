console.group('Task - 1');

const findCategoryCount = str => {
    const ref = document.querySelectorAll(str);
    return `В списке ${ref.length} категорий.`
}
const findElemOfCategory = str => {
    const objCat = {};
    const ref = document.querySelectorAll(str);
    for (const i of ref){
        objCat[i.firstElementChild.innerHTML] =  i.children[1].children.length;
        // console.log(`Категория: ${i.firstElementChild.innerHTML}`);
        // console.log(`Количество елементов: ${i.children[1].children.length}`);
    }
    return objCat;
}

console.log(findCategoryCount('.item'));
console.log(findElemOfCategory('.item'));

const qqq = document.querySelectorAll('.item');
for (const i of qqq){
    console.log(`Категория: ${i.firstElementChild.innerHTML}`);
    console.log(`Количество елементов: ${i.children[1].children.length}`);
}
// console.log(qqq);
console.groupEnd();
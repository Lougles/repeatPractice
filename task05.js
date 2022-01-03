console.group("Task 5");
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];
const getAllPropValues = function (arr, prop) {
  const newArr = [];
  for (const i of arr) {
    if (i[prop] !== undefined) {
      newArr.push(i[prop]);
    }
  }
  return newArr;
};
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
console.log(getAllPropValues(products, "category")); // []
console.groupEnd();

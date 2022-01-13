console.group("Task 3");
// const Storage = function (arg = []){
//     this.arg = arg;
// }
// Storage.prototype.getItems = function () {
//     return this.arg;
// }
// Storage.prototype.addItem = function(item) {
//      return this.arg.push(item);
// }
// Storage.prototype.removeItem = function(item) {
//     const index = this.arg.indexOf(item);
//     if (index > -1 ){
//         return this.arg.splice(index, 1);
//     }
// }
class Storage {
    constructor(arg = []) {
        this.arg = arg;
    }
    getItems() {
        return this.arg;
    }
    addItem(item) {
        return this.arg.push(item);
    }
    removeItem(item) {
        const index = this.arg.indexOf(item);
        index > - 1 ? this.arg.splice(index, 1) : console.log(`no such "${item}" element`);
    }
}
const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.table(storage.getItems()); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.table(storage.getItems()); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
console.groupEnd();


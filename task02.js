console.group("Task 2");
const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);
    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);
    this.items = this.items.filter(item => item !== itemName);
  },
};
const invokeInventoryAction = function(itemName, action) {
  console.log(action);
  console.log(typeof(action));
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};
invokeInventoryAction.bind('Medkit', inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory
console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
invokeInventoryAction.bind('Gas mask', inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory
console.log(inventory.items); // ['Knife', 'Medkit']
console.groupEnd();

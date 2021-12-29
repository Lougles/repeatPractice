console.group("Task 2");
function sklad(order, total) {
  if (order < total) {
    return `Вы заказали ${order} едениц товара. Заказ оформлен, с вами свяжется менеджер`;
  } else if (order > total) {
    return `Вы заказали ${order} единиц товара, а у нас на складе есть только ${total} единиц. Выберете другую сумму!`;
  }
}
console.log(sklad(20, 100));
console.log(sklad(80, 100));
console.log(sklad(130, 100));
console.groupEnd();

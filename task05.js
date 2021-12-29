console.group("Task 5");
const title = "Input a country?";
let message = prompt(title).toLocaleLowerCase();
let price = 100;
switch (message) {
  case null:
    console.log("Отменено пользователем!");
    break;
  case "китай":
    console.log(`Доставка в ${message} будет стоить ${price} кредитов`);
    break;
  case "чили":
    console.log(`Доставка в ${message} будет стоить ${price * 2.5} кредитов`);
    break;
  case "австралия":
    console.log(`Доставка в ${message} будет стоить ${price * 1.7} кредитов`);
    break;
  case "индия":
    console.log(`Доставка в ${message} будет стоить ${price * 0.8} кредитов`);
    break;
  case "ямайка":
    console.log(`Доставка в ${message} будет стоить ${price * 1.2} кредитов`);
    break;
  default:
    console.log(`В ${message} нет доставки`);
}
console.groupEnd();

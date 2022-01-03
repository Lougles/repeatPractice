console.group("Task 7");
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    let id = "id" + Math.random().toString(16).slice(2);
    if (type === Transaction.DEPOSIT) {
      this.deposit(amount);
      const obj = { id, type, amount };
      this.transactions.push(obj);
      return console.log("Create new object", obj);
    } else if (type === Transaction.WITHDRAW) {
      this.withdraw(amount);
      const obj = { id, type, amount };
      this.transactions.push(obj);
      return console.log("Create new object", obj);
    }
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    this.balance -= amount;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `Ваш баланс: ${this.balance}`;
  },
  getAllTransactions() {
    for (const i of this.transactions) {
      console.log(
        `Transaction: id: ${i.id}, type: ${i.type}, amount: ${i.amount}`
      );
    }
  },
  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const i of this.transactions) {
      if (id.includes(i.id)) {
        return i;
      }
    }
    return `Not found!`;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let allAmountOfType = 0;
    for (const i of this.transactions) {
      if (i.type === type) {
        allAmountOfType += i.amount;
      }
    }
    return allAmountOfType;
  },
};
account.createTransaction(1000, Transaction.DEPOSIT);
console.log(account.getBalance());
account.createTransaction(500, Transaction.DEPOSIT);
console.log(account.getBalance());
account.createTransaction(300, Transaction.WITHDRAW);
console.log(account.getBalance());
account.createTransaction(200, Transaction.WITHDRAW);
console.log(account.getBalance());
console.log(account.transactions);
console.log(account.getTransactionDetails("idbf048ee5f550b"));
account.getAllTransactions();
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.groupEnd();

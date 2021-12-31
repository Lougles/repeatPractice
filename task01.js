console.group("Task 1");
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
  addNewKey({ NewKey, NewValue }) {
    this[NewKey] = NewValue;
  },
  addNewWay(WayKey, WayValue) {
    this[WayKey] = WayValue;
  },
  updateHobby(newHobby) {
    this.hobby = newHobby;
  },
  updatePremium(newStatus) {
    this.premium = newStatus;
  },
};
console.log(user);
// user.mood = "happy";
user.addNewKey({ NewKey: "mood", NewValue: "happy" });
user.addNewWay("NewWayKEY", "NewVALUE");
user.updateHobby("skydiving");
user.updatePremium(false);
const objKey = Object.keys(user);
console.log(objKey);
console.log(user);
console.groupEnd();

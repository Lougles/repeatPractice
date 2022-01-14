console.group("Task 5");
class Car {
    static  getSpecs(car){
        console.log(`Name: ${car._name}, MaxSpeed: ${car._maxSpeed}, Speed: ${car._speed}, isOn: ${car._isOn}, Distance: ${car._distance}, Price: ${car._price}`);
    }
    constructor({name, speed = 0, price, maxSpeed, isOn = false, distance = 0}) {
        this._name = name;
        this._speed = speed;
        this._price = price;
        this._maxSpeed = maxSpeed;
        this._isOn = isOn;
        this._distance = distance;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    turnOn() {
        this._isOn = true;
    }
    turnOff() {
        this._speed = 0;
        this._isOn = false;
    }
    accelerate(value) {
        if (this._speed + value < this._maxSpeed) {
            this._speed += value;
        }
    }
    decelerate(value) {
        if (this._speed - value > 0) {
            this._speed -= value;
        }
    }
    drive(hours) {
        if (this._isOn) {
            this._distance += hours * this._speed;
        }
    }
}
const mustang = new Car({name: "Mustang", maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log('Price: ',mustang.price); // 2000
mustang.price = 4000;
console.log('Price: ',mustang.price); // 4000

const toyotaRav4 = new Car({name: "Toyota Rav 4",maxSpeed: 240, price: 12000});
toyotaRav4.turnOn();
toyotaRav4.accelerate(120);
toyotaRav4.drive(4);

Car.getSpecs(toyotaRav4);

toyotaRav4.decelerate(60);
toyotaRav4.drive(1);
toyotaRav4.turnOff();

Car.getSpecs(toyotaRav4);

console.groupEnd();
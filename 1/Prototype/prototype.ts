class TeslaCar {
  model: string;
  price: number;
  color: string;
  autoPilot: boolean;
  constructor(model: string, price: number, color: string, autoPilot: boolean) {
    this.model = model;
    this.price = price;
    this.color = color;
    this.autoPilot = autoPilot;
  }
  produce(): TeslaCar {
    return new TeslaCar(this.model, this.price, this.color, this.autoPilot);
  }
}
const prototypeCar = new TeslaCar("S", 9999, "black", false);

let car1 = prototypeCar.produce();
let car2 = prototypeCar.produce();
let car3 = prototypeCar.produce();

car2.color = "yellow";
car3.autoPilot = true;

console.log("Car1 ", car1);
console.log("Car2 ", car2);
console.log("Car3 ", car3);

class OrderStatus {
  name: string;
  nextStatus;
  constructor(_name: string, _nextStatus) {
    this.name = _name;
    this.nextStatus = _nextStatus;
  }
  next() {
    return new this.nextStatus();
  }
}

class WaitingForPayment extends OrderStatus {
  constructor() {
    super("waiting for payment", Shiping);
  }
}
class Shiping extends OrderStatus {
  constructor() {
    super("shiping", Delivered);
  }
}
class Delivered extends OrderStatus {
  constructor() {
    super("Delivered", Delivered);
  }
}

class Order {
  state: OrderStatus;
  constructor() {
    this.state = new WaitingForPayment();
  }
  nextState() {
    this.state = this.state.next();
  }
  cancelOreder() {
    this.state.name === "waiting for payment"
      ? console.log("Order is canceled!")
      : console.log("Order can not be Canceled!");
  }
}

const myOrder = new Order();
console.log(myOrder.state.name);
myOrder.cancelOreder();
//----------------------------
myOrder.nextState();
console.log(myOrder.state.name);
//----------------------------
myOrder.nextState();
console.log(myOrder.state.name);
//---------------------------

myOrder.cancelOreder();

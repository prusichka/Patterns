class Shop {
  successor: Shop;
  name: string;
  balance: number;
  setNext(shop : any) : void{
    this.successor = shop;
  }

  pay(amountForHelp) : void {
    if (this.canPay(amountForHelp)) {
      console.log(`Friend ${this.name} can help u with ${amountForHelp} `);
    } else if (this.successor) {
      console.log(`Cannot Friend help with money ${this.name}. Proceeding...`);
      this.successor.pay(amountForHelp);
    } else {
      console.log("None of the friends can help u!");
    }
  }

  canPay(amount : any): any {
    return this.balance >= amount;
  }
}

class Stepan extends Shop {
  constructor(balance : any) {
    super();
    this.name = "Stepan";
    this.balance = balance;
  }
}

class Denis extends Shop {
  constructor(balance) {
    super();
    this.name = "Denis";
    this.balance = balance;
  }
}

class Ivan extends Shop {
  constructor(balance) {
    super();
    this.name = "Ivan";
    this.balance = balance;
  }
}

let stepan = new Stepan(150)
let denis = new Denis(500)
let ivan = new Ivan(1500)

stepan.setNext(Stepan)
denis.setNext(Denis)

ivan.pay(1200)
denis.pay(400);
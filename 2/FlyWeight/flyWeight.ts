class RandomAlc {}

class Alcohol {
  availableAlc: {};
  constructor() {
    this.availableAlc = {};
  }

  make(preference) {
    this.availableAlc[preference] =
      this.availableAlc[preference] || new RandomAlc();
    return this.availableAlc[preference];
  }
}

class AlcShop {
  acl: any;
  orders: any;
  constructor(acl) {
    this.acl = acl;
    this.orders = [];
  }

  takeOrder(alcType : string, table : number) {
    this.orders[table] = this.acl.make(alcType);
  }

  serve(alcType : string) {
    this.orders.forEach((order,index) => {
      console.log(`Serving ${alcType}  to table#` + index);
    });
  }
}

const teaMaker = new Alcohol();
const shop = new AlcShop(teaMaker);

shop.takeOrder("Viski", 1);
shop.takeOrder("Rom", 2);
shop.takeOrder("Beer", 5);

shop.serve('Viski');

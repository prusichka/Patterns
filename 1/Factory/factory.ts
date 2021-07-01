interface Transport {
  companyName: string;
  type: string;
  outPut(): string;
}

class ShipWay implements Transport {
  companyName: string;
  type: string = "Ship";
  constructor(companyName: string) {
    this.companyName = companyName;
  }
  outPut(): string {
    return `${this.companyName} delivers the ${this.type}`;
  }
}
class TruckWay implements Transport {
  companyName: string;
  type: string = "Truck";
  constructor(companyName: string) {
    this.companyName = companyName;
  }
  outPut(): string {
    return `${this.companyName} delivers the ${this.type}`;
  }
}
class PlaneWay implements Transport {
  companyName: string;
  type: string = "Plane";
  constructor(companyName: string) {
    this.companyName = companyName;
  }
  outPut(): string {
    return `${this.companyName} delivers the ${this.type}`;
  }
}

class DeliveryFactory {
  static types: {} = {
    ship: ShipWay,
    truck: TruckWay,
    plane : PlaneWay
  };
  createInfo(comp: string, way: string = "ship"): Transport {
    const DeliveryClass = DeliveryFactory.types[way] || DeliveryFactory.types["ship"];
    let article = new DeliveryClass(comp);
    return article;
  }
}

let company = new DeliveryFactory();
let firstCompany = company.createInfo("Asus", "ship");
console.log(firstCompany.outPut());
let secondCompany = company.createInfo("Apple", "truck");
console.log(secondCompany.outPut());
let company3 = company.createInfo("Sumsung", "plane");
console.log(company3.outPut());
let company4 = company.createInfo("Canon");
console.log(company4.outPut());
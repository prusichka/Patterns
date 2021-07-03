class Component {
  name: string;
  price: number;
  constructor(_name: string, _price: number) {
    this.name = _name;
    this.price = _price;
  }
  execute(): number {
    return;
  }
}
class Leaf extends Component {
  execute() {
    return this.price;
  }
}
class Composite extends Component{
  targets: Component[] = [];
  self: Composite = this;
  add(component : Component) {
    this.targets.push(component);
  }
  execute():number {
    this.targets.forEach(component => {
      this.self.price = this.self.price + component.execute();
    })
    let sum = this.self.price;
    this.self.price = 0;
    return sum;
  }
}

const Car = new Composite('Car', 0);
Car.add(new Leaf('wheels', 999));
Car.add(new Leaf('Tools', 9654));
Car.add(new Leaf('Body', 14785));
console.log(Car.execute());

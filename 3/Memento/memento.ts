class Memento {
  value: string;
  constructor(value: string) {
    this.value = value;
  }
}
const creator = {
  save: (val: string) => new Memento(val),
  restore: (memento: Memento) => memento.value,
};
class Caretaker {
  _values: Memento[];
  constructor() {
    this._values = [];
  }
  addMemento(memento: Memento) {
    this._values.push(memento);
  }
  getMemento(index: number) {
    return this._values[index];
  }
}

const caretaker = new Caretaker();
caretaker.addMemento(creator.save("Hello"));
caretaker.addMemento(creator.save("Hello www"));
caretaker.addMemento(creator.save("Hello qqqqqq"));

console.log(creator.restore(caretaker.getMemento(0)));

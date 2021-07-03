class Iterators {
  index: number;
  elements: string[];
  constructor(el: string[]) {
    this.index = 0;
    this.elements = el;
  }
  next() {
    return this.elements[this.index++];
  }
  hasNext() {
    return this.index < this.elements.length;
  }
}

const collection = new Iterators(["BMW", "Audi", "Honda", "Tesla"]);
while (collection.hasNext()) {
  console.log(collection.next());
}

const firstArray: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const secondArray: number[] = [0, 2, 4, 6, 8];

class ArrayCheck {
  array: number[];
  constructor(array: number[]) {
    this.array = array;
  }
  longArray() {
    if (this.array.length >= 5) {
      console.log(`${this.array} : is Long`);
    } else {
      console.log(`${this.array} : is Short`);
    }
  }
}

const z1 = new ArrayCheck(firstArray);
z1.longArray();
console.log(z1.array);

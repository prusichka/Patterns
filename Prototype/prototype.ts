class Cars {
  private count: number = 4;
  user?: string;
  constructor(user: string) {
    this.user = user;
  }
  outPut(): string {
    return `${this.user} have ${this.count} cars`;
  }
  clone():this {
    return Object.create(this);
  }
}
const user = new Cars("Denis");
const userClone = user.clone();
console.log(user.outPut());
console.log(userClone.outPut());




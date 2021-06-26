class Cars {
  private count: number = 4;
  user?: string;
  constructor(user: string) {
    this.user = user;
  }
  outPut(): string {
    return `${this.user} have ${this.count} cars`;
  }
}
const user1 = new Cars("Denis");
console.log(user1.outPut());
const user2 = new Cars("Stepan");
console.log(user2.outPut());

class FreshNews {
  subscribes: User[] = [];
  state: string;
  subscribe(user: User) {
    this.subscribes.push(user);
  }
  setState(_state: string) {
    this.state = _state;
    this.notifyAll();
  }
  notifyAll() {
    for (const user of this.subscribes) {
      user.notify(`${user.name} you have fresh news : ${this.state}`);
    }
  }
}
class User {
  constructor(public name: string) {}
  notify(message: string) {
    console.log(message);
  }
}

const user1 = new User("Denis");
const user2 = new User("Yana");
const user3 = new User("Stepan");
const user4 = new User("Sergiy");

const news = new FreshNews();
news.subscribe(user1);
news.subscribe(user2);
news.subscribe(user3);
news.subscribe(user4);

news.setState("You have new subscribes");

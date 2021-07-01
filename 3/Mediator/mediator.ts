class ChatRoom {
  showMessage(user: User, message: string) {
    const sender = user.getName();
    console.log("[" + sender + "]:" + message);
  }
}
class User {
  name: string;
  chat : ChatRoom
  constructor(userName: string , mediator : ChatRoom) {
    this.name = userName;
    this.chat = mediator;
  }
  getName() {
    return this.name;
  }
  send(message : string) {
    this.chat.showMessage(this, message);
  }
}

const mediator = new ChatRoom()

const john = new User('John Doe', mediator)
const jane = new User('Jane Doe', mediator)

const Denis = new User('Denis',mediator);

john.send('Hi there!')
jane.send('Hey!')
Denis.send('qweqwe');

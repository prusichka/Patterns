interface Server {
  getInfo(): string;
  _id: string;
  _port: number;
}

class MyServer implements Server {
  _id: string;
  _port: number;
  constructor(_id: string, _port: number) {
    this._id = _id;
    this._port = _port;
  }
  getInfo(): string {
    return `https://${this._id}:${this._port}`;
  }
}

class Decorator implements Server {
  private server: Server;
  constructor(inf: Server) {
    this.server = inf;
  }
  getInfo(): string {
    return this.server.getInfo() + ` ggwp`;
  }
  _id: string;
  _port: number;
}

let s1 = new MyServer("123.33.2.1", 8080);
console.log(s1.getInfo());

let decor1 = new Decorator(new MyServer("12.33.312.3.122.21", 3000));
console.log(decor1.getInfo());

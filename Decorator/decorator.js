var MyServer = /** @class */ (function () {
    function MyServer(_id, _port) {
        this._id = _id;
        this._port = _port;
    }
    MyServer.prototype.getInfo = function () {
        return "https://" + this._id + ":" + this._port;
    };
    return MyServer;
}());
var Decorator = /** @class */ (function () {
    function Decorator(inf) {
        this.server = inf;
    }
    Decorator.prototype.getInfo = function () {
        return this.server.getInfo() + " ggwp";
    };
    return Decorator;
}());
var s1 = new MyServer("123.33.2.1", 8080);
console.log(s1.getInfo());
var decor1 = new Decorator(new MyServer("12.33.312.3.122.21", 3000));
console.log(decor1.getInfo());

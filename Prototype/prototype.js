var Cars = /** @class */ (function () {
    function Cars(user) {
        this.count = 4;
        this.user = user;
    }
    Cars.prototype.outPut = function () {
        return this.user + " have " + this.count + " cars";
    };
    return Cars;
}());
var user1 = new Cars("Denis");
console.log(user1.outPut());
var user2 = new Cars("Stepan");
console.log(user2.outPut());

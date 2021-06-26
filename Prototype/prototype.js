var Cars = /** @class */ (function () {
    function Cars(user) {
        this.count = 4;
        this.user = user;
    }
    Cars.prototype.outPut = function () {
        return this.user + " have " + this.count + " cars";
    };
    Cars.prototype.clone = function () {
        return Object.create(this);
    };
    return Cars;
}());
var user = new Cars("Denis");
var userClone = user.clone();
console.log(user.outPut());
console.log(userClone.outPut());

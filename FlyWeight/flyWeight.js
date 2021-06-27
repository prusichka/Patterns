var RandomAlc = /** @class */ (function () {
    function RandomAlc() {
    }
    return RandomAlc;
}());
var Alcohol = /** @class */ (function () {
    function Alcohol() {
        this.availableAlc = {};
    }
    Alcohol.prototype.make = function (preference) {
        this.availableAlc[preference] =
            this.availableAlc[preference] || new RandomAlc();
        return this.availableAlc[preference];
    };
    return Alcohol;
}());
var AlcShop = /** @class */ (function () {
    function AlcShop(acl) {
        this.acl = acl;
        this.orders = [];
    }
    AlcShop.prototype.takeOrder = function (alcType, table) {
        this.orders[table] = this.acl.make(alcType);
    };
    AlcShop.prototype.serve = function (alcType) {
        this.orders.forEach(function (order, index) {
            console.log("Serving " + alcType + "  to table#" + index);
        });
    };
    return AlcShop;
}());
var teaMaker = new Alcohol();
var shop = new AlcShop(teaMaker);
shop.takeOrder("Viski", 1);
shop.takeOrder("Rom", 2);
shop.takeOrder("Beer", 5);
shop.serve('Viski');

var ShipWay = /** @class */ (function () {
    function ShipWay(companyName) {
        this.type = "Ship";
        this.companyName = companyName;
    }
    ShipWay.prototype.outPut = function () {
        return this.companyName + " delivers the " + this.type;
    };
    return ShipWay;
}());
var TruckWay = /** @class */ (function () {
    function TruckWay(companyName) {
        this.type = "Truck";
        this.companyName = companyName;
    }
    TruckWay.prototype.outPut = function () {
        return this.companyName + " delivers the " + this.type;
    };
    return TruckWay;
}());
var PlaneWay = /** @class */ (function () {
    function PlaneWay(companyName) {
        this.type = "Plane";
        this.companyName = companyName;
    }
    PlaneWay.prototype.outPut = function () {
        return this.companyName + " delivers the " + this.type;
    };
    return PlaneWay;
}());
var DeliveryFactory = /** @class */ (function () {
    function DeliveryFactory() {
    }
    DeliveryFactory.prototype.createInfo = function (comp, way) {
        if (way === void 0) { way = "ship"; }
        var DeliveryClass = DeliveryFactory.types[way] || DeliveryFactory.types["ship"];
        var article = new DeliveryClass(comp);
        return article;
    };
    DeliveryFactory.types = {
        ship: ShipWay,
        truck: TruckWay,
        plane: PlaneWay
    };
    return DeliveryFactory;
}());
var company = new DeliveryFactory();
var firstCompany = company.createInfo("Asus", "ship");
console.log(firstCompany.outPut());
var secondCompany = company.createInfo("Apple", "truck");
console.log(secondCompany.outPut());
var company3 = company.createInfo("Sumsung", "plane");
console.log(company3.outPut());
var company4 = company.createInfo("Canon");
console.log(company4.outPut());

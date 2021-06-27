var WoodDoor = /** @class */ (function () {
    function WoodDoor() {
    }
    WoodDoor.prototype.DoorInfo = function () {
        return "I am a wooden door";
    };
    return WoodDoor;
}());
var IronDoor = /** @class */ (function () {
    function IronDoor() {
    }
    IronDoor.prototype.DoorInfo = function () {
        return "I am an iron door";
    };
    return IronDoor;
}());
var ExpertIronDoor = /** @class */ (function () {
    function ExpertIronDoor() {
    }
    ExpertIronDoor.prototype.ExpertInfo = function () {
        return "I can only fit iron doors";
    };
    return ExpertIronDoor;
}());
var ExpertWoodenDoor = /** @class */ (function () {
    function ExpertWoodenDoor() {
    }
    ExpertWoodenDoor.prototype.ExpertInfo = function () {
        return "I can only fit wooden doors";
    };
    return ExpertWoodenDoor;
}());
var WoodenFactory = /** @class */ (function () {
    function WoodenFactory() {
    }
    WoodenFactory.prototype.makeDoor = function () {
        var woodMake = new WoodDoor();
        return woodMake.DoorInfo();
    };
    WoodenFactory.prototype.makeExpert = function () {
        var woodExpert = new ExpertWoodenDoor();
        return woodExpert.ExpertInfo();
    };
    return WoodenFactory;
}());
var IronFactory = /** @class */ (function () {
    function IronFactory() {
    }
    IronFactory.prototype.makeDoor = function () {
        var ironMake = new IronDoor();
        return ironMake.DoorInfo();
    };
    IronFactory.prototype.makeExpert = function () {
        var ironExpert = new ExpertIronDoor();
        return ironExpert.ExpertInfo();
    };
    return IronFactory;
}());
var _woodenFactory = new WoodenFactory();
console.log(_woodenFactory.makeDoor());
console.log(_woodenFactory.makeExpert());
var _ironFactory = new IronFactory();
console.log(_ironFactory.makeDoor());
console.log(_ironFactory.makeExpert());

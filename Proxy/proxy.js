var MainDoor = /** @class */ (function () {
    function MainDoor() {
    }
    MainDoor.prototype.open = function () {
        console.log("Opening main door");
    };
    MainDoor.prototype.close = function () {
        console.log("Closing main door");
    };
    return MainDoor;
}());
var Security = /** @class */ (function () {
    function Security() {
        this.turget = new MainDoor();
        this.pin_code = 1111;
    }
    Security.prototype.openDoor = function (pin) {
        if (this.pin_code == pin) {
            this.turget.open();
        }
        else {
            this.turget.close();
        }
    };
    return Security;
}());
var s1 = new Security();
s1.openDoor(1111);
s1.openDoor(3333);

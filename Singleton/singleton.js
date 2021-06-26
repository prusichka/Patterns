var Sun = /** @class */ (function () {
    function Sun() {
    }
    Sun.getInstance = function () {
        if (!Sun.instance) {
            Sun.instance = new Sun();
        }
        return Sun.instance;
    };
    return Sun;
}());
var sun1 = Sun.getInstance();
var sun2 = Sun.getInstance();
console.log(sun1, sun2);
console.log(sun1 == sun2);

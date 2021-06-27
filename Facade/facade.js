var EmotionsGirl = /** @class */ (function () {
    function EmotionsGirl() {
    }
    EmotionsGirl.prototype.happy = function () {
        console.log("I'm happy :)");
    };
    EmotionsGirl.prototype.evil = function () {
        console.log("I'm evil >:O");
    };
    EmotionsGirl.prototype.calm = function () {
        console.log("I'm calm ^_^");
    };
    EmotionsGirl.prototype.disappointed = function () {
        console.log("I'm disappointed :C");
    };
    return EmotionsGirl;
}());
var EmotionsBoy = /** @class */ (function () {
    function EmotionsBoy() {
    }
    EmotionsBoy.prototype.happy = function () {
        console.log("-_-");
    };
    EmotionsBoy.prototype.evil = function () {
        console.log("--__--");
    };
    EmotionsBoy.prototype.calm = function () {
        console.log("---___---");
    };
    EmotionsBoy.prototype.disappointed = function () {
        console.log("----____----");
    };
    return EmotionsBoy;
}());
var Facade = /** @class */ (function () {
    function Facade() {
    }
    Facade.prototype.showEmotionsGirl = function () {
        console.log("emotions girl");
        new EmotionsGirl().calm();
        new EmotionsGirl().disappointed();
        new EmotionsGirl().evil();
        new EmotionsGirl().happy();
    };
    Facade.prototype.showEmotionsBoy = function () {
        console.log("emotions boy");
        new EmotionsBoy().happy();
        new EmotionsBoy().evil();
        new EmotionsBoy().calm();
        new EmotionsBoy().disappointed();
    };
    return Facade;
}());
var emotions = new Facade();
emotions.showEmotionsBoy();
emotions.showEmotionsGirl();

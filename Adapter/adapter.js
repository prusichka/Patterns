var StatusDay = /** @class */ (function () {
    function StatusDay() {
    }
    StatusDay.prototype.dayStatus = function (status) {
        console.log("i have a " + status + " day");
    };
    return StatusDay;
}());
var NewStatusDay = /** @class */ (function () {
    function NewStatusDay() {
    }
    NewStatusDay.prototype.niceDay = function () {
        console.log("i have a nice day");
    };
    NewStatusDay.prototype.badDay = function () {
        console.log("i have a bad day");
    };
    return NewStatusDay;
}());
var StatusDayAdapter = /** @class */ (function () {
    function StatusDayAdapter() {
        this.firstDay = new NewStatusDay();
    }
    StatusDayAdapter.prototype.dayStatus = function (status) {
        if (status == "nice") {
            this.firstDay.niceDay();
        }
        else if (status == "bad") {
            this.firstDay.badDay();
        }
    };
    return StatusDayAdapter;
}());
var statusDay = new StatusDay();
statusDay.dayStatus('lol');
var newStatusDay = new StatusDay();
statusDay.dayStatus('nice');
var adapterStatus = new StatusDayAdapter();
adapterStatus.dayStatus('bad');
var adapterStatus2 = new StatusDayAdapter();
adapterStatus2.dayStatus('nice');

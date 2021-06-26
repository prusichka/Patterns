
class StatusDay {
  dayStatus(status: string): void {
    console.log(`i have a ${status} day`);
  }
}

class NewStatusDay {
  niceDay(): void {
    console.log(`i have a nice day`);
  }
  badDay(): void {
    console.log(`i have a bad day`);
  }
}

class StatusDayAdapter {
  firstDay = new NewStatusDay();
  dayStatus(status: string): void {
    if (status == "nice") {
      this.firstDay.niceDay();
    } else if (status == "bad") {
      this.firstDay.badDay();
    }
  }
}

let statusDay = new StatusDay();
statusDay.dayStatus('lol');
let newStatusDay = new StatusDay();
statusDay.dayStatus('nice');
let adapterStatus = new StatusDayAdapter();
adapterStatus.dayStatus('bad');
let adapterStatus2 = new StatusDayAdapter();
adapterStatus2.dayStatus('nice');
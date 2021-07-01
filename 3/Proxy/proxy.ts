interface Door {
  open(): void;
  close(): void;
}

class MainDoor implements Door {
  open(): void {
    console.log(`Opening main door`);
  }
  close(): void {
    console.log(`Closing main door`);
  }
}
class Security {
  turget: MainDoor = new MainDoor();
  pin_code: number = 1111;
  openDoor(pin: number) {
    if (this.pin_code == pin) {
      this.turget.open();
    }
    else {
      this.turget.close();
    }
  }
}

let s1 = new Security();
s1.openDoor(1111);

s1.openDoor(3333);
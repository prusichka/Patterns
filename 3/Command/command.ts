class Bulb {
  on(): any {
    console.log("Bulb has been lit");
  }
  off(): any {
    console.log("The light was off");
  }
}
interface Command {
  execute(): any;
  undo(): any;
  redo(): any;
}

class TurnOnCommand implements Command {
  bulb: Bulb;
  constructor(bulb: any) {
    this.bulb = bulb;
  }
  execute(): Bulb {
    return this.bulb.on();
  }
  undo(): Bulb {
    return this.bulb.off();
  }
  redo(): Bulb {
    return this.execute();
  }
}
class TurnOffCommand implements Command {
  bulb: Bulb;
  constructor(bulb: any) {
    this.bulb = bulb;
  }
  execute(): Bulb {
    return this.bulb.off();
  }
  undo(): Bulb {
    return this.bulb.on();
  }
  redo(): Bulb {
    return this.execute();
  }
}

class RemoteControl {
  submit(command) {
    command.execute();
  }
}

const bulb = new Bulb();

const turnOn = new TurnOnCommand(bulb);
const turnOff = new TurnOffCommand(bulb);

const remote = new RemoteControl();
remote.submit(turnOn);
remote.submit(turnOff);

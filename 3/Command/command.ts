class Driver {
  command: Driver;
  constructor(command: Driver) {
    this.command = command;
  }
  execute(){
    this.command.execute();
  }
}
class Engine {
  state: boolean;
  constructor() {
    this.state = false;
  }
  on() {
    this.state = true;
    console.log(`Engine status <<ON>>`);
  }
  off() {
    this.state = false;
    console.log(`Engine status <<OFF>>`);
  }
}

class StartEngine {
  command : Driver
  engine: Engine;
  constructor(engine: Engine) {
    this.engine = engine;
  }
  execute() {
    this.engine.on();
  }
}
class OffEngine {
  command : Driver
  engine: Engine;
  constructor(engine: Engine) {
    this.engine = engine;
  }
  execute() {
    this.engine.off();
  }
}

const engine = new Engine();


const onStartCommand = new StartEngine(engine);
const driver = new Driver(onStartCommand);
driver.execute();
console.log(engine);


const offCommand = new OffEngine(engine)
const driver2 = new Driver(offCommand);
driver2.execute();
console.log(engine);


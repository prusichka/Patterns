class BuilderAuto {
  addEngine() {}
  installChasic() {}
  collectAccesories() {}
  addWheels() {}
  addElectric() {}
  build() {
    this.addEngine();
    this.installChasic();
    this.addElectric();
    this.collectAccesories();
    this.addWheels();
  }
}

class BMW extends BuilderAuto {
  addEngine(): void {
    console.log("Add BMW Engine");
  }
  installChasic(): void {
    console.log("Install BMW Chasic");
  }
  addElectric(): void {
    console.log("Add BMW Electric");
  }
  collectAccesories(): void {
    console.log("Collect Accesories");
  }
  addWheels(): void {
    console.log("Add BMW weels \n");
  }
}

class Honda extends BuilderAuto {
  addEngine(): void {
    console.log("Add Honda Engine");
  }
  installChasic(): void {
    console.log("Install Honda Chasic");
  }
  addElectric(): void {
    console.log("Add Honda Electric");
  }
  collectAccesories(): void {
    console.log("Collect Accesories");
  }
  addWheels(): void {
    console.log("Add Honda weels");
  }
}

const bmwBuilder = new BMW();
const hondaBuilder = new Honda();

bmwBuilder.build();
hondaBuilder.build();

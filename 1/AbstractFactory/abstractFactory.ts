interface Door {
  DoorInfo(): string;
}
interface DoorExpert {
  ExpertInfo(): string;
}
interface DoorFactory {
  makeDoor(): string;
  makeExpert(): string;
}

class WoodDoor implements Door {
  DoorInfo(): string {
    return "I am a wooden door";
  }
}
class IronDoor implements Door {
  DoorInfo(): string {
    return "I am an iron door";
  }
}

class ExpertIronDoor implements DoorExpert {
  ExpertInfo(): string {
    return "I can only fit iron doors";
  }
}
class ExpertWoodenDoor implements DoorExpert {
  ExpertInfo(): string {
    return "I can only fit wooden doors";
  }
}

class WoodenFactory implements DoorFactory {
  makeDoor(): string {
    let woodMake = new WoodDoor();
    return woodMake.DoorInfo();
  }
  makeExpert() :string {
    let woodExpert = new ExpertWoodenDoor();
    return woodExpert.ExpertInfo();
  }
}
class IronFactory implements DoorFactory {
  makeDoor(): string {
    let ironMake = new IronDoor();
    return ironMake.DoorInfo();
  }
  makeExpert() :string {
    let ironExpert = new ExpertIronDoor();
    return ironExpert.ExpertInfo();
  }
}

let _woodenFactory = new WoodenFactory();
console.log(_woodenFactory.makeDoor());
console.log(_woodenFactory.makeExpert());

let _ironFactory = new IronFactory();
console.log(_ironFactory.makeDoor());
console.log(_ironFactory.makeExpert());

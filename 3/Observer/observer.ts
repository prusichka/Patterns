interface Target {
  subscribe(observer : Observer): void;
  unsubscribe(observer : Observer): void;
  notify(observer : Observer): void;
}
interface Observer {

  update(subject: Target): void;
}

class ConcretTarget implements Target {
  static state: number;
  private observers: Observer[] = [];
  subscribe(observer: Observer):void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('Subject: Observer has been attached already.');
    }
    console.log(`Subject : Attached an observer.`);
    this.observers.push(observer);
  }
  unsubscribe(observer: Observer) : void {
    const observerIndex = this.observers.indexOf(observer)
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.');
    }
    this.observers.splice(observerIndex, 1);
    console.log('Subject: Detached an observer.');
  }
  notify(observer: Observer) : void {
    console.log('Subject: Notifying observers...');
    for (const observer of this.observers) {
        observer.update(this);
    }
  }
}

class ConcreteObserverA implements Observer {
  public update(subject: Target): void {
      if (subject instanceof ConcretTarget && ConcretTarget.state < 3) {
          console.log('ConcreteObserverA: Reacted to the event.');
      }
  }
}

class ConcreteObserverB implements Observer {
  public update(subject: Target): void {
      if (subject instanceof ConcretTarget && (ConcretTarget.state === 0 || ConcretTarget.state >= 2)) {
          console.log('ConcreteObserverB: Reacted to the event.');
      }
  }
}


const subject = new ConcretTarget();

const observer1 = new ConcreteObserverA();
subject.subscribe(observer1);

const observer2 = new ConcreteObserverB();
subject.subscribe(observer2);
subject.unsubscribe(observer2);

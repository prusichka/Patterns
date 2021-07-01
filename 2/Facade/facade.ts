class EmotionsGirl {
  happy(): void {
    console.log(`I'm happy :)`);
  }
  evil(): void {
    console.log(`I'm evil >:O`);
  }
  calm(): void {
    console.log(`I'm calm ^_^`);
  }
  disappointed(): void {
    console.log(`I'm disappointed :C`);
  }
}

class EmotionsBoys {
  happy(): void {
    console.log(`-_-`);
  }
  evil(): void {
    console.log(`--__--`);
  }
  calm(): void {
    console.log(`---___---`);
  }
  disappointed(): void {
    console.log(`----____----`);
  }
}
class Facade {
  showEmotionsGirl(): void {
    console.log("emotions girl");
    new EmotionsGirl().calm();
    new EmotionsGirl().disappointed();
    new EmotionsGirl().evil();
    new EmotionsGirl().happy();
  }
  showEmotionsBoy(): void {
    console.log("emotions boy");
    new EmotionsBoys().happy();
    new EmotionsBoys().evil();
    new EmotionsBoys().calm();
    new EmotionsBoys().disappointed();
  }
}
let emotions = new Facade();
emotions.showEmotionsBoy();
emotions.showEmotionsGirl();

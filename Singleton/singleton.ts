class Sun {
  private static instance: Sun;
  private constructor() {}
  static getInstance(): Sun {
    if (!Sun.instance) {
      Sun.instance = new Sun();
    }
    return Sun.instance;
  }
}
const sun1 = Sun.getInstance();
const sun2 = Sun.getInstance();
console.log(sun1,sun2);
console.log(sun1 == sun2);

class Auto {
  model: string;
  constructor(modelName: string) {
    this.model = modelName;
  }
}

class AutoFactory {
  _models: Auto[];
  constructor(_model?: string) {
    this._models = [];
  }
  create(name: string): Object {
    let auto = this._models[name];
    if (auto) return auto;
    console.count("model");
    this._models[name] = new Auto(name);
    return this._models[name];
  }
  getInfoModel(): void{
    console.table(this._models)
  }
}
const factory = new AutoFactory();
let car1 = factory.create('BMW')
let car2 = factory.create('Audi')
let car3 =factory.create('Tesla')
let car4 = factory.create('Tesla')

factory.getInfoModel();

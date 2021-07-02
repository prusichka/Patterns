class User {
  private firstName: string;
  private lastName: string;
  private age: number;
  private street: string;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    street: string
  ) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
    this.street = street;
  }
  /**
   * printInfo
   */
  public printInfo(): void {
    console.log(`User : ${this.firstName} ${this.lastName}`);
    console.log(`Age : ${this.age}`);
    console.log(`Street : ${this.street}`);
  }
}

class UserBuilder {
  private _firstName: string;
  private _lastName: string;
  private _age: number;
  private _street: string;
  constructor() {
    this._age = -1;
    this._firstName = "";
    this._lastName = "";
    this._street = "";
  }
  public static user(): UserBuilder {
    return new UserBuilder();
  }
  public withFirstName(name: string): UserBuilder {
    this._firstName = name;
    return this;
  }
  public withLastName(surname: string): UserBuilder {
    this._lastName = surname;
    return this;
  }
  public withAge(age: number): UserBuilder {
    this._age = age;
    return this;
  }
  public withStreet(street: string): UserBuilder {
    this._street = street;
    return this;
  }
  public build(): User {
    let user1: User = new User(
      this._firstName,
      this._lastName,
      this._age,
      this._street
    );
    return user1;
  }
}

let mainUser: User = UserBuilder.user()
  .withFirstName("Pudge")
  .withLastName("Clown")
  .withAge(123123)
  .withStreet("MidLane")
  .build();
mainUser.printInfo();

let secondUser: User = UserBuilder.user()
  .withFirstName("Rikimaru")
  .withLastName("Пацюк")
  .withAge(888)
  .withStreet("easyLine")
  .build();
secondUser.printInfo();
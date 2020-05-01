export class User {
  // public name: string;

  constructor(public name: string, public age: number) {
    this.name = name;
  }
}

let user = new User("Azra", 18);

console.log(user);

export class User {
  public name: string;

  constructor(name: string, public age: number) {
    this.name = name;
  }

  setName(value: string): void {
    this.name = value;
  }

  getName = (): string => {
    return this.name;
  };

  setAge(value: number): void {
    this.age = value;
  }

  getAge = () => {
    return this.age;
  };
}

// let user = new User("Azra", 18);

// console.log(user);

// inheritance (turunan)

// public = bisa di akses di semua class / dari luar class
// protected = hanya bisa diakses dari class tersebut, dan kelas turunannya
// private = hanya bisa diakses dari class itu sendiri

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";
  static getRoleName: string = "Admin";

  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }

  static getNameRole() {
    return "Hi";
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  set email(value: string) {
    if (value.length < 5) {
      this._email = "Email salah";
    } else {
      this._email = value;
    }
  }

  get email(): string {
    return this._email;
  }
}

// let admin = new Admin("08192719727", "Toni", 16);
// admin.getName();
// admin.setName("Bhaska");
// admin.getAge();
// admin.setAge(19);
// admin.email = "me@me";

let admin = Admin.getNameRole();

console.log(admin);

// setter => berfungsi sebagai validator untuk mengubah property pada class
// getter => berfungsi untuk mengambil data dari sebuah class

// property & static method adalah sebuah property / method yang dapat langsung di dalam class itu sendiri tanpa harus diinisasi terlebih dahulu

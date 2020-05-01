"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    // public name: string;
    function User(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
    }
    return User;
}());
exports.User = User;
var user = new User("Azra", 18);
console.log(user);

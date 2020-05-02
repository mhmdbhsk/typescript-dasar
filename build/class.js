"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, age) {
        var _this = this;
        this.age = age;
        this.getName = function () {
            return _this.name;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.name = name;
    }
    User.prototype.setName = function (value) {
        this.name = value;
    };
    User.prototype.setAge = function (value) {
        this.age = value;
    };
    return User;
}());
exports.User = User;
// let user = new User("Azra", 18);
// console.log(user);
// inheritance (turunan)
// public = bisa di akses di semua class / dari luar class
// protected = hanya bisa diakses dari class tersebut, dan kelas turunannya
// private = hanya bisa diakses dari class itu sendiri
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(phone, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.read = true;
        _this.write = true;
        _this._email = "";
        _this.phone = phone;
        return _this;
    }
    Admin.getNameRole = function () {
        return "Hi";
    };
    Admin.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write,
        };
    };
    Object.defineProperty(Admin.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            if (value.length < 5) {
                this._email = "Email salah";
            }
            else {
                this._email = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Admin.getRoleName = "Admin";
    return Admin;
}(User));
// let admin = new Admin("08192719727", "Toni", 16);
// admin.getName();
// admin.setName("Bhaska");
// admin.getAge();
// admin.setAge(19);
// admin.email = "me@me";
var admin = Admin.getNameRole();
console.log(admin);
// setter => berfungsi sebagai validator untuk mengubah property pada class
// getter => berfungsi untuk mengambil data dari sebuah class
// property & static method adalah sebuah property / method yang dapat langsung di dalam class itu sendiri tanpa harus diinisasi terlebih dahulu

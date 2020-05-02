"use strict";
var Asus = /** @class */ (function () {
    function Asus(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    Asus.prototype.on = function () {
        console.log("Nyala");
    };
    Asus.prototype.off = function () {
        console.log("Mati");
    };
    return Asus;
}());
var Macbook = /** @class */ (function () {
    function Macbook(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    Macbook.prototype.on = function () {
        console.log("Nyala");
    };
    Macbook.prototype.off = function () {
        console.log("Mati");
    };
    return Macbook;
}());
var asus = new Asus("Asus", true);
console.log(asus.on());
var mac = new Macbook("MBP", true);
console.log(mac.name);

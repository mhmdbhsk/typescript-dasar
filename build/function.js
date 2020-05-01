"use strict";
// function
// tipe data pada balikan function
function getName() {
    return "Hello my name is Azra";
}
console.log(getName());
function getAge() {
    return 24;
}
console.log(getAge());
function printName() {
    console.log("Print name");
}
printName();
// argument types pada function
function multiply(value1, value2) {
    return value1 * value2;
}
var result = multiply(3, 5);
console.log(result);
function add(val1, val2) {
    return (val1 += val2);
}
var result1 = add(90, 123);
console.log(result1);
var age = 20;
console.log(age);
var Add = function (val3, val4) {
    return val3 + val4;
};
console.log(Add(13, 78));
// default parameter
var fullName = function (firstName, lastName) {
    if (firstName === void 0) { firstName = "Muhammad"; }
    if (lastName === void 0) { lastName = "Azra"; }
    return firstName + " " + lastName;
};
console.log(fullName("Bhaska", "Muhammad"));
// optional parameter
// tidak boleh digunakan dengan tipe data number
var getUmur = function (val5, val6) {
    return val5 + " " + val6;
    // return val5 + val6;
};
console.log(getUmur(1, 2));

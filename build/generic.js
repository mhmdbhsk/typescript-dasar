"use strict";
// generic adalah tipe data yang dinamis
function getData(value) {
    return value;
}
console.log(getData("Azra").length);
console.log(getData(123));
function myData(value) {
    return value;
}
console.log(myData("Azra").length);
console.log(myData(123));
// generic pada arrow func
var arrowFunc = function (value) {
    return value;
};

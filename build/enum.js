"use strict";
// enum -> tipe data yang menyimpan data konstan
// numeric-enum
// enum Month {
//   JAN = 1,
//   FEB,
//   MAR,
//   APR,
//   MAY,
// }
// console.log(Month.MAR);
// string enums
var Month;
(function (Month) {
    Month["JAN"] = "January";
    Month["FEB"] = "February";
    Month["MAR"] = "March";
    Month["APR"] = "April";
    Month["MAY"] = "May";
})(Month || (Month = {}));
console.log(Month.FEB);

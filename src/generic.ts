// generic adalah tipe data yang dinamis

function getData(value: any) {
  return value;
}

console.log(getData("Azra").length);
console.log(getData(123));

function myData<T>(value: T) {
  return value;
}
console.log(myData("Azra").length);
console.log(myData(123));

// generic pada arrow func

const arrowFunc = <T>(value: T) => {
  return value;
};

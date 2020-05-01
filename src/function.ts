// function

// tipe data pada balikan function
function getName(): string {
  return "Hello my name is Azra";
}

console.log(getName());

function getAge(): number {
  return 24;
}

console.log(getAge());

function printName(): void {
  console.log("Print name");
}

printName();

// argument types pada function

function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

const result = multiply(3, 5);
console.log(result);

function add(val1: number, val2: number): number {
  return (val1 += val2);
}

const result1 = add(90, 123);
console.log(result1);

// function ac type

type Age = number;

let age: Age = 20;

console.log(age);

type Tambah = (val3: number, val4: number) => number;

const Add: Tambah = (val3: number, val4: number): number => {
  return val3 + val4;
};

console.log(Add(13, 78));

// default parameter

const fullName = (
  firstName: string = "Muhammad",
  lastName: string = "Azra"
): string => {
  return firstName + " " + lastName;
};

console.log(fullName("Bhaska", "Muhammad"));

// optional parameter
// tidak boleh digunakan dengan tipe data number

const getUmur = (val5: number, val6?: number): string => {
  return val5 + " " + val6;
  // return val5 + val6;
};

console.log(getUmur(1, 2));

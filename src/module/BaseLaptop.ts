import ILaptop from "./ILaptop";
import * as Keyboard from "./Keyboard";
import { b } from "./Keyboard";

abstract class BaseLaptop<T> implements ILaptop<T> {
  name: string;
  type: T;
  withNumeric: boolean;
  withTouchButton: boolean;
  withTouchScreen: boolean;

  constructor(
    name: string,
    type: T,
    numeric: boolean,
    touchButton: boolean,
    touchScreen: boolean
  ) {
    this.name = name;
    this.type = type;
    this.withNumeric = numeric;
    this.withTouchButton = touchButton;
    this.withTouchScreen = touchScreen;
  }

  a() {
    console.log(Keyboard.a());
  }

  b() {
    console.log(b());
  }
}

export default BaseLaptop;

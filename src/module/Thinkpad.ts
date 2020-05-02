import Laptop from "./BaseLaptop";

class Thinkpad<T> extends Laptop<T> {
  constructor(
    type: T,
    numeric: boolean,
    touchButton: boolean,
    touchScreen: boolean
  ) {
    super("Thinkpad", type, numeric, touchButton, touchScreen);
  }
}

export default Thinkpad;

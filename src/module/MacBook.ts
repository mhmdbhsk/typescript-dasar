import Laptop from "./BaseLaptop";

class MacBook<T> extends Laptop<T> {
  constructor(
    type: T,
    numeric: boolean,
    touchButton: boolean,
    touchScreen: boolean
  ) {
    super("MacBook", type, numeric, touchButton, touchScreen);
  }
}

export default MacBook;

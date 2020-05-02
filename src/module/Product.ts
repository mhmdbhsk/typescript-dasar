import Thinkpad from "./Thinkpad";
import MacBook from "./MacBook";

let X1 = new Thinkpad("X1 Carbon", false, true, true);
console.log(X1);
X1.a();
X1.b();

let MBP = new MacBook("Macbook Pro 2019 16 inch", false, false, false);
console.log(MBP);
MBP.a();
MBP.b();

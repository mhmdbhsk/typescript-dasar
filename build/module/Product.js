"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Thinkpad_1 = __importDefault(require("./Thinkpad"));
var MacBook_1 = __importDefault(require("./MacBook"));
var X1 = new Thinkpad_1.default("X1 Carbon", false, true, true);
console.log(X1);
X1.a();
X1.b();
var MBP = new MacBook_1.default("Macbook Pro 2019 16 inch", false, false, false);
console.log(MBP);
MBP.a();
MBP.b();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
//let uniqueId = uuidv4(); // this would return a unique id
class MenuElement {
    constructor(name, price, emoji) {
        this.name = name;
        this.price = price;
        this.emoji = emoji;
        this.id = (0, uuid_1.v4)();
    }
    //Methods
    printOption() {
        return `${this.name}....${this.price}`;
    }
}
exports.default = MenuElement;

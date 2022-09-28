import { v4 as uuidv4 } from 'uuid';
//let uniqueId = uuidv4(); // this would return a unique id
export default class MenuElement {
  id: string;
  name: string;
  price: number;
  emoji: string;

  constructor(name: string, price: number, emoji: string) {
    this.name = name;
    this.price = price;
    this.emoji = emoji;
    this.id = uuidv4();
  }

  //Methods
  printOption() {
    return `${this.name}....${this.price}`;
  }
}
import Menu from './models/MainMenu';
export default class Main {
  async start() {
    const menu = new Menu();
    await menu.showMainMenu();
  }
}
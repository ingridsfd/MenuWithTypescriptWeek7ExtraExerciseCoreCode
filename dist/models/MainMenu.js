"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MenuElements_1 = __importDefault(require("./MenuElements"));
//import { stringify } from "uuid";
const input_1 = require("./input");
class Menu {
    constructor() {
        this.mainMenu = [];
        this.soupMenu = [];
        this.chefSpecialsMenu = [];
        this.chickenMenu = [];
        this.beefMenu = [];
        this.beveragesMenu = [];
        this.soupOptions = [];
        this.chefSpecialOptions = [];
        this.chickenOptions = [];
        this.beefOptions = [];
        this.beverageOptions = [];
        this.fillMainMenu();
        this.fillOptions();
        this.fillSubMenus();
    }
    //Methods
    fillMainMenu() {
        this.mainMenu = [
            { option: 1, message: 'Soup' },
            { option: 2, message: `Chef's Specials` },
            { option: 3, message: 'Chicken' },
            { option: 4, message: 'Beef' },
            { option: 5, message: 'Beverages' },
            { option: 6, message: 'Exit' },
        ];
    }
    fillOptions() {
        this.soupOptions = [
            new MenuElements_1.default('Wonton Soup(Chicken)', 2.25, '🍲'),
            new MenuElements_1.default('Chicken Corn Soup', 1.95, '🌽'),
            new MenuElements_1.default('Vegetable Corn Soup', 2.25, '🥕'),
        ];
        this.chefSpecialOptions = [
            new MenuElements_1.default('Orange Beeg', 8.95, '🍊'),
            new MenuElements_1.default('Kung Pao Shrimp', 8.50, '🦐'),
        ];
        this.chickenOptions = [
            new MenuElements_1.default('Lemon Chicken', 9.95, '🍋'),
            new MenuElements_1.default('Sesame Chicken', 9.95, '🐔'),
            new MenuElements_1.default('Hunan Chicken', 10.50, '🐣'),
        ];
        this.beefOptions = [
            new MenuElements_1.default('Pepper Steak', 9.95, '🐄'),
            new MenuElements_1.default('Manchurian Beef', 11.95, '🐄'),
        ];
        this.beverageOptions = [
            new MenuElements_1.default('Piña Colada', 3.00, '🍍'),
            new MenuElements_1.default('Spanish Coffee', 5.50, '☕'),
        ];
    }
    fillSubMenus() {
        this.soupMenu = this.soupOptions.map((e) => ({
            name: e.id,
            message: e.printOption(),
        }));
        this.chefSpecialsMenu = this.chefSpecialOptions.map((e) => ({
            name: e.id,
            message: e.printOption(),
        }));
        this.chickenMenu = this.chickenOptions.map((e) => ({
            name: e.id,
            message: e.printOption(),
        }));
        this.beefMenu = this.beefOptions.map((e) => ({
            name: e.id,
            message: e.printOption(),
        }));
        this.beveragesMenu = this.beverageOptions.map((e) => ({
            name: e.id,
            message: e.printOption(),
        }));
    }
    showMainMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            let option = -1;
            let input;
            while (option !== 6) {
                input = yield input_1.Input.getSelect('Select a menu option', this.mainMenu);
                option = input.data;
                switch (option) {
                    case 1:
                        yield this.showSubMenuOption('Select your Soup', this.soupMenu, this.soupOptions);
                        break;
                    case 2:
                        yield this.showSubMenuOption(`Select your Chef's Specials`, this.chefSpecialsMenu, this.chefSpecialOptions);
                        break;
                    case 3:
                        yield this.showSubMenuOption('Select your Chicken', this.chickenMenu, this.chickenOptions);
                        break;
                    case 4:
                        yield this.showSubMenuOption('Select your Beef', this.beefMenu, this.beefOptions);
                        break;
                    case 5:
                        yield this.showSubMenuOption('Select your Beverages', this.beveragesMenu, this.beverageOptions);
                        break;
                    case 6:
                        console.log(`\n
                    *******************************************************
                    ===========================================
                            Enjoy your meal! 🙋🏻‍♂️
                    ===========================================
                    *******************************************************\n`);
                        break;
                }
            }
        });
    }
    showSubMenuOption(message, subMenu, subMenuOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const input = yield input_1.Input.getSelectById(message, subMenu);
            const option = subMenuOptions.find((e) => input.data === e.id);
            console.log(`\n
        ===============================================================
            Here is your: ${option === null || option === void 0 ? void 0 : option.emoji} at a $${option === null || option === void 0 ? void 0 : option.price} cost
        ===============================================================\n`);
        });
    }
}
exports.default = Menu;

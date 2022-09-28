import MenuElement from "./MenuElements";
//import { stringify } from "uuid";
import { Input, Choice, UserOption, SelectChoice } from './input';

export default class Menu {
    mainMenu: SelectChoice[] = [];

    soupMenu: Choice[] = [];
    chefSpecialsMenu: Choice[] = [];
    chickenMenu: Choice[] = [];
    beefMenu: Choice[] = [];
    beveragesMenu: Choice[] = [];

    soupOptions: MenuElement[] = [];
    chefSpecialOptions: MenuElement[] = [];
    chickenOptions: MenuElement[] = [];
    beefOptions: MenuElement[] = [];
    beverageOptions: MenuElement[] = [];

    constructor() {
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
            new MenuElement('Wonton Soup(Chicken)', 2.25, '🍲'),
            new MenuElement('Chicken Corn Soup', 1.95, '🌽'),
            new MenuElement('Vegetable Corn Soup', 2.25, '🥕'),
        ];

        this.chefSpecialOptions = [
            new MenuElement('Orange Beeg', 8.95, '🍊'),
            new MenuElement('Kung Pao Shrimp', 8.50, '🦐'),
        ];

        this.chickenOptions = [
            new MenuElement('Lemon Chicken', 9.95, '🍋'),
            new MenuElement('Sesame Chicken', 9.95, '🐔'),
            new MenuElement('Hunan Chicken', 10.50, '🐣'),
        ];

        this.beefOptions = [
            new MenuElement('Pepper Steak', 9.95, '🐄'),
            new MenuElement('Manchurian Beef', 11.95, '🐄'),
        ];

        this.beverageOptions = [
            new MenuElement('Piña Colada', 3.00, '🍍'),
            new MenuElement('Spanish Coffee', 5.50, '☕'),
        ]
    }

    fillSubMenus() {
        this.soupMenu = this.soupOptions.map((e: MenuElement) => ({
            name: e.id,
            message: e.printOption(),
        }));

        this.chefSpecialsMenu = this.chefSpecialOptions.map((e: MenuElement) => ({
            name: e.id,
            message: e.printOption(),
        }));

        this.chickenMenu = this.chickenOptions.map((e: MenuElement) => ({
            name: e.id,
            message: e.printOption(),
        }));

        this.beefMenu = this.beefOptions.map((e: MenuElement) => ({
            name: e.id,
            message: e.printOption(),
        }));

        this.beveragesMenu = this.beverageOptions.map((e: MenuElement) => ({
            name: e.id,
            message: e.printOption(),
        }));
    }

    async showMainMenu() {
        let option = -1;
        let input: UserOption;
        while (option !== 6) {
            input = await Input.getSelect('Select a menu option', this.mainMenu);
            option = input.data;
            switch (option) {
                case 1:
                    await this.showSubMenuOption(
                        'Select your Soup',
                        this.soupMenu,
                        this.soupOptions
                    );
                    break;
                case 2:
                    await this.showSubMenuOption(
                        `Select your Chef's Specials`,
                        this.chefSpecialsMenu,
                        this.chefSpecialOptions
                    );
                    break;
                case 3:
                    await this.showSubMenuOption(
                        'Select your Chicken',
                        this.chickenMenu,
                        this.chickenOptions
                    );
                    break;
                case 4:
                    await this.showSubMenuOption(
                        'Select your Beef',
                        this.beefMenu,
                        this.beefOptions
                    );
                    break;
                case 5:
                    await this.showSubMenuOption(
                        'Select your Beverages',
                        this.beveragesMenu,
                        this.beverageOptions
                    );
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
    }

    async showSubMenuOption(
        message: string,
        subMenu: Choice[],
        subMenuOptions: MenuElement[]
    ) {
        const input = await Input.getSelectById(message, subMenu);
        const option = subMenuOptions.find((e: MenuElement) => input.data === e.id);
        console.log(`\n
        ===============================================================
            Here is your: ${option?.emoji} at a $${option?.price} cost
        ===============================================================\n`);
    }
}
import Menu from './menu.js'
import DataProcessing from "./dataProcessing.js";

class Main {
    constructor() {
        console.log('test')
        new Menu();
        new DataProcessing();
    }
}

new Main();

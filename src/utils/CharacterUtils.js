"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCharacter = void 0;
const Inventory_1 = require("../models/Inventory");
function createCharacter(name, classType) {
    return {
        name,
        class: classType,
        hp: 10,
        attack: 10,
        defense: 10,
        speed: 10,
        dexterity: 10,
        inventory: [...Inventory_1.initialInventory],
    };
}
exports.createCharacter = createCharacter;

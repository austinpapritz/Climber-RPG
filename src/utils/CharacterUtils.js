"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCharacter = void 0;
const Inventory_1 = require("../models/Inventory");
const Classes_1 = require("../models/Classes");
function createCharacter(name, classType) {
    const baseCharacter = {
        name,
        class: classType,
        weapon: "hands",
        hp: 10,
        attack: 10,
        defense: 10,
        speed: 10,
        dexterity: 10,
        inventory: [...Inventory_1.initialInventory],
    };
    switch (classType) {
        case Classes_1.ClimbingClass.Alpine:
            return (0, Classes_1.applyAlpineClass)(baseCharacter);
        case Classes_1.ClimbingClass.Rock:
            return (0, Classes_1.applyRockClass)(baseCharacter);
        case Classes_1.ClimbingClass.Urban:
            return (0, Classes_1.applyUrbanClass)(baseCharacter);
        default:
            return baseCharacter;
    }
}
exports.createCharacter = createCharacter;

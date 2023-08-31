"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterClassFactory = exports.createBaseCharacter = void 0;
const Inventory_1 = require("../models/Inventory");
const Classes_1 = require("../models/Classes");
function createBaseCharacter(name) {
    const baseCharacter = {
        name,
        class: 'none',
        weapon: 'hands',
        hp: 10,
        attack: 10,
        defense: 10,
        speed: 10,
        dexterity: 10,
        inventory: [...Inventory_1.initialInventory],
    };
    return baseCharacter;
}
exports.createBaseCharacter = createBaseCharacter;
function characterClassFactory(baseCharacter) {
    return (characterClass) => {
        switch (characterClass) {
            case Classes_1.ClimbingClass.Alpine:
                return (0, Classes_1.applyAlpineClass)(baseCharacter);
            case Classes_1.ClimbingClass.Rock:
                return (0, Classes_1.applyRockClass)(baseCharacter);
            case Classes_1.ClimbingClass.Urban:
                return (0, Classes_1.applyUrbanClass)(baseCharacter);
            default:
                return baseCharacter;
        }
    };
}
exports.characterClassFactory = characterClassFactory;

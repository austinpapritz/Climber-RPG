"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyUrbanClass = exports.applyRockClass = exports.applyAlpineClass = exports.ClimbingClass = void 0;
const Inventory_1 = require("./Inventory");
var ClimbingClass;
(function (ClimbingClass) {
    ClimbingClass["Alpine"] = "Alpine";
    ClimbingClass["Rock"] = "Rock";
    ClimbingClass["Urban"] = "Urban";
})(ClimbingClass || (exports.ClimbingClass = ClimbingClass = {}));
function applyAlpineClass(character) {
    return Object.assign(Object.assign({}, character), { weapon: 'dual axes', hp: 8, attack: 7, defense: 14, speed: 15, dexterity: 7, inventory: [...Inventory_1.initialInventory, 'ultralight boots', 'helmet'] });
}
exports.applyAlpineClass = applyAlpineClass;
function applyRockClass(character) {
    return Object.assign(Object.assign({}, character), { weapon: 'quick draw', hp: 12, attack: 14, defense: 6, speed: 8, inventory: [...Inventory_1.initialInventory, 'climbing shoes', 'sunglasses'] });
}
exports.applyRockClass = applyRockClass;
function applyUrbanClass(character) {
    return Object.assign(Object.assign({}, character), { attack: 11, defense: 7, speed: 12, inventory: [...Inventory_1.initialInventory, 'running shoes', 'hat'] });
}
exports.applyUrbanClass = applyUrbanClass;

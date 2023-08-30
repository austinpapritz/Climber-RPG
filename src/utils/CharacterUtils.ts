import { Character } from '../models/Character';
import { initialInventory } from '../models/Inventory';

export function createCharacter(name: string, classType: string): Character {
    return {
        name,
        class: classType,
        weapon: "hands",
        hp: 10,
        attack: 10,
        defense: 10,
        speed: 10,
        dexterity: 10,
        inventory: [...initialInventory],
    };
}
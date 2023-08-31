import { Character } from '../models/Character';
import { initialInventory } from '../models/Inventory';
import { ClimbingClass, applyAlpineClass, applyRockClass, applyUrbanClass  } from '../models/Classes';

export function createBaseCharacter(name: string): Character {
    const baseCharacter: Character = {
        name,
        class: "none",
        weapon: "hands",
        hp: 10,
        attack: 10,
        defense: 10,
        speed: 10,
        dexterity: 10,
        inventory: [...initialInventory],
    };

    return baseCharacter;
}

export function characterClassFactory(baseCharacter: Character) {
    return (characterClass: ClimbingClass): Character => {
        switch (characterClass) {
            case ClimbingClass.Alpine:
                return applyAlpineClass(baseCharacter);
            case ClimbingClass.Rock:
                return applyRockClass(baseCharacter);
            case ClimbingClass.Urban:
                return applyUrbanClass(baseCharacter);
            default:
                return baseCharacter;
        }
    };
}
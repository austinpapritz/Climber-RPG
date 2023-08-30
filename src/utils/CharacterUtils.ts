import { Character } from '../models/Character';
import { initialInventory } from '../models/Inventory';
import { ClimbingClass, applyAlpineClass, applyRockClass, applyUrbanClass  } from '../models/Classes';

export function createCharacter(name: string, classType: ClimbingClass): Character {
    const baseCharacter: Character  = {
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

    switch (classType) {
        case ClimbingClass.Alpine:
            return applyAlpineClass(baseCharacter);
        case ClimbingClass.Rock:
            return applyRockClass(baseCharacter);
        case ClimbingClass.Urban:
            return applyUrbanClass(baseCharacter);
        default: 
            return baseCharacter;    
    }
}


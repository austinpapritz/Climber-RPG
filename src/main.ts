import { ClimbingClass } from "./models/Classes";
import { createCharacter } from "./utils/CharacterUtils";

const charTim = createCharacter('Tim', ClimbingClass.Alpine);
const charJane = createCharacter('Jane', ClimbingClass.Rock);
const charArgon = createCharacter('Argon', ClimbingClass.Urban);

console.log('charTim', charTim);
console.log('charJane', charJane);
console.log('charArgon', charArgon);
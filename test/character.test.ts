import { createCharacter } from '../src/utils/CharacterUtils';
import { ClimbingClass } from '../src/models/Classes';

describe('Character creation', () => {

  test('should create a character with the given name and class', () => {
    const character = createCharacter('Alice', ClimbingClass.Alpine);
    
    expect(character.name).toBe('Alice');
    expect(character.class).toBe(ClimbingClass.Alpine);
    expect(character.weapon).toBe('hands');
    expect(character.hp).toBe(10);
    expect(character.attack).toBe(10);
    expect(character.defense).toBe(10);
    expect(character.speed).toBe(10);
    expect(character.dexterity).toBe(10);
    expect(character.inventory).toEqual(expect.arrayContaining(['harness', '8 carabiner', '30m rope', '4 slings']));
  });
});

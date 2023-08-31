"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterUtils_1 = require("../../src/utils/CharacterUtils");
describe('Character creation', () => {
    test('should create a character with the given name', () => {
        const character = (0, CharacterUtils_1.createBaseCharacter)('Alice');
        expect(character.name).toBe('Alice');
        expect(character.class).toBe('none');
        expect(character.weapon).toBe('hands');
        expect(character.hp).toBe(10);
        expect(character.attack).toBe(10);
        expect(character.defense).toBe(10);
        expect(character.speed).toBe(10);
        expect(character.dexterity).toBe(10);
        expect(character.inventory).toEqual(expect.arrayContaining(['harness', '8 carabiners', '30m rope', '4 slings']));
    });
});

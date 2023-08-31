"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterUtils_1 = require("../utils/CharacterUtils");
const Classes_1 = require("../models/Classes");
describe('Character creation', () => {
    test('should create a character with the given name and class', () => {
        const character = (0, CharacterUtils_1.createCharacter)('Alice', Classes_1.ClimbingClass.Alpine);
        expect(character.name).toBe('Alice');
        expect(character.class).toBe(Classes_1.ClimbingClass.Alpine);
        expect(character.weapon).toBe('hands');
        expect(character.hp).toBeGreaterThanOrEqual(10);
        expect(character.attack).toBeGreaterThanOrEqual(10);
        expect(character.defense).toBeGreaterThanOrEqual(10);
        expect(character.speed).toBeGreaterThanOrEqual(10);
        expect(character.dexterity).toBeGreaterThanOrEqual(10);
        expect(character.inventory).toEqual(expect.arrayContaining(['harness', '8 carabiner', '30m rope', '4 slings']));
    });
    // Test that each class modifies the base character as expected
    test('should apply Alpine class modifiers correctly', () => {
        const character = (0, CharacterUtils_1.createCharacter)('Alice', Classes_1.ClimbingClass.Alpine);
        // Replace with your actual Alpine class modifiers
        expect(character.hp).toBe(15);
        expect(character.defense).toBe(12);
    });
    test('should apply Rock class modifiers correctly', () => {
        const character = (0, CharacterUtils_1.createCharacter)('Bob', Classes_1.ClimbingClass.Rock);
        // Replace with your actual Rock class modifiers
        expect(character.attack).toBe(13);
        expect(character.speed).toBe(12);
    });
    test('should apply Urban class modifiers correctly', () => {
        const character = (0, CharacterUtils_1.createCharacter)('Charlie', Classes_1.ClimbingClass.Urban);
        // Replace with your actual Urban class modifiers
        expect(character.dexterity).toBe(14);
        expect(character.speed).toBe(11);
    });
});

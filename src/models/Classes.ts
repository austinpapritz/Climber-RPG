import { Character } from './Character'
import { initialInventory } from './Inventory'

export enum ClimbingClass {
    Alpine = 'Alpine',
    Rock = 'Rock',
    Urban = 'Urban'
  }

  export function applyAlpineClass(character: Character): Character {
    return {
      ...character,
      weapon: 'dual axes',
      hp: 8,
      attack: 7,
      defense: 14,
      speed: 15,
      dexterity: 7,
      inventory: [...initialInventory, 'ultralight boots', 'helmet']
    }
  }

  export function applyRockClass(character: Character): Character {
    return {
      ...character,
      weapon: 'quick draw',
      hp: 12,
      attack: 14,
      defense: 6,
      speed: 8,
      inventory: [...initialInventory, 'climbing shoes', 'sunglasses']
    }
  }

  export function applyUrbanClass(character: Character): Character {
    return {
      ...character,
      attack: 11,
      defense: 7,
      speed: 12,
      inventory: [...initialInventory, 'running shoes', 'hat']
    }
  }
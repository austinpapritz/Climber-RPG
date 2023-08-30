import { Character } from "./Character"

export enum ClimbingClass {
    Alpine = 'Alpine',
    Rock = 'Rock',
    Urban = 'Urban'
  }

  export function applyAlpineClass(character: Character): Character {
    return {
      ...character,
      // modify attributes here
    }
  }

  export function applyRockClass(character: Character): Character {
    return {
      ...character,
      // modify attributes here
    }
  }

  export function applyUrbanClass(character: Character): Character {
    return {
      ...character,
      // modify attributes here
    }
  }
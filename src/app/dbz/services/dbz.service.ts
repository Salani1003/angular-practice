import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  characters: Character[] = [];

  onNewCharacter(character: Character): void {
    const newCharacter = { ...character, id: uuid() };

    this.characters.push(newCharacter);
  }

  onDeleteCharacter(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}

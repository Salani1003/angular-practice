import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  character: Character = {
    id: '',
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    // debugger;
    if (this.character.name.trim().length === 0) return;

    this.onNewCharacter.emit(this.character);
    this.character = { id: '', name: '', power: 0 };
  }
}

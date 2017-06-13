import { Injectable } from '@angular/core';
import { Character} from './character.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AdventureService {
  characters: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.characters = database.list('characters');
  }

  getCharacter() {
    return this.characters;
  }

  addCharacter(newCharacter: Character){
    this.characters.push(newCharacter);
  }
}

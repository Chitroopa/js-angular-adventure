import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { Router } from '@angular/router';
import { AdventureService } from '../adventure.service';

import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  providers: [AdventureService]
})

export class CharacterListComponent implements OnInit {
  characters: FirebaseListObservable<any[]>;

  constructor(private router: Router, private adventureService: AdventureService) { }

  ngOnInit() {
    this.characters = this.adventureService.getCharacter();
  }

}

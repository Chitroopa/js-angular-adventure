import { Component, OnInit } from '@angular/core';
import { AdventureService } from '../adventure.service';
import { Character } from '../character.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [AdventureService]
})
export class WelcomeComponent implements OnInit{

  constructor(private adventureService: AdventureService) {}

  ngOnInit() { }

  submitForm(inputName: string) {
    var newCharacter: Character = new Character(inputName);
    console.log(newCharacter);
    this.adventureService.addCharacter(newCharacter);

  }

}

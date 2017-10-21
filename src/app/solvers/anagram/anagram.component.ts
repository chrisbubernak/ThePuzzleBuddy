import { Component } from '@angular/core';
import { AnagramService } from './anagram.service';

@Component({
  selector: 'anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['../../app.component.css'],
  providers: [AnagramService]
})
export class AnagramComponent {
    answer = "";

    get input() {
        return this._input;
    }

    set input(val: string) {
        this._input = val;
        this.add();
    }
    
    private _input = "";

    constructor(private readonly anagramService: AnagramService) {}

    add() {
        this.answer = this.anagramService.solve(this.input);
    }

    valid() {
        return true;
    }
}

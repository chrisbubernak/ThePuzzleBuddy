import { Component } from '@angular/core';
import { MorseService } from './morse.service';

@Component({
  selector: 'morse',
  templateUrl: './morse.component.html',
  styleUrls: ['../../app.component.css'],
  providers: [MorseService]
})
export class MorseComponent {
    dotsAndDashes = "";

    current = "";

    answer = "";
    
    constructor(private readonly morseService: MorseService) {}

    click(newChar: string) {
        this.dotsAndDashes += newChar;
        this.current = this.morseService.solve(this.dotsAndDashes);
    }

    add() {
        this.answer += this.morseService.solve(this.dotsAndDashes);
        this.current = "";
        this.dotsAndDashes = "";
    }

    remove() {
        if (this.answer.length === 0) return;
        this.answer = this.answer.substr(0, this.answer.length - 1);
    }
    
    valid(): boolean {
        return this.current !== '#' && this.current !== '';
    }
}

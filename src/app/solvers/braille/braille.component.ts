import { Component } from '@angular/core';
import { BrailleService } from './braille.service';

@Component({
  selector: 'braille',
  templateUrl: './braille.component.html',
  styleUrls: ['../../app.component.css'],
  providers: [BrailleService]
})
export class BrailleComponent {
    topLeft = false;
    topRight = false;
    midLeft = false;
    midRight = false;
    botLeft = false;
    botRight = false;

    current = "";
    
    answer = "";
    
    constructor(private readonly brailleService: BrailleService) {}

    check() {
        this.current = this.brailleService.solve(
            [this.topLeft, this.topRight, this.midLeft, this.midRight, this.botLeft, this.botRight]);
    }

    clear() {
        this.topLeft = false;
        this.topRight = false;
        this.midLeft = false;
        this.midRight = false;
        this.botLeft = false;
        this.botRight = false;
    }

    add() {
        this.answer += this.brailleService.solve(
            [this.topLeft, this.topRight, this.midLeft, this.midRight, this.botLeft, this.botRight]);
        this.clear();
    }

    remove() {
        if (this.answer.length === 0) return;
        this.answer = this.answer.substr(0, this.answer.length - 1);
    }
}

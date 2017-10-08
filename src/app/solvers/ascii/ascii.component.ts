import { Component } from '@angular/core';
import { AsciiService } from './ascii.service';
import { Solver } from '../common/solver.interface';

@Component({
  selector: 'ascii',
  templateUrl: './ascii.component.html',
  styleUrls: ['../../app.component.css'],
  providers: [AsciiService]
})
export class AsciiComponent implements Solver {
    buttons = [1 ,2 , 3 , 4 , 5 , 6 , 7 , 8 , 9, undefined, 0, 'X'];

    number = "";

    current = "";
    
    answer = "";
    
    constructor(private readonly asciiService: AsciiService) {}

    check() {
        this.current = "";
    }

    click(num: number|string) {
        if (num === 'X') {
            this.clear();
            return;
        }
        this.number += num.toString();
        this.current = this.asciiService.solve(Number(this.number));
    }

    clear() {
        this.current = "";
        this.number = "";
    }

    add() {
        this.answer += this.current;
        this.clear();
    }

    remove() {
        if (this.answer.length === 0) return;
        this.answer = this.answer.substr(0, this.answer.length - 1);
    }

    valid(): boolean {
        return this.current !== '#' && this.current !== '';
    }
}

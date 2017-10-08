import { Component } from '@angular/core';
import { RotService } from './rot.service';

@Component({
  selector: 'rot',
  templateUrl: './rot.component.html',
  styleUrls: ['../../app.component.css'],
  providers: [RotService]
})
export class RotComponent {
    n = 13;

    current = "";

    answer = "";

    get input() {
        return this._input;
    }

    set input(val: string) {
        this._input = val;
        this.add();
    }
    
    private _input = "";

    constructor(private readonly rotService: RotService) {}

    add() {
        this.answer = this.rotService.solve(this.input, this.n);
    }

    click(increment: number) {
        this.n = (((this.n += increment) %26)+26)%26;
        this.add();      
    }

    valid() {
        return true;
    }
}

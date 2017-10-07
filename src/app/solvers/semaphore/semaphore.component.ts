import { Component } from '@angular/core';
import { SemaphoreService } from './semaphore.service';

@Component({
  selector: 'semaphore',
  templateUrl: './semaphore.component.html',
  styleUrls: ['../../app.component.css'],
  providers: [SemaphoreService]
})
export class SemaphoreComponent {
    north = false;
    northwest = false;
    northeast = false;
    west = false;
    east = false;
    southwest = false;
    southeast = false;
    south = false;

    current = "";

    answer = "";
    
    constructor(private readonly semaphoreService: SemaphoreService) {}

    check() {
        this.current = this.semaphoreService.solve(
            [this.northwest, this.north, this.northeast, this.west, this.east, this.southwest,this.south, this.southeast]);
    }

    clear() {
        this.north = false;
        this.northwest = false;
        this.northeast = false;
        this.west = false;
        this.east = false;
        this.southwest = false;
        this.southeast = false;
        this.south = false;
        
        this.current = "";
    }

    add() {
        this.answer += this.semaphoreService.solve(
            [this.northwest, this.north, this.northeast, this.west, this.east, this.southwest,this.south, this.southeast]);
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

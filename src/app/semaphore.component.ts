import { Component } from '@angular/core';
import { SemaphoreService } from './semaphore.service';

@Component({
  selector: 'semaphore',
  templateUrl: './semaphore.component.html',
  styleUrls: ['./app.component.css'],
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

    constructor(private readonly semaphoreService: SemaphoreService) {}

    solve() {
        this.answer += this.semaphoreService.solve([this.northwest, this.north, this.northeast, this.west, this.east, this.southwest, this.south, this.southeast]);
    }

    answer = "";
}

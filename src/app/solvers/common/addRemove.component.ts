import { Component, Input } from '@angular/core';
import { Solver } from './solver.interface';

@Component({
  selector: 'add-remove',
  templateUrl: './addRemove.component.html',
  styleUrls: ['../../app.component.css'],
})
export class AddRemoveComponent {
    @Input() solver: Solver;
}


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./app.component.css']
})
export class ToolBarComponent {
  constructor(private readonly router: Router) {}

  showBack() {
    return this.router.url !== '/index';    
  }
}

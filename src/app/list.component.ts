import { Component } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./app.component.css']
})
export class ListComponent {
  tiles = [
    {text: 'Ascii', cols: 1, rows: 1, color: 'lightblue', url: '/ascii'},
    {text: 'Morse', cols: 1, rows: 1, color: 'lightgreen', url: '/morse'},
    {text: 'Semaphore', cols: 1, rows: 1, color: 'lightpink', url: '/semaphore'},
    {text: 'Anagram', cols: 1, rows: 1, color: '#DDBDF1', url: '/solver'},
    {text: 'Braille', cols: 1, rows: 1, color: 'lightpink', url: '/braille'},
    {text: 'Binary', cols: 1, rows: 1, color: 'lightblue', url: '/solver'},
    {text: 'Pigpen', cols: 1, rows: 1, color: 'lightgreen', url: '/solver'},    
  ];
}

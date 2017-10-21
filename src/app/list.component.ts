import { Component } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./app.component.css']
})
export class ListComponent {
  tiles = [
    {text: 'Anagram', cols: 1, rows: 1, color: '#DDBDF1', url: '/anagram'},    
    {text: 'Ascii', cols: 1, rows: 1, color: 'lightblue', url: '/ascii'},
    {text: 'Binary', cols: 1, rows: 1, color: 'lightblue', url: '/binary'},    
    {text: 'Braille', cols: 1, rows: 1, color: 'lightpink', url: '/braille'},    
    {text: 'Morse', cols: 1, rows: 1, color: 'lightgreen', url: '/morse'},
    {text: 'Pigpen', cols: 1, rows: 1, color: 'lightgreen', url: '/pigpen'},  
    {text: 'Rot', cols: 1, rows: 1, color: '#DDBDF1', url: '/rot'},            
    {text: 'Semaphore', cols: 1, rows: 1, color: 'lightpink', url: '/semaphore'},
  ];
}

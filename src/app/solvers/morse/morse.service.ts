import { Injectable } from '@angular/core';

@Injectable()
export class MorseService {
   solve(dotsAndDashes: string): string {
    
    if (dotsAndDashes === '.-') return 'A';
    if (dotsAndDashes === '-...') return 'B';
    if (dotsAndDashes === '...') return 'C';
    if (dotsAndDashes === '-..') return 'D';
    if (dotsAndDashes === '.') return 'E';
    if (dotsAndDashes === '.-.') return 'F';
    if (dotsAndDashes === '--.') return 'G';
    if (dotsAndDashes === '....') return 'H';
    if (dotsAndDashes === '..') return 'I';
    if (dotsAndDashes === '.---') return 'J';
    if (dotsAndDashes === '-.-') return 'K';
    if (dotsAndDashes === '.-..') return 'L';
    if (dotsAndDashes === '--') return 'M';
    if (dotsAndDashes === '-.') return 'N';
    if (dotsAndDashes === '---') return 'O';
    if (dotsAndDashes === '.--.') return 'P';
    if (dotsAndDashes === '--.-') return 'Q';
    if (dotsAndDashes === '.-.') return 'R';
    if (dotsAndDashes === '...') return 'S';
    if (dotsAndDashes === '-') return 'T';    
    if (dotsAndDashes === '..-') return 'U';
    if (dotsAndDashes === '...-') return 'V';
    if (dotsAndDashes === '.--') return 'W';
    if (dotsAndDashes === '-..-') return 'X';
    if (dotsAndDashes === '-.--') return 'Y';
    if (dotsAndDashes === '--..') return 'Z';    

    return '#';
   }
}

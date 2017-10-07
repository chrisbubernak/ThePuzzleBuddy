import { Injectable } from '@angular/core';

@Injectable()
export class MorseService {
    solve(dotsAndDashes: string): string {

        if (dotsAndDashes === '.-') return 'A';
        if (dotsAndDashes === '-...') return 'B';
        if (dotsAndDashes === '-.-.') return 'C';
        if (dotsAndDashes === '-..') return 'D';
        if (dotsAndDashes === '.') return 'E';
        if (dotsAndDashes === '..-.') return 'F';
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


    // TODO: use the code below to create a smarter morse code solver.
    dict = {
        '.-':'A', '-...':'B',  '-.-.':'C', '-..': 'D', '.':'E', '..-.':'F', '--.':'G', '....':'H', '..':'I',
        '.---':'J', '-.-':'K', '.-..':'L', '--':'M', '-.':'N', '---': 'O', '.--.':'P', '--.-':'Q', '.-.':'R',
        '...':'S', '-':'T', '..-':'U', '...-':'V', '.--':'W', '-..-':'X', '-.--':'Y', '--..':'Z'
    };
       
    solve2(dotsAndDashes: string) {
        let results = this.solve2Internal([], dotsAndDashes);
        // [EEEE, II, EIE, H, IEE, IEE]
        // =>
        // [II]
    }
   
    private solve2Internal(words, str) {
       if (str === "") {
         let ret = "";
         for (let word of words) {
            ret += this.dict[word] + " ";
         }
         return [ret.trim()];
       }
       let results = [];
       let cur = '';
       for (let char of str) {
           str = str.substr(1);
           cur += char;
           if (Object.keys(this.dict).indexOf(cur) > -1) {
               results = results.concat(this.solve2Internal(words.concat([cur]), str));
           }
       }
       return results;
   }
}

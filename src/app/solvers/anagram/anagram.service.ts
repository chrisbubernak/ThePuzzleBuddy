import { Injectable } from '@angular/core';
import { ENGLISH_WORDS } from '../common/words';

@Injectable()
export class AnagramService {

    // Dictionary where the keys are alphanumeric sorted strings and the values are the actual english words.
    private anagramDict = {};

    constructor() {
        this.createAnagramDict(ENGLISH_WORDS);
    }

    solve(scramble: string): string {
        const words = this.anagramDict[scramble.toUpperCase().split('').sort().join()];
        if (words) {
            return words.join(', ');
        }
        return '#';
    }

    private createAnagramDict(words: string[]) {
        for (let word of words) {
            word = word.toLocaleUpperCase();
            let chars = word.split('');
            chars.sort();
            const anagram = chars.join();
            if (anagram in this.anagramDict) {
                this.anagramDict[anagram].push(word);
            } else {
                this.anagramDict[anagram] = [word];
            }
        }
    }
}
   
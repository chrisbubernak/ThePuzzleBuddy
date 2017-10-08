import { Injectable } from '@angular/core';

const A_ASCII_VALUE = 65;

const ALPHABET_LENGTH = 26;

@Injectable()
export class RotService {
    solve(word: string, n: number): string {
        const upper = word.toUpperCase();
        let ret = "";

        for(let i = 0; i < upper.length; i++) {
            let charCode = upper.charCodeAt(i);
            if (charCode < A_ASCII_VALUE || charCode >= (A_ASCII_VALUE + ALPHABET_LENGTH)) {
                ret += upper[i];
            }
            else {
                charCode -= A_ASCII_VALUE;
                charCode = (charCode + n) % ALPHABET_LENGTH;
                const newCode = charCode + A_ASCII_VALUE;
                ret += String.fromCharCode(newCode);
            }
        }

        return ret;
    }
}

import { Injectable } from '@angular/core';

@Injectable()
export class AsciiService {
    solve(number: number): string {
        if (number < 33 || number > 126) return '#';

        return String.fromCharCode(number);
    }
}
   
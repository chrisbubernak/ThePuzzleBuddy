import { Injectable } from '@angular/core';

@Injectable()
export class SemaphoreService {
   solve(directions: boolean[]): string {
    if (!this.isValid(directions)) {
      return '#';
    }
    
    if (directions[5] && directions[6]) return 'A';
    if (directions[3] && directions[6]) return 'B';
    if (directions[0] && directions[6]) return 'C';
    if (directions[1] && directions[6]) return 'D';
    if (directions[2] && directions[6]) return 'E';
    if (directions[4] && directions[6]) return 'F';
    if (directions[7] && directions[6]) return 'G';
    if (directions[3] && directions[5]) return 'H';
    if (directions[1] && directions[6]) return 'I';
    if (directions[2] && directions[4]) return 'J';
    if (directions[1] && directions[5]) return 'K';
    if (directions[2] && directions[5]) return 'L';
    if (directions[4] && directions[5]) return 'M';
    if (directions[5] && directions[7]) return 'N';
    if (directions[0] && directions[3]) return 'O';
    if (directions[1] && directions[3]) return 'P';
    if (directions[2] && directions[3]) return 'Q';
    if (directions[3] && directions[4]) return 'R';
    if (directions[3] && directions[7]) return 'S';
    if (directions[0] && directions[1]) return 'T';
    if (directions[0] && directions[2]) return 'U';
    if (directions[1] && directions[7]) return 'V';
    if (directions[2] && directions[4]) return 'W';
    if (directions[2] && directions[7]) return 'X';
    if (directions[0] && directions[4]) return 'Y';
    if (directions[4] && directions[7]) return 'Z';
    
    return '#';
   }

   private isValid(directions: boolean[]): boolean {
    let count = 0;
    for (let direction of directions) {
      if (direction === true) {
       count++;
      }
      if (count > 2) {
        return false;
      }
    }
    return count > 1;
   }

}

import { Injectable } from '@angular/core';

@Injectable()
export class BrailleService {
   solve(bumps: boolean[]): string {
    const binary = this.toBinaryString(bumps);
    if (binary === '100000') return 'A';
    if (binary === '101000') return 'B';
    if (binary === '110000') return 'C';
    if (binary === '110100') return 'D';
    if (binary === '100100') return 'E';
    if (binary === '111000') return 'F';
    if (binary === '111100') return 'G';
    if (binary === '101100') return 'H';
    if (binary === '011000') return 'I';
    if (binary === '011100') return 'J';
    if (binary === '100010') return 'K';
    if (binary === '101010') return 'L';
    if (binary === '110010') return 'M';
    if (binary === '110110') return 'N';
    if (binary === '100110') return 'O';
    if (binary === '111010') return 'P';
    if (binary === '111110') return 'Q';
    if (binary === '101110') return 'R';
    if (binary === '011010') return 'S';
    if (binary === '011110') return 'T';
    if (binary === '100011') return 'U';
    if (binary === '101011') return 'V';
    if (binary === '011101') return 'W';
    if (binary === '110011') return 'X';
    if (binary === '110111') return 'Y';
    if (binary === '100111') return 'Z';
    
    return '#';
   }

  private toBinaryString(bumps: boolean[]) {
    let ret = '';
    for (let bump of bumps) {
      ret += bump ? '1' : '0';
    }
    return ret;
  }
}

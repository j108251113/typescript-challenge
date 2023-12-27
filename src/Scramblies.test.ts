import { describe, it, expect } from 'vitest';
import { scramble } from './Scramblies';

describe('單一字元', () => {
    it('單一字元若相等時回傳的布林值為真', () => {
        expect(scramble('a', 'a')).toBeTruthy();
    });
    it('單一字元若不相等時回傳的布林值為假', () => {
        expect(scramble('a', 'b')).toBeFalsy();
    });
});
import { describe, it, expect } from 'vitest';
import { scramble } from './Scramblies';

describe('亂碼排列', () => {
    it('單一字元若相等時回傳的布林值為真', () => {
        expect(scramble('a', 'a')).toBeTruthy();
    });
});
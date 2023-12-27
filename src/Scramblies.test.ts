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

describe('兩個字元', () => {
    it('兩個字元若完全相等時回傳的布林值為真', () => {
        expect(scramble('ab', 'ab')).toBeTruthy();
    });

    it('兩個字元若字元相同，順序不同時，回傳的布林值為真', () => {
        expect(scramble('ab', 'ba')).toBeTruthy();
    });

    it('只有一個字元相同且位置相同，另一個字元不相同但位置相同，回傳的布林值為假', () => {
        expect(scramble('ab', 'ac')).toBeFalsy();
        expect(scramble('cb', 'ab')).toBeFalsy();
    });

    it('兩個字元都不相同時，回傳的布林值為假', () => {
        expect(scramble('ab', 'cd')).toBeFalsy();
    });

    it('兩個字串的長度不相等，但字串1包含字串2的字元時，回傳的布林值為真', () => {
        expect(scramble('ab', 'a')).toBeTruthy();
        expect(scramble('ab', 'b')).toBeTruthy();
    });

    it('兩個字串的長度不相等，且字串1不包含字串2的字元時，回傳的布林值為假', () => {
        expect(scramble('ab', 'c')).toBeFalsy();
    });
});

describe('三個字元', () => {
    it('兩個字串完全相等時回傳的布林值應為真', () => {
        expect(scramble('abc', 'abc')).toBeTruthy();
    })
});
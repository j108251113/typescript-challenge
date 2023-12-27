// Description:

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

//     Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered.

// Examples

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

export function scramble(str1: string, str2: string): boolean {
    const charCountMap = new Map<string, number>();

    for (const char of str1) {
        charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
    }

    for (const char of str2) {
        if (!charCountMap.has(char) || charCountMap.get(char)! <= 0) {
            return false;
        }

        charCountMap.set(char, charCountMap.get(char)! - 1);
    }

    return true;
}
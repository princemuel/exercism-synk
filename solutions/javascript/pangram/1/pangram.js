/**
 * @param {string} phrase
 */
export function isPangram(phrase) {
    let mask = 0;
    for (let idx = 0; idx < phrase.length; idx++) {
        const code = phrase.charCodeAt(idx) | 0x20; // normalize to lowercase
        if (code >= 97 && code <= 122) {
            mask |= 1 << (code - 97);
            if (mask === 0x3ffffff) return true; // all 26 bits set
        }
    }
    return false;
}

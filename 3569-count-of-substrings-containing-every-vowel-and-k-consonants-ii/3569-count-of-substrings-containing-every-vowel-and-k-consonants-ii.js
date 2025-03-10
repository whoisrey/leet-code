/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function(word, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    function atleast(k, word) {
        let count = 0
        let consonantCount = 0
        let left = 0
        let freq = new Map();
        let wordLength = word.length;

        for (let right = 0; right < wordLength; right++) {
            let ch = word[right];
            if (!vowels.has(ch)) {
                consonantCount++;
            }

            freq.set(ch, (freq.get(ch) || 0) + 1);

            while (consonantCount >= k && hasAllVowels(freq)) {
                count += (wordLength - right);
                let leftChar = word[left];
                if (!vowels.has(leftChar)) {
                    consonantCount--;
                }

                freq.set(leftChar, freq.get(leftChar) - 1);

                if (freq.get(leftChar) === 0) {
                    freq.delete(leftChar);
                }
                
                left++;
            }
        }

        return count;
    }

    function hasAllVowels(freq) {
        return ['a', 'e', 'i', 'o', 'u'].every(v => freq.has(v) && freq.get(v) > 0);
    }

    return atleast(k, word) - atleast(k + 1, word);    
};
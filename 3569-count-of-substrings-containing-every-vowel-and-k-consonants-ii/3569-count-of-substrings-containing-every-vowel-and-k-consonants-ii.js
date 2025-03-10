/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function(word, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    function atleast(k, word) {
        let count = 0, consonantCount = 0, left = 0, freq = new Map();
        let n = word.length;

        for (let right = 0; right < n; right++) {
            let ch = word[right];
            if (!vowels.has(ch)) consonantCount++;

            freq.set(ch, (freq.get(ch) || 0) + 1);

            while (consonantCount >= k && hasAllVowels(freq)) {
                count += (n - right);
                let leftChar = word[left];
                if (!vowels.has(leftChar)) consonantCount--;
                freq.set(leftChar, freq.get(leftChar) - 1);
                if (freq.get(leftChar) === 0) freq.delete(leftChar);
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
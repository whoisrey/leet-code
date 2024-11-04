/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let count = 1;
    let answer = "";
    
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i + 1]) {
            count++;
            if (count === 9) {
                answer += count + word[i]
                count = 0;
            }
        } else {
            if (count > 0) {
                answer += count + word[i]    
            }
            count = 1;
        }
    }
    
    return answer
};
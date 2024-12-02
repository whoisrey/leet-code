/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    const arr = sentence.split(' ');
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].slice(0, searchWord.length) === searchWord) return i + 1;
    }
    
    return -1;
};
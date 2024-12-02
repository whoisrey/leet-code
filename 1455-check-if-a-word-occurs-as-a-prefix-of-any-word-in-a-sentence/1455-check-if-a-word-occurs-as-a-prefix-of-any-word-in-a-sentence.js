/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    const wordsArray = sentence.split(' ');
    
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].slice(0, searchWord.length) === searchWord) return i + 1;
    }
    
    return -1;
};
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
//     function isAllowed(firstWord, secondWord) {
//         let count = 0;
        
//         for (const i of secondWord) {
//             if(firstWord.includes(i)) count++;
//         }
        
//         return count === secondWord.length ? true : false;
//     }
    
//     let count = 0;
    
//     for (const word of words) {
//         let string = "";
        
//         for (const i of word) {
//             if(!string.includes(i)) string += i;
//         }
        
//         if (isAllowed(allowed, string)) count++;
//     }
    
//     return count;
    
    let set = new Set(allowed)
    
    return words.reduce((a, w) => {
        return w.split('').every(l => set.has(l)) ? ++a : a
    }, 0)
};
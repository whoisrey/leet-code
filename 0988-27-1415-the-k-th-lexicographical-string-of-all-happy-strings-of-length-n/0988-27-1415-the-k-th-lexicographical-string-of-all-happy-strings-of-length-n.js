/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    function dfs(str) {
        if (output) return;

        if (str.length == n) {
            if (++index == k) output = str;
            return;
        }

        for (const letter of letters) {
            if (str.length && str[str.length - 1] == letter) continue;
            dfs(str + letter);
        }
    }
    
    const letters = ['a', 'b', 'c'];

    let output = '';
    let index = 0;
    
    dfs('');

    return output;
};
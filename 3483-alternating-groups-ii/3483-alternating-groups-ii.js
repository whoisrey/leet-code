/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
    let answer = 0;
    let count = 1;

    for (let i = 0; i < k - 1; ++i) {
        colors.push(colors[i]);
    }


    for (let i = 1; i < colors.length; ++i) {
        if (colors[i] !== colors[i - 1]) {
            ++count;
        } else {
            count = 1;
        }

        if (count >= k) ++answer;
    }

    return answer;    
};
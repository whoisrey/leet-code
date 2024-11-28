/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const temp = {};
  let answer = 0;

  for (let char of s) {
    if (!temp[char]) {
        temp[char] = 1;
    } else {
        temp[char]++;
    }
    // temp[char] = (temp[char] || 0) + 1;
      
    if (temp[char] % 2 == 0) {
        answer += 2;
    }
  }
    
  return s.length > answer ? answer + 1 : answer;
};
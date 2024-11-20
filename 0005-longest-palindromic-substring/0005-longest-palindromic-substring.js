/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length;
    if (n < 2) return s; // 문자열 길이가 1 이하일 때는 그대로 반환

    let dp = Array.from({ length: n }, () => Array(n).fill(false));
    let start = 0, maxLength = 1;

    // 1. 길이가 1인 문자열은 항상 회문
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    // 2. 길이가 2인 문자열 처리
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            start = i;
            maxLength = 2;
        }
    }

    // 3. 길이가 3 이상인 문자열 처리
    for (let length = 3; length <= n; length++) {
        for (let i = 0; i <= n - length; i++) {
            let j = i + length - 1; // 부분 문자열의 끝 인덱스
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                start = i;
                maxLength = length;
            }
        }
    }

    // 4. 결과 반환
    return s.substring(start, start + maxLength);
};
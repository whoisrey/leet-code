/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
//     let num1 = 0;
//     let num2 = 0;
//     let pointer = 1;
    
//     while (pointer < n + 1) {
//         if (pointer % m !== 0) {
//             num1 += pointer;
//         } else {
//             num2 += pointer;
//         }
        
//         pointer++;
//     }
    
//     return num1 - num2;
        const div= parseInt(n/m)
    return (((n*(n+1))/2) - (2*m*((div*(div+1))/2)))
};
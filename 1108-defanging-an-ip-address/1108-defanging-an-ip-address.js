/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let answer = "";
    
    for (let i = 0; i < address.length; i++) {
        if (address[i] === ".") {
            answer += "[.]";
        } else {
            answer += address[i]
        }
    }
    
    return answer;
};
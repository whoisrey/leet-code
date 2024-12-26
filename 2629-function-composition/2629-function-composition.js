/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    const arr = [...functions];
    
    return function(x) {
        let result = x;
        
        for (let i = functions.length - 1; 0 <= i; i--) {
            result = functions[i](result);
        }
        
        return result;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
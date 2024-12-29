/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    const hour = [];
    
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) hour.push(i);
    }
    
    return !hour.length ? 0 : hour.length
};
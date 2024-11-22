/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let firstIndex = 0;
    let lastIndex = nums.length - 1;
    
    while (firstIndex <= lastIndex) {
	    let midIndex = Math.floor((firstIndex + lastIndex) / 2)
	    if (nums[midIndex] === target) {
		    return midIndex;
		  } else if (nums[midIndex] < target) {
			  firstIndex++;
			} else {
				lastIndex--;
			}
    }
        
    return -1;
};
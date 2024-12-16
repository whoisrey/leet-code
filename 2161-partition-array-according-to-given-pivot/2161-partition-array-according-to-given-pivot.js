/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
		const length = nums.length;
		const output = [];

		let start = 0;
		let end = length - 1;

		let pointer1 = 0;
		let pointer2 = length - 1;
	
		while (start < nums.length) {
			if (nums[start] < pivot) output[pointer1++] = nums[start];
			if (nums[end] > pivot) output[pointer2--] = nums[end];
	
			start++;
			end--;
		}
	
		while (pointer1 <= pointer2) {
			output[pointer1++] = pivot;
		}
	
		return output;
};
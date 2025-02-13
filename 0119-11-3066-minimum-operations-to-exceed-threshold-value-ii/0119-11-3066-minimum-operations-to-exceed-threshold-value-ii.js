/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const queue = new MinPriorityQueue(nums);
    let count = 0;
    
    for (const num of nums) {
        queue.enqueue(num);
    }

    while(queue.size() && queue.front().element < k){
        const firstMinValue = queue.dequeue().element;
        const secondMinValue = queue.dequeue().element;

        const val = Math.min(firstMinValue,secondMinValue) * 2 + Math.max(firstMinValue,secondMinValue);
        queue.enqueue(val);
        count++;
    }
    
    
    return count;
};
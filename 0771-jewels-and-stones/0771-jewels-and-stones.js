/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
		const jewel = new Set(jewels);
		return stones.split('').reduce((sum, stone) => sum + jewel.has(stone), 0);
};
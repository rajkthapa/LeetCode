/**
 * @param {number[]} nums
 * @return {number}
 */
 var findShortestSubarray = function(nums) {
    const frequencyMap = new Map();
    const leftIndexMap = new Map();
    const rightIndexMap = new Map();
    let maxFrequency = 0;
    let minLength = Infinity;

    // Step 1: Calculate frequency of each element and find the degree
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        // Update frequency map
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);

        // Update left index map (leftmost occurrence)
        if (!leftIndexMap.has(num)) {
            leftIndexMap.set(num, i);
        }

        // Update right index map (rightmost occurrence)
        rightIndexMap.set(num, i);

        // Update max frequency
        maxFrequency = Math.max(maxFrequency, frequencyMap.get(num));
    }

    // Step 2: Calculate the length of the subarray with the same degree as the original array
    for (const [key, frequency] of frequencyMap) {
        if (frequency === maxFrequency) {
            const length = rightIndexMap.get(key) - leftIndexMap.get(key) + 1;
            minLength = Math.min(minLength, length);
        }
    }

    return minLength;
};

// Example usage:
const nums = [1, 2, 2, 3, 1];
console.log(findShortestSubarray(nums)); // Output: 2


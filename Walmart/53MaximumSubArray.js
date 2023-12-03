/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Choose between extending the current subarray or starting a new subarray at the current element
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // Update the maximum sum
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};

// Example usage:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // Output: 6 (subarray [4, -1, 2, 1])

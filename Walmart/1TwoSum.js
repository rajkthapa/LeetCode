var twoSum = function(nums, target) {
    const numMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numMap.hasOwnProperty(complement)) {
            // Found the pair
            return [numMap[complement], i];
        }

        // Store the current number and its index in the map
        numMap[nums[i]] = i;
    }

    // If no solution is found
    return [];
};

console.log(twoSum([1,2,3,4,5], 6))
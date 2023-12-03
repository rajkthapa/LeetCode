var merge = function(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }

    // Step 1: Sort intervals based on start times
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];

    // Step 2: Merge overlapping intervals
    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = result[result.length - 1];

        // If current interval overlaps with the last merged interval, merge them
        if (currentInterval[0] <= lastMergedInterval[1]) {
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // If not overlapping, add the current interval to the result
            result.push(currentInterval);
        }
    }

    return result;
};

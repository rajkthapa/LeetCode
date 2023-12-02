// There are n pieces arranged in a line, and each piece is colored either by 'A' or by 'B'. You are given a string colors of length n where colors[i] is the color of the ith piece.

// Alice and Bob are playing a game where they take alternating turns removing pieces from the line. In this game, Alice moves first.

// Alice is only allowed to remove a piece colored 'A' if both its neighbors are also colored 'A'. She is not allowed to remove pieces that are colored 'B'.
// Bob is only allowed to remove a piece colored 'B' if both its neighbors are also colored 'B'. He is not allowed to remove pieces that are colored 'A'.
// Alice and Bob cannot remove pieces from the edge of the line.
// If a player cannot make a move on their turn, that player loses and the other player wins.
// Assuming Alice and Bob play optimally, return true if Alice wins, or return false if Bob wins.

/**
 * @param {string} colors
 * @return {boolean}
 */
 var winnerOfGame = function(colors) {
    const n = colors.length;

    // Helper function to count consecutive characters in the string
    const countConsecutive = (str, char) => {
        let count = 0;
        let maxCount = 0;

        for (let i = 0; i < str.length; i++) {
            if (str[i] === char) {
                count++;
                maxCount = Math.max(maxCount, count);
            } else {
                count = 0;
            }
        }

        return maxCount;
    };

    // Count consecutive 'A's and 'B's
    const countA = countConsecutive(colors, 'A');
    const countB = countConsecutive(colors, 'B');

    // Alice and Bob make optimal moves based on the counts
    const aliceWins = countA > countB && countB > 0;

    return aliceWins;
};

const colors = "AAABBBBBBAAAAAAAA";
console.log(winnerOfGame(colors)); // Output: true

const colors1 = "AA";
console.log(winnerOfGame(colors1)); // Output: false

const colors3 = "ABBBBBBBAAA"
console.log(winnerOfGame(colors3)); // Output: false

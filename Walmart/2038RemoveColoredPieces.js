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
    let n = colors.length;
    let aliceWins = 0, bobWins = 0;
    for (let i = 1; i < n - 1; i++) {
        if (colors[i - 1] == 'A' && colors[i] == 'A' && colors[i + 1] == 'A') {
            aliceWins++;
        } else if (colors[i - 1] == 'B' && colors[i] == 'B' && colors[i + 1] == 'B') {
            bobWins++;
        }
        }
        if (aliceWins > bobWins) {
            return true;
        }
        return false;
}

const colors = "AAABBBBBBAAAAAAAA";
console.log(winnerOfGame(colors)); // Output: true

const colors1 = "AA";
console.log(winnerOfGame(colors1)); // Output: false

const colors3 = "ABBBBBBBAAA"
console.log(winnerOfGame(colors3)); // Output: false

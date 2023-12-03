/**
 * @param {string} date
 * @return {string}
 */
 var reformatDate = function(date) {
    const months = {
        "Jan": "01", "Feb": "02", "Mar": "03", "Apr": "04", "May": "05", "Jun": "06",
        "Jul": "07", "Aug": "08", "Sep": "09", "Oct": "10", "Nov": "11", "Dec": "12"
    };

    const parts = date.split(' ');

    const year = parts[2];
    const month = months[parts[1]];
    const day = parts[0].length === 4 ? parts[0].slice(0, 2) : "0" + parts[0].charAt(0);

    return `${year}-${month}-${day}`;
};

// Example usage:
const date = "20th Oct 2052";
console.log(reformatDate(date)); // Output: "2052-10-20"


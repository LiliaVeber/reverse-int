module.exports = function reverse(n) {
    let numString = String(Math.abs(n));
    let newNumber = Number(numString.split("").reverse().join(""));

    return newNumber;
};

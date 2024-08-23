const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if (num == 1) return 1;

    let prev2 = 0;
    let prev1 = 1;
    let cur = 0

    for (let i=1; i<num; i++) {
        cur = prev2 + prev1;
        prev2 = prev1;
        prev1 = cur;
    }
    return cur;
};

// Do not edit below this line
module.exports = fibonacci;

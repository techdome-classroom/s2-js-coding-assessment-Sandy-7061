var romanToInt = function(s) {
    const roman_to_int = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    let prev_value = 0;
    
    for (let i = 0; i < s.length; i++) {
        let current_value = roman_to_int[s[i]];
        if (current_value > prev_value) {
            total += current_value - 2 * prev_value;
        } else {
            total += current_value;
        }
        prev_value = current_value;
    }
    
    return total;
};

module.exports = { romanToInt };

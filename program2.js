class Solution:
    def romanToInt(self, s: str) -> int:
        # Define a mapping from Roman numerals to integers
        roman_to_int = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        
        total = 0
        prev_value = 0
        
        # Iterate through the string of Roman numerals
        for char in s:
            current_value = roman_to_int[char]
            
            # If the current value is greater than the previous value, it indicates subtraction
            if current_value > prev_value:
                total += current_value - 2 * prev_value
            else:
                total += current_value
                
            # Update the previous value
            prev_value = current_value
        
        return total
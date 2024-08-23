const palindromes = function (string) {
    
    string = string.toLowerCase();
    const punctuation = ["!", ".", ",", " "];
    
    for (let i=0, j=string.length -1; i<=j;) {

        if (punctuation.includes(string[i])) {
            i++;
            continue;
        }
        if (punctuation.includes(string[j])) {
            j--;
            continue;
        }
        if (string[i] != string[j]) return false;
        i++;
        j--;
    }
    return true;
};

const palindromes2 = function(string) {
    const validChars = "abcdefghijklmnopqrstuvwxyz0123456789";

    const cleanedString = string
        .toLowerCase()
        .split('')
        .filter((char) => validChars.includes(char))
        .join('');

    const reversedString = cleanedString.split('').reverse().join('');

    return cleanedString == reversedString;
};

// Do not edit below this line
module.exports = palindromes2;

function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

// Приклад використання
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // "jumped"
